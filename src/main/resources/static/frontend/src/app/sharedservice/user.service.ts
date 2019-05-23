import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:User =new User();

  private baseUrl:string ='http://localhost:8080/api';
  
  
  constructor(private _http:HttpClient) { }


  getUsers() : Observable<User[]>{
    return this._http.get<User[]>(this.baseUrl+'/users');
  }

  // getUser(id:Number) : Observable<User>{
  //   return this._http.get<User>(this.baseUrl+'/user/'+id);
  // }

  deleteUser(id:Number) : Observable<any>{
    return this._http.delete(this.baseUrl+'/user/'+id);
  }

  createUser(user:User) : Observable<User>{
    return this._http.post<User>(this.baseUrl+'/user', user);
  }

  updateUser(user:User) : Observable<User>{
    return this._http.put<User>(this.baseUrl+'/user', user);
  }


  setter(user:User){
    this.user =user;
  }

  getter(){
    return this.user;
  }

}
