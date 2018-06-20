import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryComponent } from './factory.component';

describe('FactoryComponent', () => {
  let component: FactoryComponent;
  let fixture: ComponentFixture<FactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
