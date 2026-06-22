import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component.js';
import { resolveAngularComponentResources } from '../../../test-helpers.js';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await resolveAngularComponentResources();
    TestBed.overrideComponent(InputComponent, {
      set: {
        template: '<label>{{ label }}</label><input [type]="type" [placeholder]="placeholder" />',
        styles: [''],
        styleUrls: []
      }
    });

    await TestBed.configureTestingModule({
      imports: [InputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    fixture.componentInstance.label = 'Email';
    fixture.detectChanges();
  });

  it('should render label', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Email');
  });
});
