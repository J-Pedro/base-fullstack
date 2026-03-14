import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
