import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCetagoryComponent } from './new-cetagory.component';

describe('NewCetagoryComponent', () => {
  let component: NewCetagoryComponent;
  let fixture: ComponentFixture<NewCetagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCetagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCetagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
