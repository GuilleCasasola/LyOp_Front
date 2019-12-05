import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgenteraPage } from './progentera.page';

describe('ProgenteraPage', () => {
  let component: ProgenteraPage;
  let fixture: ComponentFixture<ProgenteraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgenteraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgenteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
