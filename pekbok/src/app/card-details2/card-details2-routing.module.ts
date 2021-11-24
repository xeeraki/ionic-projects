import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDetails2Page } from './card-details2.page';

const routes: Routes = [
  {
    path: '',
    component: CardDetails2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDetails2PageRoutingModule {}
