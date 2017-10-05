import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {

    classArr: string[] = ['car', 'earth', 'loud', 'hill'];
    boardList: any[] = [
        {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'count',
            saleout: false
        },
        {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'analysis',
            saleout: false
        },
        {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
        },
        {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
        }
        ];
    constructor() { }

    ngOnInit() {
    }

}
