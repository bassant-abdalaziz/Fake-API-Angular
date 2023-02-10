import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { ProfileComponent } from './Components/Routing/profile/profile.component';
import { UserDetailsComponent } from './Components/Routing/user-details/user-details.component';
import { UsersComponent } from './Components/Routing/users/users.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "", redirectTo: 'users', pathMatch: 'full' },
  { path: "profile", component: ProfileComponent },
  { path: "details/:id", component: UserDetailsComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
