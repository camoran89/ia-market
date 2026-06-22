import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { AppService } from '../../app.service.js';
import { HomeComponent } from './home.component.js';
import { resolveAngularComponentResources } from '../../../test-helpers.js';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const appServiceMock = {
      message: signal('Servicio de frontend preparado.'),
      loadApiHealth: () => {},
      updateMessage: () => {}
    } as unknown as AppService;

    await resolveAngularComponentResources();

    TestBed.overrideComponent(HomeComponent, {
      set: {
        template: '<section><p>Bienvenido al frontend basado en Angular 22 y Angular Material.</p></section>',
        styles: [''],
        styleUrls: []
      }
    });

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: AppService, useValue: appServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('should render welcome card', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Bienvenido al frontend basado en Angular 22 y Angular Material.');
  });
});
