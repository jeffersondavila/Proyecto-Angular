import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeImageComponent } from './heroe-image/heroe-image.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialRoutingModule } from './material-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
    HeroeImageComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ],
  exports: [
    MenuComponent,
    HeroeImageComponent,
    CardsComponent
  ]
})
export class MaterialModule { }
