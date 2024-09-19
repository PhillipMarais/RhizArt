import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,  // Import BrowserModule
    CarouselModule,
    MenubarModule,
    AppRoutingModule,
    ScrollTopModule,
    ImageModule,
    BrowserAnimationsModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
