import {NgModule} from '@angular/core';
import {RequestHandlerLibComponent} from './request-handler-lib.component';
import {RequestManagerService} from "./request-manager/request-manager.service";


@NgModule({
  declarations: [
    RequestHandlerLibComponent
  ],
  imports: [],
  exports: [
    RequestHandlerLibComponent
  ],
  providers: [
    RequestManagerService
  ]
})
export class RequestHandlerLibModule {
}
