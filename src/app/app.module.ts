import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { ConsentPageComponent } from './consent-page/consent-page.component';
import { DemographicsPageComponent } from './demographics-page/demographics-page.component';
import { LikertComponent } from './likert/likert.component';
import { StickerComponent } from './sticker/sticker.component';
import { SharerLikertsComponent } from './sharer-likerts/sharer-likerts.component';
import { RecipientLikertsComponent } from './recipient-likerts/recipient-likerts.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { SorryPageComponent } from './sorry-page/sorry-page.component';
import { InstructionsPageComponent } from './instructions-page/instructions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyPageComponent,
    ConsentPageComponent,
    DemographicsPageComponent,
    LikertComponent,
    StickerComponent,
    SharerLikertsComponent,
    RecipientLikertsComponent,
    ThanksPageComponent,
    SorryPageComponent,
    InstructionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    WebStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
