import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from "../api.service";
import { LoadingController } from '@ionic/angular';
let SchedulingPage = class SchedulingPage {
    constructor(apiService, loadingController) {
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.dosTasks = [1, 2];
        //Old
        this.prodNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
        this.coefNames = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
        this.errorServ = false;
        this.errorRest = false;
        this.min = true;
        this.max = false;
        console.log(this.rest);
        this.form = {
            cantJobs: 0,
            cantTasks: 0,
            cantRecursos: 0,
            tiempoTasks: [],
            precedencias: [],
            cantUnidades: [],
            demandaTasks: [],
        };
        this.solucion = null;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.presentLoading();
        console.log(this.form);
        this.apiService.scheduling(this.form).subscribe((data) => {
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
    changeProd() {
        this.prod = Array(parseInt(this.form.cantProductos)).fill(0);
        if (this.rest != null && this.prod != null) { //controla que hayan llenado los dos campos para cargar las restricciones
            console.log("Entro por changeprod");
            this.changeCoefs();
        }
    }
    //New
    changeRest() {
        this.form.precedencias = Array(parseInt(this.cantRest)).fill(null);
        for (var i = 0; i < this.cantRest; i++) {
            this.form.precedencia[i] = Array(2).fill(0);
        }
    }
    changeTasks() {
        this.cantTasks = this.form.cantTasks; //no haria falta
        console.log("changeTasks");
        this.changeDemanda();
        this.form.tiempoTasks = Array(parseInt(this.form.cantTasks)).fill(1);
    }
    changeRec() {
        this.cantRecursos = this.form.cantRecursos; //no haria falta
        this.form.cantUnidades = Array(parseInt(this.form.cantRecursos)).fill(1);
        console.log("changeRec");
        this.changeDemanda();
    }
    changeJobs() {
        this.cantJobs = this.form.cantJobs; //no haria falta
    }
    changeDemanda() {
        // Cambiar el tamano del arreglo bidimensional de demanda de cada task
        this.form.demandaTasks = Array(parseInt(this.form.cantTasks)).fill(null);
        for (var i = 0; i < this.form.cantTasks; i++) {
            this.form.demandaTasks[i] = Array(parseInt(this.form.cantRecursos)).fill(0);
        }
        console.log("changeDemanda");
    }
    //New
    changeCoefs() {
        this.form.costeProd = Array(parseInt(this.form.cantProductos)).fill(null);
        for (var i = 0; i < this.form.cantProductos; i++) {
            this.form.costeProd[i] = Array(parseInt(this.form.cantInsumos)).fill(0);
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
SchedulingPage = tslib_1.__decorate([
    Component({
        selector: 'app-scheduling',
        templateUrl: './scheduling.page.html',
        styleUrls: ['./scheduling.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService, LoadingController])
], SchedulingPage);
export { SchedulingPage };
//# sourceMappingURL=scheduling.page.js.map