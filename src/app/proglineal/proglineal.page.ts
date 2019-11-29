import { Component, OnInit } from '@angular/core';

import { HttpClient }    from '@angular/common/http';
import { ApiService } from "../api.service"



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

  constructor(private apiService : ApiService) { 
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
    
    console.log(this.form);
    this.apiService.linear(this.form).subscribe((data)=> this.solucion=data);
    
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


}
