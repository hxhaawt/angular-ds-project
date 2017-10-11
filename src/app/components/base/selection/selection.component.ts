import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCommon} from "../../../shared/common-type.module";
import {EventService} from "../../../services/event.service";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

    @Input()
        selections: ProductCommon[];

    @Output()
        onChange: EventEmitter<ProductCommon> = new EventEmitter();

    // 当前的下标
    nowIndex: number;
    // 显示、隐藏下拉菜单
    isDrop: boolean = false;

    // 单选下拉菜单
    constructor(public service: EventService) {

    }

    ngOnInit() {
        this.nowIndex = 0;

        this.service.closeSelection.subscribe( () => {
            this.isDrop = false;
        });
    }

    // 下拉选项 显示/隐藏
    toggleDrop(event: any) {
        // 阻止事件冒泡
        event.stopPropagation();
        // 主要是解决点击当前下拉菜单，
        // 其他所有监听有 reset-component 事件
        // 的组件会先执行监听函数，然后再执行下面的程序
        if ( !this.isDrop ) {
            // 这个主要是组件间有多个下拉选项时，让其他下拉选项关闭
            this.service.closeSelection.emit();
        }

        this.isDrop = !this.isDrop;
    }

    // 选择对应的下拉项
    chooseSelection(index: number, event: any) {

        // 阻止事件冒泡
        event.stopPropagation();

        this.nowIndex = index;
        this.isDrop = false;

        this.onChange.emit(this.selections[index]);
    }
}
