import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevovinoComponent } from './nuevovino.component';

describe('NuevovinoComponent', () => {
  let component: NuevovinoComponent;
  let fixture: ComponentFixture<NuevovinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevovinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevovinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
