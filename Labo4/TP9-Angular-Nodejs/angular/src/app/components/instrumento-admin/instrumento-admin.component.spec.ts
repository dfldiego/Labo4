import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoAdminComponent } from './instrumento-admin.component';

describe('InstrumentoAdminComponent', () => {
  let component: InstrumentoAdminComponent;
  let fixture: ComponentFixture<InstrumentoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
