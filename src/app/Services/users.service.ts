import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient: HttpClient) {
  }

  //1)URL
  private URL_DB = "https://jsonplaceholder.typicode.com/users";

  //2)Create Methods
  getAllUsers() {
    return this.myClient.get(this.URL_DB);
  }

  getUserByID(id: any) {
    return this.myClient.get(this.URL_DB + "/" + id);
  }
}
