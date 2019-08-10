import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTaskComponent } from './component/view-task/view-task.component';
import { AddEditTaskComponent } from './component/add-edit-task/add-edit-task.component';

const routes: Routes = [
  { path: 'view-task',component:ViewTaskComponent },
  { path: 'add-task',component: AddEditTaskComponent},
  { path: 'edit-task/:task',component: AddEditTaskComponent},
  { path: '',   redirectTo: '/view-task', pathMatch: 'full' },
  { path: '**',redirectTo:'view-task',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

