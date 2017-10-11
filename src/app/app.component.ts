import { Component } from '@angular/core';
import {EventService} from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'app';

    constructor(public service: EventService) {

    }

    // 全局点击事件
    clickEvent() {
        console.log('global event...');
        // 发送关闭下拉选择菜单要求，定阅有的组件会作出处理
        this.service.closeSelection.emit();
    }
}
