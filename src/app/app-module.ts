import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Custom } from './components/custom/custom';
import { Custom2 } from './components/custom2/custom2';
import { Course } from './components/course/course';
import { FormsModule } from '@angular/forms';
import { ColofulBg } from './directives/coloful-bg';
import { CapitalizationPipe } from './pipes/capitalization-pipe';
import { MathModule } from './math/math-module';

@NgModule({
  declarations: [App, Custom, Custom2, Course, ColofulBg, CapitalizationPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MathModule], // import feature Math module
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
