import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service"
import { LoadingController } from '@ionic/angular';
import { GanttChart } from 'angular-gantt-chart';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.page.html',
  styleUrls: ['./scheduling.page.scss'],
})
export class SchedulingPage implements OnInit {

  cantJobs;
  cantRest;
  dosTasks = [1, 2];

  //Old
  solucion;
  form ;
  errorServ=false;
  errorRest=false;
  message;


  constructor(private apiService : ApiService , public loadingController: LoadingController) { 
      this.form= {
        cantJobs: 0,
        cantTasks: 0,
        cantRecursos: 0,
        tiempoTasks: [],
        precedencias: [],
        cantUnidades: [],
        demandaTasks: [],
      };
      this.solucion=null;
  }

  ngOnInit() {

  }

  onSubmit(){
    this.presentLoading()
    console.log(this.form);
    this.apiService.scheduling(this.form).subscribe(
    (data)=> {
      this.errorServ=false;
      if(data["error"]){
        this.solucion= null;
        this.message = data["message"];
        this.errorRest=true;
      }else{
        console.log(data)
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
  //New
  changeRest(){
    this.form.precedencias = Array(parseInt(this.cantRest)).fill(null);
    for( var i=0; i<this.cantRest;i++){
      this.form.precedencias[i] = Array(2).fill(0);
    }
    console.log(this.form.precedencias)
  }
  changeTasks(){
    console.log("changeTasks")
    this.changeDemanda();
    this.form.tiempoTasks = Array(parseInt(this.form.cantTasks)).fill(1);
  }
  changeRec(){
    this.form.cantUnidades = Array(parseInt(this.form.cantRecursos)).fill(1);
    console.log("changeRec")
    this.changeDemanda();
  }
  changeJobs(){
    this.cantJobs = this.form.cantJobs;//no haria falta
  }
  changeDemanda(){
    // Cambiar el tamano del arreglo bidimensional de demanda de cada task
    this.form.demandaTasks = Array(parseInt(this.form.cantTasks)).fill(null);
    for( var i=0; i<this.form.cantTasks;i++){
      this.form.demandaTasks[i] = Array(parseInt(this.form.cantRecursos)).fill(0);
    }
    console.log("changeDemanda")
  }
  //New

  calculate(){
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
