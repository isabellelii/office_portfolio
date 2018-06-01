import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MapComponent
  ],
  imports: [
    BrowserModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4tZwdiAqjPLpfp9Wyt1FocxfDuFzql1w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
