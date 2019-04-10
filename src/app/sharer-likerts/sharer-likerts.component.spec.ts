import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharerLikertsComponent } from './sharer-likerts.component';

describe('SharerLikertsComponent', () => {
  let component: SharerLikertsComponent;
  let fixture: ComponentFixture<SharerLikertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharerLikertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharerLikertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
