import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service"
import { LoadingController } from '@ionic/angular';

import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.page.html',
  styleUrls: ['./scheduling.page.scss'],
})
export class SchedulingPage implements OnInit {

  cantRest;
  tareas;
  unidades;

  //Old
  solucion;
  form ;
  errorServ=false;
  errorRest=false;
  message;
  iterable12; //Arreglito de 12 para ayudarnos a mostrar los select de la vista con ngFor

  chart;

  constructor(private apiService : ApiService , public loadingController: LoadingController) { 
    this.iterable12 = Array(12).fill(1);
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
    this.presentLoading();  //Cartelido de cargando

    for( var j=0; j<this.cantRest;j++){

      for( var i=0; i<this.form.cantTasks;i++){
        this.form.precedencias[j][i] = parseInt(this.form.precedencias[j][i] )
      }
    }
    this.apiService.scheduling(this.form).subscribe(
      (data)=> {
        this.errorServ=false;
        if(data["error"]){
          this.solucion= null;
          this.message = data["message"];
          this.errorRest=true;
        }else{
          this.errorRest=false;
          this.solucion=data;

          //Gantt
          var solu = this.solucion.solution;
          var grafSolu =[];
          //Vamos a darle formato a la solucion para que la muestre el grafico  { x: 10, y:[0, 20], label: "Job 1 Tarea 1" },
          for(var i=0; i< solu.length;i++){
            grafSolu.push({x: i+5 , y: [solu[i].start ,solu[i].end], label: "Job " + solu[i].job + " Tarea " + solu[i].task});
          }
          this.newChart(grafSolu);
        }
        this.loadingController.dismiss();
      }, (error)=> {
          this.errorServ=true;
          this.solucion = null;
          this.loadingController.dismiss();
      }
    );
    
  }

  //Metodo que crea y renderiza el Diagrama de Gantt
  newChart(dataP){
    var inter = 10;
    var end = this.solucion.endTime;
    if(end >= 200 && end<= 400){
      inter = 25;
    }else if(end>=500){
      inter =50;
    }
    
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Diagrama de Gantt"
      },
      axisX: {
        title: "Tareas"
      },
      axisY: {
        includeZero: true,
        title: "Tiempo",
        interval: inter
      }, 
      data: [{
        type: "rangeBar",
        yValueFormatString: "#0",
        indexLabel: "{y[#index]}",
        toolTipContent: "<b>{label}</b>: de {y[0]} a {y[1]}",
        dataPoints: dataP
      }]
    });
    chart.render();
  }

  changeRest(){
    // precedencias son las reglas de precedencias justamente del tipo "Terminar tarea X antes de tarea Y"
    // Creamos un arreglo con la cantidad de restricciones que se seleccionan en la vista
     // Y cada elemento del arreglo le corresponden dos elementos correspodientes a la Tarea X e Y
    this.form.precedencias = Array(parseInt(this.cantRest)).fill(null);
    for( var i=0; i<this.cantRest;i++){
      this.form.precedencias[i] = Array(2).fill(0);
    }
    console.log(this.form.precedencias)
  }

  changeTasks(){
    // this.tareas lo usamos para iterar en la vista para mostrar los inputs de tareas
    this.tareas = Array(parseInt(this.form.cantTasks)).fill(1);
    this.changeDemanda();
  }

  changeRec(){
    // this.unidades lo usamos para iterar en la vista para mostrar los inputs de recursos
    this.unidades = Array(parseInt(this.form.cantRecursos)).fill(1);
    this.changeDemanda();
  }

  changeDemanda(){
    // Cambiar el tamano del arreglo bidimensional de demanda de cada task
    // Indica cuantos la cantidad de recursos necesarios para cada tarea
    // Por eso se crea un arreglo de tareas y cada uno de los elementos es un arreglo con la cantidad de recursos
    this.form.demandaTasks = Array(parseInt(this.form.cantTasks)).fill(null);
    for( var i=0; i<this.form.cantTasks;i++){
      this.form.demandaTasks[i] = Array(parseInt(this.form.cantRecursos)).fill(0);
    }

  }

  calculate(){
   //Esto es para que se active el div del grafico antes de hacer el Submit. Porque si no la libreria no encuentra donde poner el gráfico
   this.solucion=true;
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
