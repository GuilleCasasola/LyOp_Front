import { Component, OnInit } from '@angular/core';

import { HttpClient }    from '@angular/common/http';
import { ApiService } from "../api.service"
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-proglineal',
  templateUrl: './proglineal.page.html',
  providers: [ApiService],
  styleUrls: ['./proglineal.page.scss'],
})

export class ProglinealPage implements OnInit {

  varsNames = ["A","B","C","D","E"];
  coefNames = ["a","b","c","d","e"];
  cantVars ;
  cantRest ;
  vars;
  rest;
  min;
  max;
  solucion;
  form ;
  error=false;
  constructor(private apiService : ApiService , public loadingController: LoadingController) { 
      this.min=true;
      this.max=false;
      console.log(this.rest);
      this.form= {
        cantRest: 0,
        cantVars: 0,
        min: true,
        obj: []
      };
      this.solucion=null;
  }

  ngOnInit() {

  }

  onSubmit(){
    this.presentLoading()
    console.log(this.form);
    this.apiService.linear(this.form).subscribe(
    (data)=> {
      this.error=false;
      this.solucion=data; 
      this.loadingController.dismiss();
    }, (error)=> {
        this.error=true;
        this.solucion = null;
        this.loadingController.dismiss();
  }
   
    );
    
  }

  changeRest(){
    this.rest = Array(parseInt(this.form.cantRest)).fill(0);
    this.form.sign = Array(parseInt(this.form.cantRest)).fill(">");
    
    if(this.rest != null && this.vars != null){
      console.log("Entro por changerest");
      this.changeCoefs();
    }
  }
  
  changeVars(){
    this.vars = Array(parseInt(this.form.cantVars)).fill(0);

    if(this.rest != null && this.vars != null){  //controla que hayan llenado los dos campos para cargar las restricciones
      console.log("Entro por changevars");
      this.changeCoefs();
    }
  }

  changeCoefs(){
    this.form.coef =Array(parseInt(this.form.cantRest)).fill(null); 
    this.form.term_indp=Array(parseInt(this.form.cantRest)).fill(null); 
    for( var i=0; i<this.form.cantRest;i++){
      this.form.coef[i] = Array(parseInt(this.form.cantVars)).fill(null);
    }
  }


  calculate(){
    this.form.min=this.min;
    console.log("HOLA CALCULAR");
    console.log(this.max);
    console.log(this.min);
    
  } 
  changeMin(){
    this.min=this.max;
  }
  changeMax(){
    this.max=this.min;
  }
   getContent() {
    return document.querySelector('ion-content');
  }
   scrollToBottom() {
    this.getContent().scrollToBottom(500);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: null,
      message: 'Calculanding...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


}
