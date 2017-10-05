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

import { DialogComponent } from './components/base/dialog/dialog.component';
// import { DetailComponent } from './buy-product/detail/detail.component';
// import { DetailListComponent } from './buy-product/detail-list/detail-list.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DialogComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
