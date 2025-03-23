import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TolistComponent } from './tolist/tolist.component';
import { ForpraticComponent } from './forpratic/forpratic.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:"Login",component:LoginComponent },
    {path:"TodoList",component:TolistComponent  },
    {path:"forLoop",component:ForpraticComponent  },
    {path:"**", component:ErrorpageComponent}
];
