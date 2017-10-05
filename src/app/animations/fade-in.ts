import { trigger, style, transition, animate } from '@angular/animations';

// 这些是动画效果名称，外部通过 [@fadeIn]引用即可
export const fadeIn =
    trigger('fadeIn', [
        // 进入 过渡 从上到下显示
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

            // 动画和过渡结束时的样式 从下面到上离开
            animate('.5s ease', style({
                transform: 'translateY(-500px)'
            }))
        ])
    ]);


// 这两个是首页广告部分的动画效果
export const fadeInLeft =
    trigger('fadeInLeft', [
        // 进入 过渡 从右边进入
        transition('void => *', [
            // 在过渡刚开始时的样式
            style({
                transform: 'translateX(900px)'
            }),
            // 动画和过渡结束时的样式
            animate('.5s', style({

            }))
        ]),
        // 离开 过渡
        transition('* => void', [])

    ]);

export const fadeOutLeft =
    trigger('fadeOutLeft', [
        // 进入 过渡 从右边进入
        transition('void => *', []),

        // 离开 过渡
        transition('* => void', [

            // 动画和过渡结束时的样式 从左边离开
            animate('.5s', style({
                transform: 'translateX(-900px)'
            }))
        ])
    ]);


















