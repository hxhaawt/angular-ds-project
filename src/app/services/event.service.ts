import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventService {
    // 全局事件，根组件发出，其他组件收到会，作出处理
    closeSelection: EventEmitter<any>;

    constructor() {
        this.closeSelection = new EventEmitter();
    }

}
