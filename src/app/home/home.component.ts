import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    get invTime(): number {
        return this._invTime;
    }

    set invTime(value: number) {
        this._invTime = value;
    }

    slides: any[] = [
        {
            src: '../assets/slideShow/pic1.jpg',
            title: 'xxx1',
            href: 'detail/analysis'
        },
        {
            src: '../assets/slideShow/pic2.jpg',
            title: 'xxx2',
            href: 'detail/count'
        },
        {
            src: '../assets/slideShow/pic3.jpg',
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
        },
        {
            src: '../assets/slideShow/pic4.jpg',
            title: 'xxx4',
            href: 'detail/forecast'
        }
    ];

    private _invTime = 4000;


    constructor() { }

    ngOnInit() {
    }

}
