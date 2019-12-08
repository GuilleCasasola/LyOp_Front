import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
const API_URL = environment.apiUrl;
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    linear(data) {
        var httpOptions;
        return this.http.post(API_URL + "lineal", data, httpOptions);
    }
    entera(data) {
        var httpOptions;
        return this.http.post(API_URL + "integer", data, httpOptions);
    }
    sensibilidad(data) {
        var httpOptions;
        return this.http.post(API_URL + "sensibility", data, httpOptions);
    }
    scheduling(data) {
        var httpOptions;
        return this.http.post('http://localhost:8000/' + "scheduling", data, httpOptions);
    }
};
ApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map