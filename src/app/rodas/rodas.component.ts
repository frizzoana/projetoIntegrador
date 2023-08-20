import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-rodas',
  templateUrl: './rodas.component.html',
  styleUrls: ['./rodas.component.scss'],
  standalone: true,
  imports: [ MatGridListModule, MatCardModule, NgFor, NgIf, MatIconModule, CommonModule, FlexLayoutModule ]
})
export class RodasComponent {

  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    const produtoSelecionado = this.rodas.find(item => item.id === itemId);
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
    this.rodas[index].favorito = !this.rodas[index].favorito
  }

  rodas: Array<any> =[
    {
      id: 1,
      produto: 'Rodas Rolamentadas Vermelha',
      foto: 'https://i.ibb.co/JBbZz1j/20230220-170128-vermelha-removebg-preview.png',
      preco: 57.90,
      favorito: false,
    },
    {
      id: 2,
      produto: 'Rodas Rolamentadas Amarela',
      foto: 'https://i.ibb.co/H7F0kzN/RODAROLAMENTADAYELLOW-removebg-preview.png',
      preco: 57.90,
      favorito: false,
    },
    {
      id: 3,
      produto: 'Rodas Rolamentadas Cinza',
      foto: 'https://i.ibb.co/GPZDkvn/Roda-Rolamentada-Cinza-removebg-preview.png',
      preco: 57.90,
      favorito: false,
    },
    {
      id: 4,
      produto: 'Rodas Rolamentadas Branca',
      foto: 'https://i.ibb.co/YTm2NxP/Rodas-Rolamentadas-White.png',
      preco: 57.90,
      favorito: false,
    },
    {
      id: 5,
      produto: 'Rodas Rolamentadas Rosa',
      foto: 'https://i.ibb.co/8MLB2rL/Rodas-Rolamentadas-Pink.png',
      preco: 57.90,
      favorito: true,
    },
    {
      id: 6,
      produto: 'Rodas Swirl Sphrical Pro Roxo/Preto',
      foto: 'https://i.ibb.co/GdshfJb/rodarosa.png',
      preco: 119.90,
      favorito: true,
    },
    {
      id: 7,
      produto: 'Rodas Swirl Sphrical Pro Branca/Cinza',
      foto: 'https://i.ibb.co/pjtWgG8/rodabranca.png',
      preco: 119.90,
      favorito: true,
    },
    {
      id: 8,
      produto: 'Rodas Swirl Sphrical Pro Azul/Preto',
      foto: 'https://i.ibb.co/TRsDX7G/rodaazul.png',
      preco: 119.90,
      favorito: true,
    }
  ]

}
