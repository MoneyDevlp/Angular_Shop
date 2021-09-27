import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbountComponent } from './component/abount/abount.component';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AbountComponent },
      { path: 'productList', component: ProductListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
