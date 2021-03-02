import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { Login2Component } from './login2/login2.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { VideoListModule } from './video-list/video-list.module';

const routes: Routes = 
[
  { path: 'products', component : ProductsComponent} , 
  { path: 'orders', component : MyOrdersComponent} , 
  { path: 'admin/orders', component : AdminOrdersComponent} , 
  { path: 'admin/products', component : ProductsComponent} , 
  { path: 'shopping-cart', component : ShoppingCartComponent} , 
  { path: 'login', component :  Login2Component} , 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
