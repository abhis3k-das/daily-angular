import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should synchronize quantity changes from the child to the parent', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[1].click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance.quantity()).toBe(2);
    expect(compiled.textContent).toContain('Parent Quantity: 2');
  });

  it('should not allow quantity to decrease below one', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const decrementButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    decrementButton.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.quantity()).toBe(1);
  });
});
