import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCommon} from "../../../shared/common-type.module";

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
    constructor() { }

    ngOnInit() {
        this.nowIndex = 0;
    }

    // 下拉选项 显示/隐藏
    toggleDrop() {

        this.isDrop = !this.isDrop;
    }

    // 选择对应的下拉项
    chooseSelection(index: number) {
        this.nowIndex = index;
        this.isDrop = false;

        this.onChange.emit(this.selections[index]);
    }
}
