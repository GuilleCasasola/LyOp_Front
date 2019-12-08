import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProgenteraPage } from './progentera.page';
describe('ProgenteraPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProgenteraPage],
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
//# sourceMappingURL=progentera.page.spec.js.map