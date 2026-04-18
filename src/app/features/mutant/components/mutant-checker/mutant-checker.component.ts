import { Component } from '@angular/core';
import { MutantService } from '../../../../core/services/mutant.service';

@Component({
  selector: 'app-mutant-checker',
  templateUrl: './mutant-checker.component.html',
  styleUrl: './mutant-checker.component.css'
})
export class MutantCheckerComponent {

  inputDna: string = '';
  resultado: boolean | null = null;
  error: string = '';

  constructor(private mutantService: MutantService) {}

  validar() {
    this.error = '';
    this.resultado = null;
    
    const dnaArray = this.inputDna.split(',').map(x => x.trim());
    
    if (!this.mutantService.validarDna(dnaArray)) {
      this.error = 'ADN inválido. Debe ser una matriz NxN con solo caracteres A, T, C, G';
      return;
    }
    
    this.resultado = this.mutantService.isMutant(dnaArray);
  }
}

