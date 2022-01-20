import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesService } from './services/games.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { CarruselComponent } from './components/dashboard/carrusel/carrusel.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LandingComponent } from './views/landing/landing.component';
import { CarritoComponent } from './views/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CardComponent,
    CarruselComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
