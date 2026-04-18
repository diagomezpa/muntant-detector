import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MutantCheckerComponent } from './components/mutant-checker/mutant-checker.component';

@NgModule({
  declarations: [
    MutantCheckerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MutantCheckerComponent
  ]
})
export class MutantModule { }