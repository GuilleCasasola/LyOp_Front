import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MultiobjetivoComponent } from './multiobjetivo.component';
describe('MultiobjetivoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MultiobjetivoComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MultiobjetivoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=multiobjetivo.component.spec.js.map