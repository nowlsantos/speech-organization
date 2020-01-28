import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpeechModule } from './components/speech/speech.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'speech-organizer'),
        AngularFirestoreModule,
        FontAwesomeModule,
        SpeechModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
