import { trigger, style, transition, animate } from '@angular/animations';

// 这些是动画效果名称，外部通过 [@fadeIn]="active" 引用即可
export const fadeIn =
    // 触发器名称，附加这个动画到元素上 外部通过 [@fadeIn]="active" 引用即可
    trigger('fadeIn', [
        // 进入 过渡
        transition('void => *', [
            // 在过渡刚开始时的样式
            style({
                transform: 'translateY(-500px)'
            }),
            // 动画和过渡结束时的样式
            animate('.5s ease', style({

            }))
        ]),
        // 离开 过渡
        transition('* => void', [

            // 动画和过渡结束时的样式
            animate('.5s ease', style({
                transform: 'translateY(-500px)'
            }))
        ])
    ]);

















