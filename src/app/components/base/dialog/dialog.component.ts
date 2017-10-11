import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { fadeIn } from '../../../animations/fade-in';


@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    animations: [
        fadeIn
    ]
})
export class DialogComponent implements OnInit {

    // 这个组件的显示与否，是由父组件决定的
    @Input()
    isShow: boolean = false;

    // 发送事件给父组件，让父组件重新设置 isShow的值为false
    @Output()
    onClose: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    closeMyself(event: any) {
        // 阻止事件冒泡
        event.stopPropagation();
        this.onClose.emit('close me');
    }
}














