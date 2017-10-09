import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bank-choose',
  templateUrl: './bank-choose.component.html',
  styleUrls: ['./bank-choose.component.scss']
})
export class BankChooseComponent implements OnInit {

    nowIndex: number;
    banks: any[] = [
        {
            id: 201,
            label: '招商银行',
            name: 'zhaoshang'   // name 用作CSS类名来加载样式
        },
        {
            id: 301,
            label: '中国建设银行',
            name: 'jianshe'
        },
        {
            id: 601,
            label: '浦发银行',
            name: 'pufa'
        },
        {
            id: 1101,
            label: '交通银行',
            name: 'jiaotong'
        },
        {
            id: 101,
            label: '中国工商银行',
            name: 'gongshang'
        },
        {
            id: 401,
            label: '中国农业银行',
            name: 'nongye'
        },
        {
            id: 1201,
            label: '中国银行',
            name: 'zhongguo'
        },
        {
            id: 501,
            label: '中信银行',
            name: 'zhongxin'
        }
    ];

    @Output()
    onChange: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {

        this.nowIndex = 0;
        this.onChange.emit(this.banks[this.nowIndex]);
    }

    chooseSelection (index) {
        this.nowIndex = index;
        this.onChange.emit(this.banks[index]);
        // console.log('obj1: ', this.banks[index]);
    }
}
