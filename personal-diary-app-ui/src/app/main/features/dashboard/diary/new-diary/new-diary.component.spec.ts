import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiaryComponent } from './new-diary.component';

describe('NewDiaryComponent', () => {
  let component: NewDiaryComponent;
  let fixture: ComponentFixture<NewDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
