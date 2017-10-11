import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// 自定义模块
import { DialogComponent } from '../components/base/dialog/dialog.component';

import { LoginComponent } from '../user/login/login.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DialogComponent,
        LoginComponent

    ],
    exports: [
        CommonModule,
        FormsModule,
        DialogComponent,
        LoginComponent
    ]
})

export class SharedModule {

}
