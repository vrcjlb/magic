import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features').then((m) => m.DashboardModule),
  },
  {
    path: 'storage',
    loadChildren: () => import('./features/').then((m) => m.StorageModule),
  },
  {
    path: 'storage',
    loadChildren: () => import('./features').then((m) => m.StorageModule),
  },
  // Repite para otros módulos
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
