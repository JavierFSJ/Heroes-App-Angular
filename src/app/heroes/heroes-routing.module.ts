import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeEditarComponent } from './pages/heroe-editar/heroe-editar.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'list' , component: ListComponent},
      {path: 'heroe/:id' , component: HeroeComponent},
      {path: 'buscar' , component: BuscarComponent},
      {path: 'agregar' , component: AgregarComponent},
      {path: 'editar/:id', component: HeroeEditarComponent},
      {path: '**' , redirectTo:'list'}
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class HeroesRoutingModule { }
