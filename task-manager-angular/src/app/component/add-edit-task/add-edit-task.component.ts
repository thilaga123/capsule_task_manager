import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {

  form: FormGroup;
  submitted:boolean = false;
task:any;
  slider: any;
  constructor(private fb:FormBuilder,  private router: Router, private service: AppService,private dataRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setForm();
    if(this.router.url.split("/")[1] == "edit-task"){
      const key = JSON.parse(this.dataRoute.snapshot.params['task']);
      this.task = key;
      console.log(this.task);
      this.form.patchValue(this.task);
      this.slider = this.task.Priority;
    }
    
  }

  setForm():void{
    this.form = this.fb.group({
      Task: [null, Validators.required],
      Parent_Task: [null,[Validators.required]],
      Priority: [null, Validators.required],
      Start_Date: [null, Validators.required],
      End_Date: [null, Validators.required]
        });
  }

  hasError(controlName, validationName){
    return this.form.get(controlName).hasError(validationName) && (this.form.get(controlName).touched || this.submitted);
  }

  onSubmit():void{
    this.submitted = true;
   let  obj = {...this.form.value};
    if(this.form.valid){
      if(this.task){
        obj._id = this.task._id;
        obj.Status = this.task.Status;
        obj.Parent_ID = this.task.Parent_ID;
        this.service.updateTask(obj).subscribe(res=>{
          alert("successfully Updated!!!")
          this.router.navigate(['/view-task']);
        });
      }
      else{
   obj.Parent_ID = null;
   obj.Status = "InProgress";
        this.service.createTask(obj).subscribe((res)=>{
          this.router.navigate(['/view-task']);
      });
      }
      
    }
  }

}
