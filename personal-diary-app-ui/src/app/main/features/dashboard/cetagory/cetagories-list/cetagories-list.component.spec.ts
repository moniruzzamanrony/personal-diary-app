import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetagoriesListComponent } from './cetagories-list.component';

describe('CetagoriesListComponent', () => {
  let component: CetagoriesListComponent;
  let fixture: ComponentFixture<CetagoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetagoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetagoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
