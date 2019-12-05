import { Component, OnInit } from '@angular/core';

import { ApiService } from "../api.service"
import { LoadingController } from '@ionic/angular';





@Component({
  selector: 'app-sensibilidad',
  templateUrl: './sensibilidad.page.html',
  styleUrls: ['./sensibilidad.page.scss'],
})
export class SensibilidadPage implements OnInit {

  
  prodNames = ["A","B","C","D","E","F","G","H","I","J","K"];
  coefNames = ["a","b","c","d","e","f","g","h","i","j","k"];
  cantProductos ;
  cantInsumos ;
  prod;
  rest;
  min;
  max;
  solucion;
  form ;
  errorServ=false;
  errorRest=false;

  constructor(private apiService : ApiService , public loadingController: LoadingController) { 
      this.min=true;
      this.max=false;
      console.log(this.rest);
      this.form= {
        cantInsumos: 0,
        cantProductos: 0,
        beneficio: [],
        stockInsumos : []
      };
      this.solucion=null;
  }

  ngOnInit() {

  }

  onSubmit(){
    this.presentLoading()
    console.log(this.form);
    this.apiService.sensibilidad(this.form).subscribe(
    (data)=> {
      this.errorServ=false;
      if(data["error"]){
        this.solucion= null;
        this.errorRest=true;
      }else{
        this.errorRest=false;
        this.solucion=data; 
      }
      this.loadingController.dismiss();
    }, (error)=> {
        this.errorServ=true;
        this.solucion = null;
        this.loadingController.dismiss();
  }
   
    );
    
  }

  changeRest(){
    this.rest = Array(parseInt(this.form.cantInsumos)).fill(0);
    if(this.rest != null && this.prod != null){
      console.log("Entro por changerest");
      this.changeCoefs();
    }
  }
  
  changeProd(){
    this.prod = Array(parseInt(this.form.cantProductos)).fill(0);

    if(this.rest != null && this.prod != null){  //controla que hayan llenado los dos campos para cargar las restricciones
      console.log("Entro por changeprod");
      this.changeCoefs();
    }
  }

  changeCoefs(){
    this.form.costeProd = Array(parseInt(this.form.cantProductos)).fill(null); 
  
    for( var i=0; i<this.form.cantProductos;i++){
      this.form.costeProd[i] = Array(parseInt(this.form.cantInsumos)).fill(0);
    }
  }


  calculate(){
    this.form.min=this.min;
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
