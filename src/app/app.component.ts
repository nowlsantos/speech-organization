import { Component, OnInit } from '@angular/core';
import { SpeechService } from './services/speech.service';
import { Speech } from './models/speech';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'speech-organizer';
    speech$: Observable<Speech[]>;

    constructor(private speechService: SpeechService) {}

    ngOnInit() {
        this.speech$ = this.speechService.getSpeeches();
    }
}
