import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import langEs from '@angular/common/locales/es';
import langFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PwdPipe } from './pipes/pwd.pipe';

registerLocaleData(langEs);
registerLocaleData(langFr);

@NgModule({
  declarations: [AppComponent, CapitalizePipe, DomseguroPipe, PwdPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
