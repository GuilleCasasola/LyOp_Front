import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  expanded;
  icon;
  title;
  public items: Array<{ index: number; note: string; selected: boolean}> = [];
  constructor() {
    this.title="Contenidos";
    this.icon="arrow-dropdown";
    this.expanded=true;
    this.items = [
      { index : 0,
        note: "Introducción",
        selected : false
      }, 
      { index : 1,
        note: "Optimizacion un objetivo: Sin restricciones",
        selected : false
      },
      { index : 2,
        note: "Optimizacion un objetivo: Con restricciones",
        selected : false
      },
      { index : 3,
        note: "Optimizacion Multiobjetivo: Goal Programming",
        selected : false
      },
      { index : 4,
        note: "Optimizacion Multiobjetivo: Pareto",
        selected : false
      },
      ]
    
  }
  Expandlist(){
    this.expanded=!this.expanded;
    if(this.expanded){
      this.icon="arrow-dropdown";
    }else{
      this.icon="arrow-dropleft";
    }
    console.log("expanded");
  }
  showComponent(index){
    this.title=this.items[index].note;
    this.Expandlist();
    this.items.forEach(element => {
        if(element.index!=index){
            element.selected=false;
        }else{
            element.selected=true;
        }
        
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
