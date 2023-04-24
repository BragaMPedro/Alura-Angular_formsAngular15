import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maioridade]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaioridadeDirective,
    multi: true
  }]
})
export class MaioridadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = new Date(control.value);
    const anoNascimento = dataNascimento.getFullYear();
    const anoAtual = new Date().getFullYear();

    return anoNascimento + 18 <= anoAtual ? null : {"maioridade": true};

  }

}
