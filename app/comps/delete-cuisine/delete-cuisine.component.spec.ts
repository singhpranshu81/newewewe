import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCuisineComponent } from './delete-cuisine.component';

describe('DeleteCuisineComponent', () => {
  let component: DeleteCuisineComponent;
  let fixture: ComponentFixture<DeleteCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCuisineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
