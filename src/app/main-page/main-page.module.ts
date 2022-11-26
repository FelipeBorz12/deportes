import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [CommonModule, SharedModule],
})
export class MainPageModule {}
