import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { CartComponent } from './comps/cart/cart.component';
import { OrderComponent } from './comps/order/order.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Fixed/navbar/navbar.component';
import { FooterComponent } from './Fixed/footer/footer.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { UpdateFoodComponent } from './comps/update-food/update-food.component';
import { AddFoodComponent } from './comps/add-food/add-food.component';
import { AdminLoginComponent } from './comps/admin-login/admin-login.component';
import { AdminregisterComponent } from './comps/adminregister/adminregister.component';
import { EditFoodComponent } from './comps/edit-food/edit-food.component';
import { CategoryPipe } from './Pipes/category.pipe';
import { AboutUsComponent } from './Fixed/about-us/about-us.component';
import { ContactUsComponent } from './Fixed/contact-us/contact-us.component';
import { ReviewComponent } from './Fixed/review/review.component';
import { AddCuisineComponent } from './comps/add-cuisine/add-cuisine.component';
import { DeleteCuisineComponent } from './comps/delete-cuisine/delete-cuisine.component';
import { UpdateProfileComponent } from './comps/update-profile/update-profile.component';
import { SearchByNamePipe } from './Pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateFoodComponent,
    AddFoodComponent,
    AdminLoginComponent,
    AdminregisterComponent,
    EditFoodComponent,
    CategoryPipe,
    AboutUsComponent,
    ContactUsComponent,
    ReviewComponent,
    AddCuisineComponent,
    DeleteCuisineComponent,
    UpdateProfileComponent,
    SearchByNamePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,FooterComponent]
})
export class AppModule { }
