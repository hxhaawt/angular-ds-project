import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    productIcon = 'http://placehold.it/200x150';
    // 产品列表头
    products: any[] = [
        {
            name: '数据统计',
            path: 'count',
            active: false
        },
        {
            name: '数据预测',
            path: 'forecast',
            active: false
        },
        {
            name: '流量分析',
            path: 'analysis',
            active: false
        },
        {
            name: '广告发布',
            path: 'publish',
            active: false
        }
    ];

    imgMap: string[] = [
        '../../../assets/images/1.png',
        '../../../assets/images/2.png',
        '../../../assets/images/3.png',
        '../../../assets/images/4.png'
    ];

    productIndex = 0;

    constructor() { }

    ngOnInit() {
    }

    // 点击跳转时，设置对应的图片下标
    clickLink(index: number) {
        this.productIndex = index;
    }

}
