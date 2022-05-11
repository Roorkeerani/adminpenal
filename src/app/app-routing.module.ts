import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserviewComponent } from './userview/userview.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "users",
    component : UsersComponent
  },
  {
    path : "User-Create",
    component : UserCreateComponent
  },
  {
    path : "user/:id",
    component : UserviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
