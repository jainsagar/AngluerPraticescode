import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public nroute:Router){}

  goToLogin(){
//this.nroute.navigate(['Login',{name:'Shantisagar'}]);
this.nroute.navigate(['Login'],{queryParams:{name:'Shantisagar'}});
  }

}
