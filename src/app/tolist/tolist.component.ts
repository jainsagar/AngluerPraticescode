import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tolist',
  imports: [FormsModule],
  templateUrl: './tolist.component.html',
  styleUrl: './tolist.component.css'
})
export class TolistComponent {
task:string = "";
taskList :{Id:number, task:string}[] = [];

AddTask()
{
   this.taskList.push({Id: this.taskList.length + 1 , task : this.task} );
   this.task = "";
}
Delete(val:number)
{
this.taskList = this.taskList.filter((item)=> item.Id!=val);

}


}
