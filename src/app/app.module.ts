import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucessoCadastroComponent } from './components/sucesso-cadastro/sucesso-cadastro.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaioridadeDirective } from './directives/maioridade.directive';
import { ValidandoCepDirective } from './directives/validando-cep.directive';

@NgModule({
  declarations: [
    AppComponent,
    SucessoCadastroComponent,
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    MensagemComponent,
    MaioridadeDirective,
    ValidandoCepDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
