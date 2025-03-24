import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
  name :string|null = ""; 
constructor(private route:ActivatedRoute){

} 
ngOnInit()
{
  this.name = this.route.snapshot.params["name"];
   this.route.queryParams.subscribe(parms => {
    this.name = parms['name'];

  });
this.route.data.subscribe(d => {
  this.name = d['name'];
});

}
}
