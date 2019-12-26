import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user-service.service";

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.sass']
})
export class UserDemoComponent {
  userName: string;

  constructor(private userService: UserService) { 
    
  }
  
  signIn():void {
    this.userService.setUser({
      name: 'm David'
    });
    
    this.userName = this.userService.getUser().name;
    console.log('User name is:', this.userName);
  }

}
