import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './date-count.pipe';









@NgModule({
  declarations: [AppComponent, QuoteDetailComponent, QuoteComponent, DateCountPipe, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
