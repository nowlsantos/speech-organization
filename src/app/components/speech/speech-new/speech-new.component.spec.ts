import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechNewComponent } from './speech-new.component';

describe('SpeechNewComponent', () => {
  let component: SpeechNewComponent;
  let fixture: ComponentFixture<SpeechNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
