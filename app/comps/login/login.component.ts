import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDetails = {
    userName: '',
    password: '',
    role: 'Customer'
  };

  forgotPasswordModel = { email: '' };
  resetPasswordModel = { newPassword: '', confirmPassword: '' };
  forgotErrorMessage: string | null = null;
  resetErrorMessage: string | null = null;
  isForgotPassword: boolean = false;
  isResetPassword: boolean = false;
  otp: number = 0;
  verifyotp:number=0;
  gya:boolean=true;
  isEmailSent:boolean=false;


  errorMessage: string | null = null;

  constructor(private customerService:CustomerService,private router: Router) { }
  goToDash(){
    this.customerService.loginCustomer(this.loginDetails.userName,this.loginDetails.password,this.loginDetails.role).subscribe(
      (data:any)=>{
        if(data){
          localStorage.setItem('user',JSON.stringify(data));
          this.router.navigate(['/dashboard'])
        }else{
          this.errorMessage="Invalid Credentials"
        }
      },
      (error)=>{
        this.errorMessage="Invalid Credentials"
      }
    )
   
  }


  goTOAdminLogin(){
    this.router.navigate(['/adminlogin'])
  }
  onSubmit() {
    // Your login logic
  }

  onForgotPassword() {
    // Your logic to send reset link
  }
  customer:any={};
  sendOtp(){
    console.log(this.forgotPasswordModel.email);
    this.customerService.getCustomerbyEmail(this.forgotPasswordModel.email).subscribe(
      (data:any)=>{
        if(data){
         
          this.customer=data;
          window.alert("Email Verified in our database")
          this.gya=false;
          this.otp=Math.floor(1000 + Math.random() * 9000);
          emailjs.send('service_3ccghdr', 'template_8cw6nm9', {
            OTP: this.otp,
           email:this.forgotPasswordModel.email
          },{
            publicKey: 'l_8NkYnlAjt3gNZ0h'
          }).then((response)=> {
            this.isEmailSent=true;
            console.log('SUCCESS!', response.status, response.text);
            window.alert("Otp sent successfully...")
          });


        }else{
          
          window.alert("Email not registered")
          this.router.navigate(['/'])
        }
      },
      (error)=>{
       
        this.router.navigate(['/register'])
      }
    )

  }
  verifyOtp(){
    if(this.verifyotp==this.otp){
      this.isForgotPassword = false;
      this.isResetPassword = true; 
      window.alert(" OTP succesfully verified!! Click on Reset Password to reset your password")
    }
    else{
      window.alert(" Wrong OTP ")
    } 
  }

  onResetPassword() {
    // Your logic to handle resetting the password
    if (this.resetPasswordModel.newPassword === this.resetPasswordModel.confirmPassword) {
      this.customer.password=this.resetPasswordModel.newPassword;
      this.customerService.updateCustomer(this.customer).subscribe(
        (data)=>{
          window.alert("Password reset successfully")
        }
      )
     this.router.navigate(['/about'])
    } else {
      this.resetErrorMessage = 'Passwords do not match.';
    }
  }

  toggleForgotPassword(event: Event) {
    event.preventDefault();
    this.isForgotPassword = !this.isForgotPassword;
    this.isResetPassword = false; // Reset state
    this.errorMessage = null;
    this.forgotErrorMessage = null;
    this.resetErrorMessage = null;
  }

  toggleResetPassword(event: Event) {
    event.preventDefault();
    this.isResetPassword = !this.isResetPassword;
    this.isForgotPassword = false; // Reset state
    this.forgotErrorMessage = null;
    this.resetErrorMessage = null;
  }
}
