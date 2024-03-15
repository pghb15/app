import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { RoleComponent } from './Components/role/role.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'roles', component: RoleComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // redirect to `users-component` if the path is empty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
