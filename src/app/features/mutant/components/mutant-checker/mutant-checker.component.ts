import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MutantService } from '../../../../core/services/mutant.service';

interface ValidationResult {
  isMutant?: boolean;
  message: string;
  type: 'success' | 'info' | 'error';
}

@Component({
  selector: 'app-mutant-checker',
  templateUrl: './mutant-checker.component.html',
  styleUrls: ['./mutant-checker.component.css']
})
export class MutantCheckerComponent {
  dnaForm: FormGroup;
  result: ValidationResult | null = null;
  isLoading = false;

  readonly examples = {
    mutant: 'ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG',
    human: 'ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG'
  };

  constructor(
    private fb: FormBuilder,
    private mutantService: MutantService
  ) {
    this.dnaForm = this.fb.group({
      dnaSequence: ['', Validators.required]
    });
  }

  validateDna(): void {
    if (this.dnaForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.result = null;

    try {
      const input = this.dnaForm.get('dnaSequence')?.value || '';
      const dnaArray = input
        .split(',')
        .map((seq: string) => seq.trim().toUpperCase())
        .filter((seq: string) => seq.length > 0);

      if (dnaArray.length === 0) {
        this.result = {
          message: 'Por favor ingresa al menos una secuencia de ADN.',
          type: 'error'
        };
        return;
      }

      if (!this.mutantService.validarDna(dnaArray)) {
        this.result = {
          message: 'ADN inválido: debe ser una matriz NxN con solo caracteres A, T, C y G.',
          type: 'error'
        };
        return;
      }

      const isMutant = this.mutantService.isMutant(dnaArray);

      this.result = {
        isMutant,
        message: isMutant
          ? '¡Es un mutante! Se detectaron múltiples secuencias idénticas.'
          : 'Es humano. No se detectaron suficientes secuencias mutantes.',
        type: isMutant ? 'success' : 'info'
      };
    } catch {
      this.result = {
        message: 'Ocurrió un error inesperado al procesar el ADN.',
        type: 'error'
      };
    }
  }

  loadExample(type: 'mutant' | 'human'): void {
    this.dnaForm.patchValue({
      dnaSequence: this.examples[type]
    });
    this.result = null;
  }

  clearForm(): void {
    this.dnaForm.reset();
    this.result = null;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.dnaForm.controls).forEach(key => {
      this.dnaForm.get(key)?.markAsTouched();
    });
  }

  get dnaSequenceControl() {
    return this.dnaForm.get('dnaSequence');
  }
}