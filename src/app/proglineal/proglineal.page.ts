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

  form ;
  constructor(private apiService : ApiService) { 
      this.min=true;
      this.max=false;
      console.log(this.rest);
      this.form= {
        cantRest: 0,
        cantVars: 0,
        term_indp: [],
        min: true,
        obj: []
      };
  }

  ngOnInit() {

  }

  onSubmit(){
    
    console.log(this.form);
    console.log("Post end");
    
    this.apiService.linear(this.form).subscribe((data)=> console.log(data));
    
  }

  changeRest(){
    this.rest = Array(parseInt(this.form.cantRest)).fill(0);
    this.form.sign = Array(parseInt(this.form.cantRest)).fill(">");
    this.form.term_indp=this.rest;
    if(this.rest != null && this.vars != null){
      console.log("Entro por changerest");
      this.changeCoefs();
    }
  }
  
  changeVars(){
    this.vars = Array(parseInt(this.form.cantVars)).fill(0);
    if(this.rest != null && this.vars != null){
      console.log("Entro por changevars");
      this.changeCoefs();
    }
  }

  changeCoefs(){
    this.form.coef =Array(parseInt(this.form.cantRest)).fill(0); ;
    for( var i=0; i<this.form.cantRest;i++){
      this.form.coef[i] = Array(parseInt(this.form.cantVars)).fill(0);
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
