import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // 用户名
    username: string = "";
    isShowAboutDialog: boolean = false;
    isShowLogDialog: boolean = false;
    isShowRegDialog: boolean = false;

    constructor() { }

    ngOnInit() {

    }
    // 退出登录
    userQuit() {
        this.username = "";
    }
    // 显示登录弹窗
    userLogin() {
        this.isShowLogDialog = true;
    }
    // 显示注册弹窗
    userReg() {
        this.isShowRegDialog = true;
    }
    // 显示关于我们
    aboutClick() {
        this.isShowAboutDialog = true;
    }

    // 关闭弹窗
    closeDialog(flag: string) {
        this[flag] = false;
    }

}
