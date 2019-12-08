import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './intro.component';
describe('IntroComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IntroComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(IntroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=intro.component.spec.js.map