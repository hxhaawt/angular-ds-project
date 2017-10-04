import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    newsList: any[] = [
        {
            id: 1,
            title: "新闻条目1新闻条目1新闻条目1新闻条目1",
            url: "http://starcraft.com"
        },
        {
            id: 2,
            title: "新闻条目2新闻条目2新闻条目2新闻条目2",
            url: "http://warcraft.com"
        },
        {
            id: 3,
            title: "新闻条3新闻条3新闻条3",
            url: "http://overwatch.com"
        },
        {
            id: 4,
            title: "新闻条4广告发布",
            url: "http://hearstone.com"
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
