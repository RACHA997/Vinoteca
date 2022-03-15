import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VinosComponent} from "./vinos/vinos.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {DetalleComponent} from "./detalle/detalle.component";
import {NuevovinoComponent} from "./nuevovino/nuevovino.component";


const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'vinos',
    component: VinosComponent,
    pathMatch: 'full'
  },

  {
    path: 'contacto',
    component: ContactoComponent,
    pathMatch: 'full'
  },
  {
    path:'nuevovino',
    component: NuevovinoComponent,
    pathMatch: 'full'
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent

  },
  {
    path:'vinos/:nombre',
    component: VinosComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
