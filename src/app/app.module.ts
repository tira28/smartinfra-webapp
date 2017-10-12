import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HydrometeoModule} from './hydrometeo/hydrometeo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HydrometeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
