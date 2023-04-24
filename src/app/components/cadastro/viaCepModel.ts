export class ViaCep {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string

  constructor(params: any) {
    this.bairro = params.bairro;
    this.cep = params.cep;
    this.complemento = params.complemento;
    this.ddd = params.ddd;
    this.gia = params.gia;
    this.ibge = params.ibge;
    this.localidade = params.localidade;
    this.logradouro = params.logradouro;
    this.siafi = params.siafi;
    this.uf = params.uf;
  }
};
