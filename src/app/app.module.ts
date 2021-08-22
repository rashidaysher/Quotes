import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';









@NgModule({
  declarations: [AppComponent, QuoteDetailComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
