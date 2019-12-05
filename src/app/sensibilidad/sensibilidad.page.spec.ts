import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensibilidadPage } from './sensibilidad.page';

describe('SensibilidadPage', () => {
  let component: SensibilidadPage;
  let fixture: ComponentFixture<SensibilidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensibilidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensibilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
