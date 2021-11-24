import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDetails2PageRoutingModule } from './card-details2-routing.module';

import { CardDetails2Page } from './card-details2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetails2PageRoutingModule
  ],
  declarations: [CardDetails2Page]
})
export class CardDetails2PageModule {}
