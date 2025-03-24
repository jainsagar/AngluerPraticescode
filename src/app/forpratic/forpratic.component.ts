import { Component,computed,signal,WritableSignal,effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forpratic',
  imports: [FormsModule,RouterLink],
  templateUrl: './forpratic.component.html',
  styleUrl: './forpratic.component.css'
})
export class ForpraticComponent {
  bName = "";
  users =["Ram","Sham","Anil","Raj"];
  students = [
    {name:"Ram",age:19, email:"ram@test.com"},
    {name:"Sham",age:32, email:"sham@test.com"},
    {name:"Anil",age:23, email:"anil@test.com"},
    {name:"Raj",age:25, email:"raj@test.com"}

  ];
constructor(){
  effect(()=>{
    console.log("count : " , this.count())
  });
}
GetName(sname:string)
{
  alert(sname);
}



//*************************************** */

count = signal(10);

setval(val:string)
{
 if(val == "icn")
 {
  this.count.set(this.count()+1);
 }
 else{
  this.count.set(this.count()-1);
 }
}

//*************************************** Signal Data Type & Value */
ncount : WritableSignal<string|number> =  signal<string|number>(10); 

updatencount()
{
this.ncount.set("Hi Sagar");

}

//*************************************** Signal Computed  */
cx = signal(10);
cy = signal(20);
cz = computed(()=>this.cx() + this.cy());

updateCsginal(val:Event)
{

this.cx.update(()=> (!isNaN(Number( (val.target as HTMLInputElement).value )) ? Number((val.target as HTMLInputElement).value) : 10) );

}
}
