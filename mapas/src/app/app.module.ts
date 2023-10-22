import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TriangulacionComponent } from './components/triangulacion/triangulacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { Utils } from './utils/utils';
import { DialogMapComponent } from './components/map/dialog-map/dialog-map.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import {CardModule} from 'primeng/card';
import { ParkingComponent } from './components/parking/parking.component';
import { OpenMapDialogComponent } from './components/parking/open-map-dialog/open-map-dialog.component';
import { Constants } from './common/constants';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { CreateDriverDialogComponent } from './components/parking/open-map-dialog/create-driver-dialog/create-driver-dialog.component';
import { CreateBusDialogComponent } from './components/parking/open-map-dialog/create-bus-dialog/create-bus-dialog.component';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TriangulacionComponent,
    NavbarComponent,
    DialogMapComponent,
    ParkingComponent,
    OpenMapDialogComponent,
    CreateDriverDialogComponent,
    CreateBusDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    DynamicDialogModule,
    CardModule,
    PanelModule,
    MessagesModule,
    DropdownModule,
    InputMaskModule,
  ],
  providers: [HttpClientModule, Utils, DialogService, Constants, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
