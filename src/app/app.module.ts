import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PAGES } from './pages';
import { LAYOUTS } from './layout';
import { COMPONENTS } from './components';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ...LAYOUTS,
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
