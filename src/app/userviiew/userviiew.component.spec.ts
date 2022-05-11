import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviiewComponent } from './userviiew.component';

describe('UserviiewComponent', () => {
  let component: UserviiewComponent;
  let fixture: ComponentFixture<UserviiewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviiewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
