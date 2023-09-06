import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TruncatePipe } from './pipes/truncate.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    NavigationComponent,
    ProductComponent,
    CategoryComponent,
    VatAddedPipe,
    FilterPipe,
    CartSummaryComponent,
    CapitalizePipe,
    LoginComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    OrderByPipe,
    ProductDetailComponent,
    AdminDashboardComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-right'
    }),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
