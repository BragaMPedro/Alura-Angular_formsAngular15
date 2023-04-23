import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  constructor(private router: Router) {}

  cadastrar(form: NgForm) {
    form.valid
      ? this.router.navigate(['sucesso'])
      : alert('Formulário inválido');
    console.log(form.controls);
  }
}
