import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router, NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-obstaculos',
  templateUrl: './obstaculos.component.html',
  styleUrls: ['./obstaculos.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf, CommonModule, MatIconModule, FlexLayoutModule ]
})
export class ObstaculosComponent {

  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    const produtoSelecionado = this.obstaculos.find(item => item.id === itemId);
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
    this.obstaculos[index].favorito = !this.obstaculos[index].favorito
  }

  nome: string = "Guilherme";
  sobrenome: string = "Prata";
  obstaculos: Array<any> =[
    {
      id: 1,
      produto: 'MINIATURA CAVALETE',
      foto: 'https://i.ibb.co/R710GkK/cavaletemini.png',
      preco: 24,
      favorito: false,
    },
    {
      id: 2,
      produto: 'MINIATURA HIDRANTE',
      foto: 'https://i.ibb.co/j8ZZzf9/hidrantemini.png',
      preco: 39,
      favorito: false,
    },
    {
      id: 3,
      produto: 'MINI CONE',
      foto: 'https://i.ibb.co/zrrwwYg/conemini.png',
      preco: 14,
      favorito: false,
    },
    {
      id: 4,
      produto: 'MINI CESTO PRETO',
      foto: 'https://i.ibb.co/ckf0Pkt/cestopretomini.png',
      preco: 19,
      favorito: false,
    },
    {
      id: 5,
      produto: 'DOUBLE IRON BENCH',
      foto: 'https://i.ibb.co/qNbSZJ7/Double-iron-street-bench.png',
      preco: 49,
      favorito: true,
    },
    {
      id: 6,
      produto: 'IRON ELBOW',
      foto: 'https://i.ibb.co/JHzjrrr/IRON-ELBOW.png',
      preco: 19,
      favorito: true,
    },
    {
      id: 7,
      produto: 'IRON ELBOW',
      foto: 'https://i.ibb.co/Lh60q1t/Iron-Rail-removebg-preview.png',
      preco: 19,
      favorito: true,
    },
    {
      id: 8,
      produto: 'Rampa Mini-Ramp PRO',
      foto: 'https://i.ibb.co/25ZPmgf/Rampa-Mini-Ramp-PRO-Attack-removebg-preview.png',
      preco: 260,
      favorito: true
    }
  ]

}
