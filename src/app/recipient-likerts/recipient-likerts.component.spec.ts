import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientLikertsComponent } from './recipient-likerts.component';

describe('RecipientLikertsComponent', () => {
  let component: RecipientLikertsComponent;
  let fixture: ComponentFixture<RecipientLikertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientLikertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientLikertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
