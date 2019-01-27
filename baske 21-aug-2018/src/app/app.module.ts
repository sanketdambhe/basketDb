import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModModule } from './pkg/material-mod/material-mod.module';
import { FormsModule } from '@angular/forms';
import { DataEnterComponent } from './comp/data-enter/data-enter.component';
import { ShowDataComponent } from './comp/show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEnterComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
