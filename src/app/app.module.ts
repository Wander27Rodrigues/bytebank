import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-tranferencia/novatranferencia/novatransferencia.component';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule


  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
