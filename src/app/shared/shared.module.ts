import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';


@NgModule({

  imports: [
    CommonModule,
    AppMaterialModule,

  ],
  exports: [

  ]
})
export class SharedModule { }
