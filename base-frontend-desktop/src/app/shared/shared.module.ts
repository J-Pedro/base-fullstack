import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // Exporta tudo que será reutilizado
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
