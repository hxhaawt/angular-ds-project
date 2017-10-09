import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

    // 产品信息title
    productTitle: string[] = [
        '购买数量',
        '媒介',
        '有效时间',
        '总价'
    ];
    // 媒介 列表
    versionList: any[] = [
        {
            label: '纸质报告',
            value: 0
        },
        {
            label: 'pdf',
            value: 1
        },
        {
            label: '页面报告',
            value: 2
        },
        {
            label: '邮件',
            value: 3
        }
    ];
    isShowErrDialog: boolean = false; // 支付失败 标志
    isShowCheckOrder: boolean =  false; // 是否显示 点击确认购买 之后的窗口
    buyVersionArry: any[] = [];    // 购买的媒介/版本 可以是多个 内部为对象格式
    counterMin: number = 20;    // 购买数量 最小和最大值
    counterMax: number = 100;
    counter: number = this.counterMin;    // 购买数量
    bankId: null;   // 银行ID,
    orderId: string = '';        // 后台 返回的购买id
    isShowPayDialog: boolean =  false; // 显示购买窗口 标志
    totalPrice: number;

    constructor() { }

    ngOnInit() {

        this.buyVersionArry = [this.versionList[0]];
        this.calTotalPrice();
    }

    // 总价
    calTotalPrice()  {
        const versionPriceArr = [80, 30, 20, 10];
        let versionPriceTotal = 0;
        for (let i = 0; i < this.buyVersionArry.length; i++) {
            versionPriceTotal += versionPriceArr[ this.buyVersionArry[i].value ];
        }

        // return 500 + (this.counter - 20) * 20 + versionPriceTotal;
        this.totalPrice = 500 + (this.counter - this.counterMin) * 20 + versionPriceTotal;
    }

    // 重新设置子组件返回的数值
    onParamChange (attr, val) {
        this[attr] = val;
        // console.log('change: ', attr, val);
        // 重新计算总价
        this.calTotalPrice();
    }

    // 显示购买弹窗
    showPayDialog() {
        this.isShowPayDialog = true;
    }
    // 隐藏购买窗口
    hidePayDialog() {
        this.isShowPayDialog = false;
    }
    // 监听选择银行时，返回的信息
    onChangeBanks(bankObj) {
        this.bankId = bankObj.id;

        // console.log('obj2: ', bankObj);
    }

    // 关闭 点击确认购买 之后显示 的窗口
    hideCheckOrder () {
        this.isShowCheckOrder = false;
    }
    // 关闭 支付失败窗口
    hideErrDialog () {
        this.isShowErrDialog = false;
    }

    // 处理点击 确认购买 按钮
    confirmBuy () {

        // 提交数据给后端
        const reqParams: any = {
            // 只是 测试数据
            counter: this.counter,
            bankId: this.bankId
        };

        this.orderId = 'thisid1234';
        // 显示 等待付款 窗口
        this.isShowCheckOrder = true;
        // 关闭 购买窗口
        this.isShowPayDialog = false;

        // this.$http.post('/api/createOrder', reqParams)
        //     .then((res) => {
        //         this.orderId = res.data.orderId;
        //         // 显示 等待付款 窗口
        //         this.isShowCheckOrder = true;
        //         // 关闭 购买窗口
        //         this.isShowPayDialog = false;
        //     }, (err) => {
        //         // 关闭 购买窗口
        //         this.isShowPayDialog = false;
        //         // 显示支付失败窗口
        //         this.isShowErrDialog = true;
        //     })

    }

}
