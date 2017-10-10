import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCommon} from '../../../shared/common-type.module';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.scss']
})
export class ChooserComponent implements OnInit {

    @Input()
        selections: ProductCommon[];
    @Output()
        onChange: EventEmitter<ProductCommon> = new EventEmitter();

    nowIndex: number;

    constructor() { }

    ngOnInit() {
        this.nowIndex = 0;
    }

    // 点击设置下标，选择不同的类，并且发送给父组件
    chosenSelection(index: number) {
        this.nowIndex = index;
        this.onChange.emit(this.selections[index]);
    }

}
