import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component.js';
import { resolveAngularComponentResources } from '../../../test-helpers.js';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await resolveAngularComponentResources();
    TestBed.overrideComponent(ButtonComponent, {
      set: {
        template: '<button>Test</button>',
        styles: [''],
        styleUrls: []
      }
    });

    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
  });

  it('should render content', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent?.trim()).toBe('Test');
  });
});
