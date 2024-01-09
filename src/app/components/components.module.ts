import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LogoComponent,
    CardComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, HomeComponent, FooterComponent, LogoComponent],
})
export class ComponentsModule {}
