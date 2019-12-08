import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ParetoComponent } from './pareto.component';
describe('ParetoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParetoComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ParetoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pareto.component.spec.js.map