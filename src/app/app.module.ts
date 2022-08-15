import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';
import { MyPokemonListComponent } from './my-pokemon-list/my-pokemon-list.component';
import { HeaderAppComponent } from './header-app/header-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPokemonComponent,
    MyPokemonListComponent,
    HeaderAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
