import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViaCep } from '../components/cadastro/viaCepModel';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  url_API: string = "http://viacep.com.br/ws/"

  constructor(private http: HttpClient){ }

  getConsultaCep(cep: string): Observable<any> {
    return this.http
      .get(`${this.url_API}${cep}/json`);
  }
}
