import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePaneComponent } from './translate-pane/translate-pane.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { LocalizePaneComponent } from './localize-pane/localize-pane.component';
import { ContentPaneComponent } from './content-pane/content-pane.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePaneComponent,
    LandingPageComponent,
    LocalizePaneComponent,
    ContentPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
