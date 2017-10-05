import {Component, Input, OnInit} from '@angular/core';
import { fadeInLeft, fadeOutLeft } from '../../animations/fade-in';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
    animations: [
        fadeInLeft,
        fadeOutLeft
    ]

})
export class SlideshowComponent implements OnInit {

    // 广告数组，存广告图片链接等
    @Input()
    slides: any[] = [];
    // 广告轮播时间
    @Input()
    inv: number = 1000;

    nowIndex: number = 0;
    isShow: boolean = true;
    invId: any;
    prevIndex: number;
    nextIndex: number;

    constructor() { }

    ngOnInit() {

        this.prevIndex = this.slides.length - 1;
        this.nextIndex = 0;

        this.runInv();
    }

    goto (index) {


        this.isShow = false;
        setTimeout(() => {
            this.isShow = true;
            this.nowIndex = index;
            this.setPrevNextIndex();

        }, 10);
    }
    runInv () {
        this.invId = setInterval(() => {
            this.goto(this.nextIndex);
        }, this.inv);
    }
    clearInv () {

        clearInterval(this.invId);
    }

    setPrevNextIndex() {

        if (this.nowIndex === 0) {
            this.prevIndex = this.slides.length - 1;
        } else {
            this.prevIndex = this.nowIndex - 1;
        }

        if (this.nowIndex === this.slides.length - 1) {
            this.nextIndex = 0;
        } else {
            this.nextIndex = this.nowIndex + 1;
        }
    }

}
