import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SpeechListComponent } from './speech-list/speech-list.component';
import { SpeechDetailComponent } from './speech-detail/speech-detail.component';
import { SpeechNewComponent } from './speech-new/speech-new.component';
import { SpeechEditComponent } from './speech-edit/speech-edit.component';

const routes: Routes = [
    { path: 'speeches', component: SpeechListComponent },
    { path: 'speeches/:id', component: SpeechDetailComponent },
    { path: 'speeches/:id/edit', component: SpeechEditComponent },
    { path: 'speeches/:id/new', component: SpeechNewComponent }
];

@NgModule({
    declarations: [
        SpeechListComponent,
        SpeechDetailComponent,
        SpeechNewComponent,
        SpeechEditComponent
     ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class SpeechModule { }
