import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// 自定义路由规则
import { appRoutes } from './app.router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
// import { DialogComponent } from './components/base/dialog/dialog.component';
import { TestFileComponent } from './test-file/test-file.component';

// 共享模块
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        // DialogComponent,
        TestFileComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),

        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
