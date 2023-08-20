import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router, NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'app-fingerboard-completo',
  templateUrl: './fingerboard-completo.component.html',
  styleUrls: ['./fingerboard-completo.component.scss'],
  standalone: true,
  imports: [ MatGridListModule, MatCardModule, NgFor, NgIf, CommonModule, MatIconModule, FlexLayoutModule ]

})
export class FingerboardCompletoComponent {

  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    const produtoSelecionado = this.fingerboardsCompletos.find(item => item.id === itemId);
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
    this.fingerboardsCompletos[index].favorito = !this.fingerboardsCompletos[index].favorito
  }

  nome: string = "Guilherme";
  sobrenome: string = "Prata";
  fingerboardsCompletos: Array<any> =[
    {
      id: 1,
      produto: 'Fingerboard Completo Jordan Azul',
      foto: 'https://i.ibb.co/p3sjvbm/Fingerboard-Completo-Inove-Collab-Guy-Sneaker-Jordan-Azul.png',
      preco: 284,
      favorito: true,
    },
    {
      id: 2,
      produto: 'Fingerboard Completo Jordan Red',
      foto: 'https://i.ibb.co/K2DTWxS/Finger-Comp-J1.png',
      preco: 284,
      favorito: true,
    },
    {
      id: 3,
      produto: 'Fingerboard Completo - Rod Filmes',
      foto: 'https://i.ibb.co/NZBGGBn/Fingerboard-Completo-Inove-Rod-Filmes.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 4,
      produto: 'Fingerboard Completo - Cheese and Fingers',
      foto: 'https://i.ibb.co/fdgk5cS/Fingerboard-Completo-Inove-Cheese-and-Fingers.png',
      preco: 159,
      favorito: false,
    },
    {
      id: 6,
      produto: 'Fingerboard Completo - STU RECIFE',
      foto: 'https://i.ibb.co/Z1zVqB7/STU-nacional-recifre-removebg-preview.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 7,
      produto: 'Fingerboard Completo - STU CRICIUMA',
      foto: 'https://i.ibb.co/RgZxQmN/Fingerboard-Completo-Mini-Ramp-2.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 8,
      produto: 'Fingerboard Completo - STU',
      foto: 'https://i.ibb.co/kmnCnqR/STU-removebg-preview.png',
      preco: 159,
      favorito: false,
    },
    {
      id: 9,
      produto: 'Fingerboard Completo Mini Ramp',
      foto: 'https://i.ibb.co/MCyXTtM/Fingerboard-Completo-Mini-Ramp-1.png',
      preco: 160,
      favorito: false,
    },
    {
      id: 10,
      produto: 'Fingerboard Completo - AK47',
      foto: 'https://i.ibb.co/SJg2fS5/Finger-Comp-AK47.png',
      preco: 284,
      favorito: false,
    },
    {
      id: 11,
      produto: 'Fingerboard completo sneaker dunk58',
      foto: 'https://i.ibb.co/sqPjLW6/fing-Comp-sneaker-dunk58-removebg-preview.png',
      preco: 151.90,
      favorito: false
    },
    {
      id: 12,
      produto: 'Fingerboard completo air jordan 1 premium',
      foto: 'https://i.ibb.co/YDwYK7c/Fing-Comp-Air-Jordan1-Premium-removebg-preview.png',
      preco: 159.90,
      favorito: false
    },
    {
      id: 13,
      produto: 'Fingerboard completo dunk58 premium',
      foto: 'https://i.ibb.co/59D2vZM/Fing-Comp-Dunk58-Premium-removebg-preview.png',
      preco: 159.90,
      favorito: false
    }
  ]

}
