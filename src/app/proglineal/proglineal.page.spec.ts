import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProglinealPage } from './proglineal.page';

describe('ProglinealPage', () => {
  let component: ProglinealPage;
  let fixture: ComponentFixture<ProglinealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProglinealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProglinealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
