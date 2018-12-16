import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizePaneComponent } from './localize-pane.component';

describe('LocalizePaneComponent', () => {
  let component: LocalizePaneComponent;
  let fixture: ComponentFixture<LocalizePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
