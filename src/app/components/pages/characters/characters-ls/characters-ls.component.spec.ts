import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersLsComponent } from './characters-ls.component';

describe('CharactersLsComponent', () => {
  let component: CharactersLsComponent;
  let fixture: ComponentFixture<CharactersLsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersLsComponent]
    });
    fixture = TestBed.createComponent(CharactersLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
