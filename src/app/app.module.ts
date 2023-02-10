import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './Components/Routing/profile/profile.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { UsersComponent } from './Components/Routing/users/users.component';
import { UserDetailsComponent } from './Components/Routing/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ErrorComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
