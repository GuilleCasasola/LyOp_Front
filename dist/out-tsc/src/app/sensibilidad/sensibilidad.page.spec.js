import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SensibilidadPage } from './sensibilidad.page';
describe('SensibilidadPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SensibilidadPage],
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
//# sourceMappingURL=sensibilidad.page.spec.js.map