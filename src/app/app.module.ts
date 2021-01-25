import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GitProjectsComponent } from './git-projects/git-projects.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { KnowledgeInfoComponent } from './knowledge-info/knowledge-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    GitProjectsComponent,
    ContactInfoComponent,
    KnowledgeInfoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
