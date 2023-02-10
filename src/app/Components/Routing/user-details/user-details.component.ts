import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  users: any;
  ID: any;
  constructor(myService: UsersService, myActivatedRoute: ActivatedRoute) {
    this.ID = myActivatedRoute.snapshot.params["id"];
    myService.getUserByID(this.ID).subscribe(
      {
        next: (data) => { this.users = data; },
        error: (error) => { this.users = error; }
      }
    );

  }
}
