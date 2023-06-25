import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

import { ArtworkDetailComponent } from '@features/artwork-detail/components/artwork-detail/artwork-detail.component';

const routes: Routes = [{
  path: '',
  component: ArtworkDetailComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtworkDetailRoutingModule { }
