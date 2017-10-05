import { NgModule} from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// 自定义组件
import { HomeComponent } from './home.component';
import { ProductComponent } from '../product/product.component';
import { NewsComponent } from '../news/news.component';
import { SlideshowComponent } from '../components/slideshow/slideshow.component';
import { DetailListComponent } from '../buy-product/detail-list/detail-list.component';


export const homeRoutes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        // 这些是系统的模块
        CommonModule,
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
        // 这些是自定义的组件
        HomeComponent,
        ProductComponent,
        NewsComponent,
        SlideshowComponent,
        DetailListComponent,
    ],
    providers: [],
})
export class HomeModule { }
