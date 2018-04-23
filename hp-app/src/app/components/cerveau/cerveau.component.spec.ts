import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerveauComponent } from './cerveau.component';

describe('CerveauComponent', () => {
  let component: CerveauComponent;
  let fixture: ComponentFixture<CerveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
