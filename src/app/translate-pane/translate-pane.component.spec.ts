import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePaneComponent } from './translate-pane.component';

describe('TranslatePaneComponent', () => {
  let component: TranslatePaneComponent;
  let fixture: ComponentFixture<TranslatePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
