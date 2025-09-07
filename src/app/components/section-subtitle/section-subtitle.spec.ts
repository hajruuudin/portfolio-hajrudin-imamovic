import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubtitle } from './section-subtitle';

describe('SectionSubtitle', () => {
  let component: SectionSubtitle;
  let fixture: ComponentFixture<SectionSubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSubtitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSubtitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
