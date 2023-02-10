import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any;
  constructor(myService: UsersService) {
    myService.getAllUsers().subscribe(
      {
        next: (data) => { this.users = data; },
        error: (error) => { this.users = error; }
      }
    );

  }
}
