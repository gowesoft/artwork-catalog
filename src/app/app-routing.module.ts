import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule)
    , pathMatch: 'full'
  },
  {
    path: 'random',
    loadChildren: () => import('@features/random-data/random-data.module').then(m => m.RandomDataModule)
  },
  {
    path: 'artwork-detail/:id/:imageId',
    loadChildren: () => import('./features/artwork-detail/artwork-detail.module').then(m => m.ArtworkDetailModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
