import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProglinealPage } from './proglineal.page';
describe('ProglinealPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProglinealPage],
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
//# sourceMappingURL=proglineal.page.spec.js.map