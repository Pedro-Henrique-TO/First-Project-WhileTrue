import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderAppComponent } from './header-app/header-app.component';
import { AppComponent } from './app.component';
import { MyPokemonListComponent } from './my-pokemon-list/my-pokemon-list.component';
import  { HttpClientModule }  from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MyPokemonListComponent,
    HeaderAppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
