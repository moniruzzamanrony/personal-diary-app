import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariesListComponent } from './diaries-list.component';

describe('DiariesListComponent', () => {
  let component: DiariesListComponent;
  let fixture: ComponentFixture<DiariesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiariesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
