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
    valorConta: ''
  };

  enviarWhatsApp() {
    const numeroEmpresa1 = '5585986441000';
    const numeroEmpresa2 = '5585991172199'; // número alternativo
    const numeroLimpo = this.formData.whatsapp.replace(/\D/g, '');

    // ✅ Define qual número usar conforme o valor da conta
    const numeroDestino =
      this.formData.valorConta === 'Até 300' ? numeroEmpresa2 : numeroEmpresa1;

    // ✅ Monta a mensagem
    const mensagem = `Olá, meu nome é ${this.formData.nome}, sou de ${this.formData.localidade}. Quero economizar em ${this.formData.tipoCliente}. Meu WhatsApp é ${numeroLimpo} e o valor da minha conta de luz é R$ ${this.formData.valorConta}. Gostaria de saber mais sobre energia solar.`;

    // ✅ Gera o link do WhatsApp
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }


  /*enviarWhatsApp() {
    const numeroEmpresa = '5585999964078';
    const numeroLimpo = this.formData.whatsapp.replace(/\D/g, '');
    const mensagem = `Olá, meu nome é ${this.formData.nome}, sou de ${this.formData.localidade}. Quero economizar em ${this.formData.tipoCliente}. Meu WhatsApp é ${numeroLimpo} e o valor da minha conta de luz é R$ ${this.formData.valorConta}. Gostaria de saber mais sobre energia solar.`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }*/
}
