import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConRestComponent } from './con-rest.component';

describe('ConRestComponent', () => {
  let component: ConRestComponent;
  let fixture: ComponentFixture<ConRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConRestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
