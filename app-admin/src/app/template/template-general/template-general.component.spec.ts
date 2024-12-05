import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGeneralComponent } from './template-general.component';

describe('TemplateGeneralComponent', () => {
  let component: TemplateGeneralComponent;
  let fixture: ComponentFixture<TemplateGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
