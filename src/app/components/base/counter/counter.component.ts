import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit
    , DoCheck {

    @Input()
    max: number = 5;
    @Input()
    min: number = 1;

    count: any;
    packupCount: number;

    @Output()
    countChange: EventEmitter<number> = new EventEmitter();


    constructor() { }

    ngOnInit() {
        this.count =  this.min;
    }

    // 只有 @Input() 变量改变时才会调用这个函数，
    // 而且对象只是属性的值改变也不会调用这个函数，
    // greeting的值改变时才会调用这个函数，因为greeting是字符串类型，
    // 而字符串是不可变的，greeting的值改变时，greeting是指向其他地方的。
    // ngOnChanges(changes: SimpleChanges): void {
    //
    // }

    // 只要有值变化就调用这个勾子函数
    ngDoCheck() {

        // console.log('do check...');

        if (typeof this.count === 'number' && this.packupCount !== this.count) {

            this.packupCount = this.count;

            // 发射事件，让父组件更新显示
            this.countChange.emit(this.count);
        }
    }

    fixNumber () {

        let fix;

        if (typeof this.count === 'string') {
            fix = Number(this.count.replace(/\D/g, ''));
        } else {
            fix = this.count;
        }

        if (fix > this.max || fix < this.min) {
            fix = this.min;
        }
        this.count = fix;
    }
    minus () {
        if (this.count <= this.min) {
            return ;
        }
        this.count --;
    }
    add () {
        if (this.count >= this.max) {
            return;
        }
        this.count ++;
    }
}
