import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from "../api.service";
import { LoadingController } from '@ionic/angular';
let ProgenteraPage = class ProgenteraPage {
    constructor(apiService, loadingController) {
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.varsNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
        this.coefNames = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
        this.errorServ = false;
        this.errorRest = false;
        this.min = true;
        this.max = false;
        console.log(this.rest);
        this.form = {
            cantRest: 0,
            cantVars: 0,
            min: true,
            obj: []
        };
        this.solucion = null;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.presentLoading();
        console.log(this.form);
        this.apiService.entera(this.form).subscribe((data) => {
            this.errorServ = false;
            if (data["error"]) {
                this.solucion = null;
                this.errorRest = true;
            }
            else {
                this.errorRest = false;
                this.solucion = data;
            }
            this.loadingController.dismiss();
        }, (error) => {
            this.errorServ = true;
            this.solucion = null;
            this.loadingController.dismiss();
        });
    }
    changeRest() {
        this.rest = Array(parseInt(this.form.cantRest)).fill(0);
        this.form.sign = Array(parseInt(this.form.cantRest)).fill(">");
        if (this.rest != null && this.vars != null) {
            console.log("Entro por changerest");
            this.changeCoefs();
        }
    }
    changeVars() {
        this.vars = Array(parseInt(this.form.cantVars)).fill(0);
        if (this.rest != null && this.vars != null) { //controla que hayan llenado los dos campos para cargar las restricciones
            console.log("Entro por changevars");
            this.changeCoefs();
        }
    }
    changeCoefs() {
        this.form.coef = Array(parseInt(this.form.cantRest)).fill(null);
        this.form.term_indp = Array(parseInt(this.form.cantRest)).fill(null);
        for (var i = 0; i < this.form.cantRest; i++) {
            this.form.coef[i] = Array(parseInt(this.form.cantVars)).fill(null);
        }
    }
    calculate() {
        this.form.min = this.min;
    }
    changeMin() {
        this.min = this.max;
    }
    changeMax() {
        this.max = this.min;
    }
    getContent() {
        return document.querySelector('ion-content');
    }
    scrollToBottom() {
        this.getContent().scrollToBottom(500);
    }
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                message: 'Calculanding...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
ProgenteraPage = tslib_1.__decorate([
    Component({
        selector: 'app-progentera',
        templateUrl: './progentera.page.html',
        styleUrls: ['./progentera.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService, LoadingController])
], ProgenteraPage);
export { ProgenteraPage };
//# sourceMappingURL=progentera.page.js.map