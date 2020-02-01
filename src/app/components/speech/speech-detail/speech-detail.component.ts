import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeechService } from 'src/app/services/speech.service';
import { Speech } from 'src/app/models/speech';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-speech-detail',
    templateUrl: './speech-detail.component.html',
    styleUrls: ['./speech-detail.component.css']
})
export class SpeechDetailComponent implements OnInit {
    pageTitle = 'Speech Transcript';
    speech: Speech;

    constructor(private route: ActivatedRoute,
                private speechService: SpeechService) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => this.speechService.getSpeech(params.get('id')))
        ).subscribe(data => this.speech = data);
    }
}
