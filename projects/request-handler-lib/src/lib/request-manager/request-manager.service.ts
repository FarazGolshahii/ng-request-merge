import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {RegisterResponseType, RequestType} from "./reqyest-type.model";
import {RequestStatus, RequestTypeEnum} from "./request-manager.enum";

@Injectable({
  providedIn: 'root'
})
export class RequestManagerService<T> {
  requestsList: Array<RequestType> = [];
  constructor() {}

  registerRequest(req: Omit<RequestType, "waitList" | "status">): RegisterResponseType {
    let index: number = this.requestsList.findIndex(c => (c.url == req.url && c.url == req.url));
    if (index == -1) {
      let data: RequestType = {
        ...req,
        waitList: new BehaviorSubject<any>(null),
        status: RequestStatus.Pending,
      }
      this.requestsList.push(data);
      return {waitList: data.waitList, status: RequestTypeEnum.New};
    } else {
      return {waitList: this.requestsList[index].waitList, status: RequestTypeEnum.Append};
    }
  }

  removeRequest(url: string) {
    let index: number = this.requestsList.findIndex(c => c.url == url);
    this.requestsList[index].waitList.complete();
    this.requestsList[index].waitList.unsubscribe();
    this.requestsList.splice(index, 1);
  }
}

