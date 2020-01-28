import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Speech } from 'src/app/models/speech';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
    selector: 'app-speech-new',
    templateUrl: './speech-new.component.html',
    styleUrls: ['./speech-new.component.css']
})
export class SpeechNewComponent implements OnInit {
    speechForm: FormGroup;
    pageTitle = 'New Speech';

    constructor(private fb: FormBuilder,
                private speechService: SpeechService) {}

    ngOnInit() {
        this.speechForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(5)]],
            author: ['', [Validators.required, Validators.minLength(3)]],
            date: ['', [Validators.required]],
            transcript: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit({ value }: { value: Speech }) {
        const speech: Speech = {
            title: value.title,
            author: value.author,
            date: new Date(value.date),
            transcript: value.transcript,
            month: value.date.getMonth().toString(),
            year: value.date.getFullYear().toString(),
            name: value.author.toLocaleLowerCase(),
            title_lowcase: value.title.toLocaleLowerCase(),
        };

        this.speechService.addSpeech(speech);
        this.speechForm.reset();
    }
}
