import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  tasks: any;

  constructor(private service:AppService, private route: Router) { }

  ngOnInit() {
    this.service.getAllTasks().subscribe(result=>this.tasks = result);
      }
      endTask(task){
        task.Status = "Completed";
        console.log(task);
        this.service.updateTask(task).subscribe(result=>{
        alert("Task completed!!!");
        })
      }
      editTask(task){
          this.route.navigate(['edit-task', JSON.stringify(task)]);
        
      }
}
