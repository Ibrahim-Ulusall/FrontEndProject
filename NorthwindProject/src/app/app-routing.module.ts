import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product/category/:categoryId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
