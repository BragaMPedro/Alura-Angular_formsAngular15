import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { ViaCep } from './viaCepModel';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {

  viaCep!: ViaCep;

  constructor(private router: Router, private service: ConsultaCepService) {}

  cadastrar(form: NgForm) {
    form.valid
      ? this.router.navigate(['sucesso'])
      : alert('Formulário inválido');
    console.log(form.controls);
  };
  
  consultaCep(input: NgModel) {
    const cep = input.value;
    
    return this.service.getConsultaCep(cep)
    .subscribe(res =>{
      res.erro ? console.log(res) : this.viaCep = new ViaCep(res);
      console.log(res);
      
    });
  };
}
