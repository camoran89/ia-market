import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatWindowComponent } from './chat-window.component';

describe('ChatWindowComponent', () => {
  let fixture: ComponentFixture<ChatWindowComponent>;
  let component: ChatWindowComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.runInInjectionContext(() => new ChatWindowComponent());
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(typeof component.sendMessage).toBe('function');
  });
});
