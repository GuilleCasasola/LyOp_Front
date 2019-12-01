import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinRestComponent } from './sin-rest.component';

describe('SinRestComponent', () => {
  let component: SinRestComponent;
  let fixture: ComponentFixture<SinRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinRestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
