import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideoListComponent } from './video-list/video-list.component';
// import { VideoListModule } from './video-list/video-list.module';
// import { studentServices } from './components/services/students.service';
import { from } from 'rxjs';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostCallBack } from './services/post-callBack'



import { SummaryPipe } from './pipes/summary.pipe';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { BootstrapJumbotronComponent } from './bootstrap-jumbotron/bootstrap-jumbotron.component';
import { TabbedContentComponent } from './components/tabbed-content/tabbed-content.component';
// import { ItShareComponent } from './itshare.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DBServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { AngularTestComponent } from './angular-test/angular-test.component';
import { InputFormatDirective } from './input-format.directive';
import { LoginComponent } from './login/login.component';
import { CustomFormsModule } from 'ng2-validation';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Login2Component } from './login2/login2.component';




@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    SummaryPipe,
    CountriesListComponent,
    BootstrapJumbotronComponent,
    TabbedContentComponent,
    // VideoListModule,
    // ItShareComponent,
    MyFirstComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    AngularTestComponent,
    InputFormatDirective,
    LoginComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    Login2Component

    


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CustomFormsModule,
    ReactiveFormsModule,
    NgbModule
    



  ],
  providers: [
    // studentServices
    PostsService,
    DBServices,
    ItshareApiService,
    PostCallBack
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
