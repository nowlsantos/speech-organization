import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    faUser = faUserCircle;
    searchControl = new FormControl('');

    constructor(private speechService: SpeechService) {}

    ngOnInit() {}

    onSearch() {
        this.speechService.getSearchItem(this.searchControl.value);
        this.searchControl.reset();
    }
}
