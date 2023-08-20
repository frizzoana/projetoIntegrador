import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  produto: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produto = history.state.produto;
  }

}