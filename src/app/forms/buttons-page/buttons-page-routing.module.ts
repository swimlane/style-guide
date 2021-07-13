import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsPageComponent } from './buttons-page.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsPageRoutingModule {}
