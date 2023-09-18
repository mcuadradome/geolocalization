import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TriangulacionComponent } from './components/triangulacion/triangulacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { Utils } from './utils/utils';
import { DialogMapComponent } from './components/map/dialog-map/dialog-map.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TriangulacionComponent,
    NavbarComponent,
    DialogMapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    DynamicDialogModule,
    CardModule
  ],
  providers: [HttpClientModule, Utils, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
