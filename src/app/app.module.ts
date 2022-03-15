import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VinosComponent } from './vinos/vinos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { NuevovinoComponent } from './nuevovino/nuevovino.component';
import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VinosComponent,
    ContactoComponent,
    DetalleComponent,
    NuevovinoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEVLuALTNr5HLHfj6OgQ53ah-HvTS0lG8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
