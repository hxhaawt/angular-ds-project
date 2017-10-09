import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiply-chooser',
  templateUrl: './multiply-chooser.component.html',
  styleUrls: ['./multiply-chooser.component.scss']
})
export class MultiplyChooserComponent implements OnInit {

    @Input()
    selections: any[] = [];

    @Output()
        onChange: EventEmitter<any> = new EventEmitter();

    // 存的是下标
    nowIndexes: number[] = [0];

    constructor() { }

    ngOnInit() {
    }

    toggleSelection (index) {
        if (this.nowIndexes.indexOf(index) === -1) {
            this.nowIndexes.push(index);
        } else {
            this.nowIndexes.splice(this.nowIndexes.indexOf(index), 1);
        }

        const nowObjArray: any[] = this.nowIndexes.map( (idx) => {
            return this.selections[idx];
        });

        this.onChange.emit(nowObjArray);
    }

    checkActive (index) {
        return this.nowIndexes.indexOf(index) !== -1;
    }
}
