import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {RequestManagerService} from "./request-manager/request-manager.service";
import {RequestParamType} from "./model/RequestParamType";
import {catchError, finalize, map, Observable, throwError} from "rxjs";
import {RegisterResponseType} from "./request-manager/reqyest-type.model";
import {RequestTypeEnum} from "./request-manager/request-manager.enum";

@Injectable({
  providedIn: 'root'
})
export class NgRequestMerge {

  public requestHeader = new HttpHeaders({});

  constructor(private http: HttpClient,
              private requestManager: RequestManagerService<any>) {
  }

  public get(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    if (params) {
      const queryParams = new URLSearchParams();
      for (const key of Object.keys(params)) {
        queryParams.set(key, params[key]);
      }
      url = url + '?' + queryParams.toString();

    }
    let waitList: RegisterResponseType = this.requestManager.registerRequest(
      {
        url: url,
        payload: {
          ...headerOption,
        }
      })

    if (waitList.status == RequestTypeEnum.New) {
      return this.http
        .get<any>(url, {
          headers: {
            ...headerOption,
          }
        })
        .pipe(
          map((response: any) => {
            return response;
          }),
          catchError((error: HttpErrorResponse) => {
            this.errorHandle(error);
            return throwError(error);

          }),
          finalize(() => {
            this.requestManager.removeRequest(url);
          })
        )

        ;
    } else if (waitList.status == RequestTypeEnum.Append) {
      return waitList.waitList;
    }

  }

  public post(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    return this.http
      .post<any>(url, params, {
        headers: {
          ...headerOption,
        }
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => {
          this.errorHandle(error);
          return throwError(error);
        })
      );

  }

  public put(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    return this.http
      .put<any>(url, params, {
        headers: {
          ...headerOption,
        }
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => {
          this.errorHandle(error);
          return throwError(error);
        })
      );

  }

  public delete(url: string, params?: RequestParamType, headerOption: any = {}): Observable<HttpResponse<any>> | any | void {
    if (params) {
      const queryParams = new URLSearchParams();
      for (const key of Object.keys(params)) {
        queryParams.set(key, params[key]);
      }
      url = url + '?' + queryParams.toString();

    }
    return this.http
      .delete<any>(url, {
        headers: {
          ...headerOption,
        }
      })
      .pipe(
        map((response: any) => {
            return response;
        }),
        catchError((error: HttpErrorResponse) => {
          this.errorHandle(error);
          return throwError(error);
        }),
      );
  }

  private errorHandle(response: any): any {

    if (response instanceof HttpErrorResponse) {
      switch (response?.status) {
        case 405 :
        case 500 :
        case 401 :
          if (response.error) {
            throwError(response.error);
          }
          break;
      }
    } else if (response?.isSuccess === false) {
      throwError(response.error);
    }
  }

  test() {
    console.log("called");
  }
}
