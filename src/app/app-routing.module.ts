import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutantCheckerComponent } from './features/mutant/components/mutant-checker/mutant-checker.component';

const routes: Routes = [
  { path: '', component: MutantCheckerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }