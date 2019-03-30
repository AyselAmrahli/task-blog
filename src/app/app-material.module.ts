import { NgModule } from  '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({

    imports: [
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatGridListModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule
    ],
    exports: [
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatGridListModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule
    ],
  })

  
  export class AppMaterialModule { }