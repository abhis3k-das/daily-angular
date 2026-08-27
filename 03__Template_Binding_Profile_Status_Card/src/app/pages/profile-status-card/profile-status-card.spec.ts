import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileStatusCard } from './profile-status-card';

describe('ProfileStatusCard', () => {
  let component: ProfileStatusCard;
  let fixture: ComponentFixture<ProfileStatusCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileStatusCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileStatusCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
