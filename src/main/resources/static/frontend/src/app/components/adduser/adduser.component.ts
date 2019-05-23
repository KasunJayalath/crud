import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sharedservice/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  private user:User

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.user =this.userService.getter();
  }

  processForm(){
    if(this.user.id == undefined){
      this.userService.createUser(this.user).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/']);
      },(error)=>{
        console.log(error);
      })
    }
    else{
      this.userService.updateUser(this.user).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/']);
      },(error)=>{
        console.log(error);
      })
    }
  }

}
