import { NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

// 自定义组件
import { DetailComponent } from './detail.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { CountComponent } from './count/count.component';
import { ForecastComponent } from './forecast/forecast.component';
import { PublishComponent } from './publish/publish.component';
import { CounterComponent } from '../../components/base/counter/counter.component';
import { MultiplyChooserComponent } from '../../components/base/multiply-chooser/multiply-chooser.component';
import { BankChooseComponent } from '../../components/base/bank-choose/bank-choose.component';

import { SharedModule } from '../../shared/shared.module';
import { CheckOrderComponent } from '../../components/base/check-order/check-order.component';
import { ChooserComponent } from '../../components/base/chooser/chooser.component';
import { SelectionComponent } from '../../components/base/selection/selection.component';


/* 路由设置 path 中不能有 / */
export const detailRoutes: Routes = [
    {
        path: '',
        component: DetailComponent,
        children: [
            // {
            //     path: '',
            //     redirectTo: 'count',
            //     pathMatch: 'full'
            // },
            {
                path: 'analysis',
                component: AnalysisComponent
            },
            {
                path: 'count',
                component: CountComponent
            },
            {
                path: 'forecast',
                component: ForecastComponent
            },
            {
                path: 'publish',
                component: PublishComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        // 这些是系统的模块
        CommonModule,
        FormsModule,
        RouterModule.forChild(detailRoutes),

        // 共享模块
        SharedModule
    ],
    exports: [],
    declarations: [
        // 这些是自定义的组件
        AnalysisComponent,
        CountComponent,
        ForecastComponent,
        PublishComponent,
        DetailComponent,
        CounterComponent,
        MultiplyChooserComponent,
        BankChooseComponent,
        CheckOrderComponent,
        ChooserComponent,
        SelectionComponent,

    ],
    providers: [],
})
export class DetailModule { }
