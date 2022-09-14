import {NgModule} from '@angular/core';
import {RequestManagerService} from "./request-manager/request-manager.service";
import {NgRequestMerge} from "./ng-request-merge.service";
import {HttpClient} from "@angular/common/http";

@NgModule({
  providers: [
    RequestManagerService,
    NgRequestMerge,
    HttpClient
  ]
})
export class NgRequestMergeModule {
}
