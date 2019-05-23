import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sharedservice/user.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private users:User[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data)=>{
      this.users=data,
      (error)=>{console.log(error)}});
  }

  deleteUser(user:User){
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(user.id).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);
      },(error)=>{
        alert("Could not delete user");
      })
    }
  }

  updateUser(user){
    this.userService.setter(user)
    this.router.navigate(['/add']);
  }

  newUser(){
    let user =new User();
    this.userService.setter(user)
    this.router.navigate(['/add']);
  }
  

}
