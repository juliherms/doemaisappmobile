import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngsItemPage } from './ongs-item.page';

describe('OngsItemPage', () => {
  let component: OngsItemPage;
  let fixture: ComponentFixture<OngsItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngsItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngsItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
