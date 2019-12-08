import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SinRestComponent } from './sin-rest.component';
describe('SinRestComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SinRestComponent],
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
//# sourceMappingURL=sin-rest.component.spec.js.map