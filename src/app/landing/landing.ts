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
    const numeroEmpresa = '5585991172199';
    const numeroLimpo = this.formData.whatsapp.replace(/\D/g, '');
    const mensagem = `Olá, meu nome é ${this.formData.nome}, sou de ${this.formData.localidade}. Quero economizar em ${this.formData.tipoCliente}. Meu WhatsApp é ${numeroLimpo} e o valor da minha conta de luz é R$ ${this.formData.valorConta}. Gostaria de saber mais sobre energia solar.`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
