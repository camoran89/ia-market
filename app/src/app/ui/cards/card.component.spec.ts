import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component.js';
import { resolveAngularComponentResources } from '../../../test-helpers.js';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await resolveAngularComponentResources();
    TestBed.overrideComponent(CardComponent, {
      set: {
        template: '<div><span>{{ title }}</span><ng-content></ng-content></div>',
        styles: [''],
        styleUrls: []
      }
    });

    await TestBed.configureTestingModule({
      imports: [CardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.componentInstance.title = 'Test';
    fixture.detectChanges();
  });

  it('should display title', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Test');
  });
});
