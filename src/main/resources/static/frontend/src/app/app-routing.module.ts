import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './components/listuser/listuser.component';
import { AdduserComponent } from './components/adduser/adduser.component';

const routes: Routes = [
  {path:'',component:ListuserComponent},
  {path:'add',component:AdduserComponent},
  {path:'**', redirectTo:'/',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
