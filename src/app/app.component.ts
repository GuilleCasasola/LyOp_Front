import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
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
   
  vars = [1,2,3];
  cVars = 8;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
