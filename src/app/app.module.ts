import {  DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// MEUS BLOCOS DE CÓDIGO
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FingerboardCompletoComponent } from './fingerboard-completo/fingerboard-completo.component';
import { ObstaculosComponent } from './obstaculos/obstaculos.component';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";

// MATERIAL UI
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    CabecalhoComponent,
    DetalhesComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FingerboardCompletoComponent,
    ObstaculosComponent,
    MatCardModule,
    FlexLayoutModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
