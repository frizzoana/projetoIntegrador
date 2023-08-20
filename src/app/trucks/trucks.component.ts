import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss'],
  standalone: true,
  imports: [ MatGridListModule, MatCardModule, NgFor, NgIf, MatIconModule, CommonModule, FlexLayoutModule ]
})
export class TrucksComponent {
  
  constructor(private router: Router) { }

  verDetalhes(itemId: string) {
    const produtoSelecionado = this.trucks.find(item => item.id === itemId);
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
    this.trucks[index].favorito = !this.trucks[index].favorito
  }

  trucks: Array<any> =[
    {
      id: 'EFNW0FIW0FW1N2',
      produto: 'Truck PRO Gold',
      foto: 'https://i.ibb.co/mvZdGLT/TRUCK-PRO-GOLD-removebg-preview.png',
      preco: 70,
      favorito: true,
    },
    {
      id: '1902FHJGNBMMIUH',
      produto: 'Truck PRO Silver',
      foto: 'https://i.ibb.co/25h7V0G/TRUCK-PRO-SILVER-removebg-preview.png',
      preco: 70,
      favorito: true,
    },
    {
      id: '0GYNMZXKSOOLKWMS',
      produto: 'Truck Wide Amarelo',
      foto: 'https://i.ibb.co/X7XkswN/truck-Wide2-0-Amarelo32mm-removebg-preview.png',
      preco: 49.90,
      favorito: false,
    },
    {
      id: '902DSKSFPKN3NPFN',
      produto: 'Truck Wide Azul 32mm',
      foto: 'https://i.ibb.co/0M1bTW6/Truck-Wide2-0-Azul32mm-removebg-preview.png',
      preco: 49.90,
      favorito: false,
    },
    {
      id: 'YHJS2392IINWOVWO',
      produto: 'Truck Wide Branco 32mm',
      foto: 'https://i.ibb.co/SK8PR8K/Truck-Wide2-0-Branco32mm-removebg-preview.png',
      preco: 49.90,
      favorito: false,
    },
  ]
}
