import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { SpeechService } from '../../../services/speech.service';
import { Speech } from 'src/app/models/speech';

@Component({
    selector: 'app-speech-edit',
    templateUrl: './speech-edit.component.html',
    styleUrls: ['./speech-edit.component.css']
})
export class SpeechEditComponent implements OnInit {
    speechForm: FormGroup;
    speech: Speech;
    pageTitle = 'Edit Speech';

    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private speechService: SpeechService) { }

    ngOnInit() {
        this.speechForm = this.fb.group({
            title: '',
            author: '',
            date: '',
            transcript: ''
        });

        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.speechService.getSpeech(id).subscribe( data => {
                this.speech = data;
                this.speech.id = id;
            });
        });

        this.speechForm.get('title').valueChanges.subscribe(value => this.speech.title = value );
        this.speechForm.get('author').valueChanges.subscribe(value => this.speech.author = value );
        this.speechForm.get('date').valueChanges.subscribe(value => this.speech.date = value );
        this.speechForm.get('transcript').valueChanges.subscribe(value => this.speech.transcript = value );
    }

    deleteSpeech() {
        this.speechService.deleteSpeech(this.speech);
        this.router.navigate(['/speeches']);
    }

    onSubmit() {
        this.speechService.updateSpeech(this.speech);
        this.router.navigate(['/speeches', this.speech.id]);
    }

    shareSpeech() {
        this.router.navigate(['/speeches']);
    }
}
