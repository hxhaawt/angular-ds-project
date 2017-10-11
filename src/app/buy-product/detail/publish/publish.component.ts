import { Component, OnInit } from '@angular/core';
import { ProductCommon } from '../../../shared/common-type.module';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

    count: number;
    countMin: number = 20;
    countMax: number = 100;
    tradeList: ProductCommon[] = [
        {
            label: '出版业',
            value: 0
        },
        {
            label: '媒体',
            value: 1
        },
        {
            label: '金融',
            value: 2
        },
        {
            label: '互联网',
            value: 3
        },
        {
            label: '游戏',
            value: 4
        }
    ];
    versionList: ProductCommon[] = [
        {
            label: '初级版',
            value: 0
        },
        {
            label: '中级版',
            value: 1
        },
        {
            label: '高级版',
            value: 2
        },
        {
            label: '专家版',
            value: 3
        }
    ];
    isShowPayDialog: boolean =  false; // 显示购买窗口 标志


    constructor() { }

    ngOnInit() {
    }

    // 显示购买弹窗
    showPayDialog() {
        this.isShowPayDialog = true;
    }
    // 隐藏购买窗口
    hidePayDialog() {
        this.isShowPayDialog = false;
    }

}
