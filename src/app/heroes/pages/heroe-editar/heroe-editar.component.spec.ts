import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeEditarComponent } from './heroe-editar.component';

describe('HeroeEditarComponent', () => {
  let component: HeroeEditarComponent;
  let fixture: ComponentFixture<HeroeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
