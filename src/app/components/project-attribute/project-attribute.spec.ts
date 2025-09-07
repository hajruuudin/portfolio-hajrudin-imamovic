import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAttribute } from './project-attribute';

describe('ProjectAttribute', () => {
  let component: ProjectAttribute;
  let fixture: ComponentFixture<ProjectAttribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAttribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAttribute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
