import {Component, DoCheck, OnInit} from '@angular/core';

import { ProductCommon } from '../../../shared/common-type.module';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, DoCheck {

    isShowErrDialog: boolean = false; // 支付失败 标志
    isShowCheckOrder: boolean =  false; // 是否显示 点击确认购买 之后的窗口
    isShowPayDialog: boolean = false; // 是否显示 购买弹框
    bankId: string;   // 银行ID,
    productType: ProductCommon;    // 产品类型
    region: ProductCommon;    // 适用地区
    validTime: string = '半年';  // 有效时间
    totalPrice: number;     // 总价
    orderId: string;        // 后台 返回的购买id
    // 购买产品类型
    buyTypes: ProductCommon[] = [
        {
            label: '红色版',
            value: 0
        },
        {
            label: '绿色版',
            value: 1
        },
        {
            label: '紫色版',
            value: 2
        }
    ];
    // 地区
    districts: ProductCommon[] = [
        {
            label: '北京',
            value: 0
        },
        {
            label: '上海',
            value: 1
        },
        {
            label: '广州',
            value: 2
        },
        {
            label: '天津',
            value: 3
        },
        {
            label: '武汉',
            value: 4
        },
        {
            label: '重庆',
            value: 5
        }
    ];

    constructor() { }

    ngOnInit() {
        this.productType = this.buyTypes[0];
        this.region = this.districts[0];
        this.calTotalPrice();
    }

    ngDoCheck() {

        this.calTotalPrice();
    }

    // 计算总价
    calTotalPrice() {
        this.totalPrice = 500 + this.productType.value * 50
                            + this.region.value * 20;
    }
    // 显示购买信息 弹窗
    showPayDialog() {
        this.isShowPayDialog = true;
    }
    // 关闭购买信息 窗口
    hidePayDialog() {
        this.isShowPayDialog = false;
    }

    // 点击--更新当前需要的 地域、产品类型
    onParamChange(attr: string, value: any) {
        this[attr] = value;
        // 重新计算价格
        this.calTotalPrice();
    }

    // 关闭 点击确认购买 之后显示 的窗口
    hideCheckOrder () {
        this.isShowCheckOrder = false;
    }

    // 关闭 支付失败窗口
    hideErrDialog () {
        this.isShowErrDialog = false;
    }

    // 监听选择银行时，返回的信息
    onChangeBanks(bankObj) {
        this.bankId = bankObj.id;
        // console.log('bank: ', bankObj);
    }

    // 处理点击 确认购买 按钮
    confirmBuy () {

        // 提交数据给后端
        const reqParams = {
            // 只是 测试数据
            busyType: this.productType.value,
            bankId: this.bankId
        };

        // 测试显示付款窗口
        this.orderId = "23423sdfese";
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
