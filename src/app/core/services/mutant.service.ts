import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutantService {

  constructor() { }

  /**
   * Validates if the DNA array is valid (NxN matrix with only A, T, C, G characters)
   * @param dna Array of strings representing DNA sequences
   * @returns true if the DNA is valid, false otherwise
   */
  validarDna(dna: string[]): boolean {
    const n = dna.length;
    return dna.every(row =>
      row.length === n && /^[ATCG]+$/.test(row)
    );
  }

  /**
   * Determines if a given DNA sequence belongs to a mutant
   * A mutant has more than one sequence of four identical letters,
   * obliquely, horizontally or vertically
   * @param dna Array of strings representing DNA sequences
   * @returns true if the DNA belongs to a mutant, false otherwise
   */
  isMutant(dna: string[]): boolean {
    const n = dna.length;
    let count = 0;

    const matrix = dna.map(row => row.split(''));

    const directions = [
      [0, 1],   // horizontal
      [1, 0],   // vertical
      [1, 1],   // diagonal
      [1, -1]   // diagonal inversa
    ];

    const isValid = (x: number, y: number) =>
      x >= 0 && x < n && y >= 0 && y < n;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (const [dx, dy] of directions) {
          let k = 0;
          let char = matrix[i][j];

          while (
            k < 4 &&
            isValid(i + dx * k, j + dy * k) &&
            matrix[i + dx * k][j + dy * k] === char
          ) {
            k++;
          }

          if (k === 4) {
            count++;
            if (count > 1) return true;
          }
        }
      }
    }

    return false;
  }
}