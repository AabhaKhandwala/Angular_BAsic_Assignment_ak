import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'twocomp', component: CompTwoComponent },
  { path: 'onecomp', component: CompOneComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
