import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatDividerModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, MatCardModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatDividerModule
  ],
exports: [FlexLayoutModule, MatCardModule, MatInputModule,
  MatFormFieldModule, MatButtonModule, MatSelectModule, MatDividerModule ]
})
export class MaterialModModule { }
