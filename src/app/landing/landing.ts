import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Beneficios } from "../beneficios/beneficios";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    Header,
    Footer,
    Beneficios,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {
  formData = {
    nome: '',
    localidade: '',
    tipoCliente: '',
    whatsapp: '',
    tipoRecurso: '',
    valorConta: ''
  };

  enviarWhatsApp() {
    //const numeroEmpresa = '5585986441000';
    const numeroEmpresa = '5585991172199';
    //const numeroEmpresa2 = '5585991172199'; // número alternativo
    const numeroLimpo = this.formData.whatsapp.replace(/\D/g, '');

    // ✅ Define qual número usar conforme o valor da conta
    //const numeroDestino = this.formData.valorConta === 'Até 300' ? numeroEmpresa2 : numeroEmpresa1;

    // ✅ Monta a mensagem
    //const mensagem = `Olá, meu nome é ${this.formData.nome}, sou de ${this.formData.localidade}. Quero economizar em ${this.formData.tipoCliente}. Tipo de recurso ${this.formData.tipoRecurso}. Meu WhatsApp é ${numeroLimpo} e o valor da minha conta de luz é R$ ${this.formData.valorConta}. Gostaria de saber mais sobre energia solar.`;

    const mensagem = `
      Olá, meu nome é *${this.formData.nome}*.
      Sou de *${this.formData.localidade}*.
      Quero economizar em: *${this.formData.tipoCliente}*.
      Tipo de recurso: *${this.formData.tipoRecurso}*.
      Meu WhatsApp é: *${numeroLimpo}*.
      O valor da minha conta de luz é: R$ *${this.formData.valorConta}*.

      Gostaria de saber mais sobre energia solar.`;

    /*const mensagem = `Olá! 👋  
      Meu nome é ${this.formData.nome}, sou de ${this.formData.localidade}.  

      Quero economizar em *${this.formData.tipoCliente}* utilizando *${this.formData.tipoRecurso}*.  
      💬 Meu WhatsApp é ${numeroLimpo}.  
      💡 O valor médio da minha conta de luz é *R$ ${this.formData.valorConta}*.  

      Gostaria de saber mais sobre as opções de *energia solar*.`;*/


    // ✅ Gera o link do WhatsApp
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
