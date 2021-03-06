
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatButtonModule,MatRippleModule,MatSelectModule,MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from'@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [],
  imports: [
   MatIconModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports:[
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
