import {Component, OnInit} from '@angular/core';
import {RequestParamType} from "./model/RequestParamType";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'lib-request-handler-lib',
  template: ``,
  styles: []
})
export class RequestHandlerLibComponent implements OnInit {

  constructor(private requestHandler: RequestHandlerLibComponent) {
  }

  ngOnInit(): void {
  }

  public get(url: string, params?: any, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    return this.requestHandler.get(url, params, headerOption)
  }

  public post(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    return this.requestHandler.post(url, params, headerOption)
  }

  public put(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    return this.requestHandler.put(url, params, headerOption)
  }

  public delete(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    return this.requestHandler.delete(url, params, headerOption)
  }
}
