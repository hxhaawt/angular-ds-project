import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    productList: any[] = [
        {
            title: 'PC产品',
            last: false,
            list: [
                {
                    name: '数据统计',
                    url: 'http://starcraft.com'
                },
                {
                    name: '数据预测',
                    url: 'http://warcraft.com'
                },
                {
                    name: '流量分析',
                    url: 'http://overwatch.com',
                    hot: true
                },
                {
                    name: '广告发布',
                    url: 'http://hearstone.com'
                }
            ]
        },
        {
            title: 'CD产品',
            last: false,
            list: [
                {
                    name: '流量分析',
                    url: 'http://overwatch.com',
                    hot: true
                },
                {
                    name: '广告发布',
                    url: 'http://hearstone.com'
                }
            ]
        },
        {
            title: '手机应用类',
            last: true,
            list: [
                {
                    name: '91助手',
                    url: 'http://weixin.com'
                },
                {
                    name: '产品助手',
                    url: 'http://twitter.com',
                    hot: true
                },
                {
                    name: '智能地图',
                    url: 'http://maps.com'
                },
                {
                    name: '团队语音',
                    url: 'http://phone.com'
                }
            ]
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
