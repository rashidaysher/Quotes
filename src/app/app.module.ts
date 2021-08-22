import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';









@NgModule({
  declarations: [AppComponent, QuoteDetailComponent, QuoteComponent, DateCountPipe, QuoteFormComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
