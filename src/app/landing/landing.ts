import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Beneficios } from "../beneficios/beneficios";

@Component({
  selector: 'app-root', // ✅ define onde o Angular deve injetar
  standalone: true,
  imports: [FormsModule, Header, Footer, Beneficios],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {
  formData = {
    nome: '',
    localidade: '',
    whatsapp: '',
    valorConta: ''
  };

  enviarWhatsApp() {
    //const numeroEmpresa = '5585986441000';
    const numeroEmpresa = '5585999964078';
    const mensagem = `Olá, meu nome é ${this.formData.nome}, sou de ${this.formData.localidade}. Meu WhatsApp é ${this.formData.whatsapp} e o valor da minha conta de luz é R$ ${this.formData.valorConta}. Gostaria de saber mais sobre energia solar.`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}