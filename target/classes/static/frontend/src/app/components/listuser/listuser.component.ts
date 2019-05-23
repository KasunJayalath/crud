import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sharedservice/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data)=>{this.users=data,(error)=>{console.log(error)}});
  }

}
