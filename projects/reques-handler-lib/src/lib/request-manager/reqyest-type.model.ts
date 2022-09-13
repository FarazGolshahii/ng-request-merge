import {BehaviorSubject} from "rxjs";
import {RequestStatus, RequestTypeEnum} from "./request-manager.enum";

export declare type RequestType = {
  url: string;
  payload: any | null;
  waitList: BehaviorSubject<any>;
  cacheTime?: number;
  status: RequestStatus
}

export declare type RegisterResponseType = {
  waitList: BehaviorSubject<any>,
  status: RequestTypeEnum
}
