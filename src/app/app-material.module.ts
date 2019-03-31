import { NgModule } from  '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({

    imports: [
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSidenavModule
    ],
    exports: [
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSidenavModule
    ],
  })

  
  export class AppMaterialModule { }