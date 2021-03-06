import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contenidos',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'proglineal',
    loadChildren: () => import('./proglineal/proglineal.module').then( m => m.ProglinealPageModule)
  },
  {
    path: 'progentera',
    loadChildren: () => import('./progentera/progentera.module').then( m => m.ProgenteraPageModule)
  },
  {
    path: 'sensibilidad',
    loadChildren: () => import('./sensibilidad/sensibilidad.module').then( m => m.SensibilidadPageModule)
  },
  {
    path: 'scheduling',
    loadChildren: () => import('./scheduling/scheduling.module').then( m => m.SchedulingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
