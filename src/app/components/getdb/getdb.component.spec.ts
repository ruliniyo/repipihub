import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdbComponent } from './getdb.component';

describe('GetdbComponent', () => {
  let component: GetdbComponent;
  let fixture: ComponentFixture<GetdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
