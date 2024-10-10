import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInternoComponent } from './layout-interno.component';

describe('LayoutInternoComponent', () => {
  let component: LayoutInternoComponent;
  let fixture: ComponentFixture<LayoutInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
