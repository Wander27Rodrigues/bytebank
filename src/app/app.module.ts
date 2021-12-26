import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { NovatransferenciaComponent } from './nova-tranferencia/novatranferencia/novatransferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NovatransferenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
