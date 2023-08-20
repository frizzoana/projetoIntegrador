import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf, MatIconModule, CommonModule, FlexLayoutModule ]
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    const produtoSelecionado = this.lancamentos1.find(item => item.id === itemId);
    if (produtoSelecionado) {
      const navigationExtras: NavigationExtras = {
        state: {
          produto: produtoSelecionado
        }
      };
      this.router.navigate(['/detalhes'], navigationExtras);
    }
  }
  verDetalhes2(itemId: string) {
    const produtoSelecionado = this.lancamentos2.find(item => item.id === itemId);
    if (produtoSelecionado) {
      const navigationExtras: NavigationExtras = {
        state: {
          produto: produtoSelecionado
        }
      };
      this.router.navigate(['/detalhes'], navigationExtras);
    }
  }

  toggleFavorito(index: number): void {
    this.fingerboards[index].favorito = !this.fingerboards[index].favorito
  }

  toggleFavorito1(index: number): void {
    this.lancamentos1[index].favorito = !this.lancamentos1[index].favorito
  }

  toggleFavorito2(index: number): void {
    this.lancamentos2[index].favorito = !this.lancamentos2[index].favorito
  }

  nome: string = "Guilherme";
  sobrenome: string = "Prata";
  fingerboards: Array<any> =[
    {
      id: 1,
      produto: 'Fingerboard Completo Jordan Azul',
      foto: 'https://i.ibb.co/p3sjvbm/Fingerboard-Completo-Inove-Collab-Guy-Sneaker-Jordan-Azul.png',
      preco: 284.90,
      favorito: true,
    },
    {
      id: 2,
      produto: 'Fingerboard Completo Jordan Red',
      foto: 'https://i.ibb.co/K2DTWxS/Finger-Comp-J1.png',
      preco: 189.99,
      favorito: true,
    },
    {
      id: 3,
      produto: 'Fingerboard Completo - Rod Filmes',
      foto: 'https://i.ibb.co/NZBGGBn/Fingerboard-Completo-Inove-Rod-Filmes.png',
      preco: 199.90,
      favorito: true,
    },
    {
      id: 4,
      produto: 'Fingerboard Completo - Cheese and Fingers',
      foto: 'https://i.ibb.co/fdgk5cS/Fingerboard-Completo-Inove-Cheese-and-Fingers.png',
      preco: 159.99,
      favorito: true,
    },
    {
      id: 5,
      produto: 'Rodas Especiais PRO Urethane White',
      foto: 'https://i.ibb.co/3TT5LSL/Roda-Special-urethane-white.png',
      preco: 99.90,
      favorito: false,
    }
  ]

  lancamentos1: Array<any> =[
    {
      id: 1,
      produto: 'DECK AIR JORDAN 1 34MM',
      foto: 'https://i.ibb.co/NpxfCZF/Deck-Air-Jordan1-34mm-removebg-preview.png',
      preco: 64.90,
      favorito: false,
    },
    {
      id: 2,
      produto: 'DECK JORDAN BLUE',
      foto: 'https://i.ibb.co/WnCdJHy/Deck-Sneaker-Jordan-Blue-34mm-removebg-preview.png',
      preco: 39,
      favorito: false,
    },
    {
      id: 3,
      produto: 'FTS BAG CAMUFLADA',
      foto: 'https://i.ibb.co/dGVJtZ8/finger-Bag-Camo-removebg-preview.png',
      preco: 29.90,
      favorito: false,
    },
    {
      id: 4,
      produto: 'FTS BAG PRETA SIMPLES',
      foto: 'https://i.ibb.co/jHW4V9t/bag-removebg-preview.png',
      preco: 19.90,
      favorito: true,
    }
  ]

  lancamentos2: Array<any> =[
    {
      id: 1,
      produto: 'RODA URETHANE WHITE',
      foto: 'https://i.ibb.co/3TT5LSL/Roda-Special-urethane-white.png',
      preco: 64.90,
      favorito: false,
    },
    {
      id: 2,
      produto: 'TRUCK PRO GOLD',
      foto: 'https://i.ibb.co/mvZdGLT/TRUCK-PRO-GOLD-removebg-preview.png',
      preco: 39.90,
      favorito: false,
    },
    {
      id: 3,
      produto: 'FINGERBOARD MINI RAMP',
      foto: 'https://i.ibb.co/MCyXTtM/Fingerboard-Completo-Mini-Ramp-1.png',
      preco: 290.00,
      favorito: false,
    },
    {
      id: 4,
      produto: 'Fingerboard STU RECIFE',
      foto: 'https://i.ibb.co/Z1zVqB7/STU-nacional-recifre-removebg-preview.png',
      preco: 199.90,
      favorito: true,
    }
  ]

  diferenciais: Array<any> =[
    {
      nome: 'Diferencial parcelamento',
      foto: 'https://i.ibb.co/2sjb8PQ/diferenciais-12x.jpg',
    },
    {
      nome: 'Diferencial frete',
      foto: 'https://i.ibb.co/PMZwrRR/diferenciais-frete.jpg',
    },
    {
      nome: 'Diferencial PIX',
      foto: 'https://i.ibb.co/Y3QG0BX/diferenciais-pix.jpg',
    }
  ]

  qualidades: Array<any> =[
    {
      nome: 'qualidades',
      foto: 'https://i.ibb.co/p2mbgy8/qualidades-removebg-preview.png'
    }
  ]


}
