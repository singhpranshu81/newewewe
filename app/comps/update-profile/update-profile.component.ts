import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/entity/Customer';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  customer:Customer = {
    customerId:0,
    fullName:'',
    role:'',
    gender:'',
    mobileNumber:'',
    email:'',
    password:''
  }

  constructor(private customerService:CustomerService,private router:Router){}
  userId= JSON.parse(localStorage.getItem('user') || '{}').customerId;

  ngOnInit(): void {
    this.customerService.getCustomerById(this.userId).subscribe((data)=>{
      this.customer=data;
    })

  }
  onUpdate(){
     this.customerService.updateCustomer(this.customer).subscribe((data) => {
      window.alert("User updated...")
      console.log("updated"+data); // Log the response
      this.router.navigate(['/dashboard'])
    }

     )
  }
}
