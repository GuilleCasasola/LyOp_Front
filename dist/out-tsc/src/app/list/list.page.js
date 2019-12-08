import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListPage = class ListPage {
    constructor() {
        this.items = [];
        this.title = "Contenidos";
        this.icon = "arrow-dropdown";
        this.expanded = true;
        this.items = [
            { index: 0,
                note: "Introducción",
                selected: false
            },
            { index: 1,
                note: "Optimizacion un objetivo: Sin restricciones",
                selected: false
            },
            { index: 2,
                note: "Optimizacion un objetivo: Con restricciones",
                selected: false
            },
            { index: 3,
                note: "Optimizacion Multiobjetivo: Goal Programming",
                selected: false
            },
            { index: 4,
                note: "Optimizacion Multiobjetivo: Pareto",
                selected: false
            },
        ];
    }
    Expandlist() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.icon = "arrow-dropdown";
        }
        else {
            this.icon = "arrow-dropleft";
        }
        console.log("expanded");
    }
    showComponent(index) {
        this.title = this.items[index].note;
        this.Expandlist();
        this.items.forEach(element => {
            if (element.index != index) {
                element.selected = false;
            }
            else {
                element.selected = true;
            }
        });
    }
    ngOnInit() {
    }
};
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: 'list.page.html',
        styleUrls: ['list.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map