import { RouterModule } from '@angular/router';


export const appRoutes = [
    {
        // 路由器将应用重定向，当且仅当导航到“/” 根目录下
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        // **代表该路由是一个通配符路径。 这个要放到最后面
        // 如果当前URL无法匹配上我们配置过的任何一个路由中的路径，路由器就会匹配上这一个。
        // 当需要显示404页面或者重定向到其它路由时，该特性非常有用。
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];


