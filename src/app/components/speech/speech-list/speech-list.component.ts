import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
import { Speech } from 'src/app/models/speech';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-speech-list',
    templateUrl: './speech-list.component.html',
    styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit {

    speech$: Observable<Speech[]>;
    date: number;

    constructor(private speechService: SpeechService,
                private router: Router ) {}

    ngOnInit() {
        this.speechService.searchItem$.subscribe(term => {
            console.log('SpeechService:', term);
        });
        this.speech$ = this.speechService.getSpeeches();
    }

    navigateSpeechDetail(speech: Speech) {
        this.router.navigate(['/speeches', speech.id, speech]);
    }
}
