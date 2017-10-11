import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

// 自定义路由规则
import { appRoutes } from './app.router';
// 其他组件
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestFileComponent } from './test-file/test-file.component';

// 共享模块
import { SharedModule } from './shared/shared.module';

// 服务组件
import {EventService} from './services/event.service';




@NgModule({
    declarations: [
        // 自定义的组件
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TestFileComponent,
    ],
    imports: [
        // 模块
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),

        SharedModule
    ],
    providers: [
        EventService,
        //  主要是放到服务器中，在其他路径刷新不显示问题
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
