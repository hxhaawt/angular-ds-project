import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

// 自定义模块
import { DialogComponent } from '../components/base/dialog/dialog.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        DialogComponent,

    ],
    exports: [
        CommonModule,
        FormsModule,
        DialogComponent,
    ]
})

export class SharedModule {

}
