import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'Inicio',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Contenidos de Logica y Optimizacion',
                url: '/contenidos',
                icon: 'book'
            },
            {
                title: 'Programación Lineal',
                url: '/proglineal',
                icon: 'desktop'
            },
            {
                title: 'Programación Entera',
                url: '/progentera',
                icon: 'desktop'
            },
            {
                title: 'Sensibilidad',
                url: '/sensibilidad',
                icon: 'desktop'
            },
            {
                title: 'Scheduling',
                url: '/scheduling',
                icon: 'desktop'
            },
        ];
        this.vars = [1, 2, 3];
        this.cVars = 8;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map