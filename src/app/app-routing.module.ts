import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { authGuard } from './auth/guards/auth.guard';
import { youtubeGuard } from './youtube/guards/youtube.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [authGuard],
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [youtubeGuard],
  },
  { path: '', redirectTo: '/youtube', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [youtubeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
