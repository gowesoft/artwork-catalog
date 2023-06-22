import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomDataTableComponent } from './components/random-data-table/random-data-table.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RandomDataTableComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomDataRoutingModule { }
