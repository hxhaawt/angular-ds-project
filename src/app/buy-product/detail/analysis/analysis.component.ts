import { Component, OnInit } from '@angular/core';
import { ProductCommon } from '../../../shared/common-type.module';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

    buyNum: number;
    buyType: ProductCommon;
    versions: ProductCommon[];
    period: ProductCommon;
    price: number;
    versionList: ProductCommon[] = [
        {
            label: '客户版',
            value: 0
        },
        {
            label: '代理商版',
            value: 1
        },
        {
            label: '专家版',
            value: 2
        }
    ];
    periodList: ProductCommon[] = [
        {
            label: '半年',
            value: 0
        },
        {
            label: '一年',
            value: 1
        },
        {
            label: '三年',
            value: 2
        }
    ];
    buyTypes: ProductCommon[] = [
        {
            label: '入门版',
            value: 0
        },
        {
            label: '中级版',
            value: 1
        },
        {
            label: '高级版',
            value: 2
        }
    ];
    isShowPayDialog: boolean = false;
    bankId: number;
    orderId: string;
    isShowCheckOrder: boolean = false;
    isShowErrDialog: boolean = false;

    constructor() { }

    ngOnInit() {
        this.buyNum = 1;
        this.buyType = this.buyTypes[0];
        this.versions = [this.versionList[0]];
        this.period = this.periodList[0];
        this.calTotalPrice();
    }
    onParamChange (attr, val) {
        this[attr] = val;
        this.calTotalPrice();
    }
    calTotalPrice () {

        const buyVersionsArray = this.versions.map( (item) => {
            return item.value;
        });

        const reqParams = {
            buyNumber: this.buyNum,
            buyType: this.buyType.value,
            period: this.period.value,
            version: buyVersionsArray.join(',')
        };

        const typePriceArr: number[] = [50, 80, 100];
        const periodPriceArr: number[] = [150, 260, 500];
        const versionPriceArr: number[] = [50, 80, 130];

        const tmpArr =  buyVersionsArray.map( (item) => versionPriceArr[item]);
        let versionTotalPrice = 0;
        for (let i = 0, len = tmpArr.length; i < len; i++) {
            versionTotalPrice += tmpArr[i];
        }

        this.price = 300 + reqParams.buyNumber * 20
                    + typePriceArr[reqParams.buyType]
                    + periodPriceArr[reqParams.period]
                    + versionTotalPrice;

        // this.$http.post('/api/getPrice', reqParams)
        //     .then((res) => {
        //         this.price = res.data.amount
        //     })
    }

    showPayDialog () {
        this.isShowPayDialog = true;
    }
    hidePayDialog () {
        this.isShowPayDialog = false;
    }
    hideErrDialog () {
        this.isShowErrDialog = false;
    }
    hideCheckOrder () {
        this.isShowCheckOrder = false;
    }
    onChangeBanks (bankObj: any) {
        this.bankId = bankObj.id;
    }

    confirmBuy () {
        const buyVersionsArray = this.versions.map( (item) => {
            return item.value;
        });
        const reqParams = {
            buyNumber: this.buyNum,
            buyType: this.buyType.value,
            period: this.period.value,
            version: buyVersionsArray.join(','),
            bankId: this.bankId
        };

        // 没有发送到服务器，只是测试用
        this.orderId = '123fsfexesf088';
        this.isShowCheckOrder = true;
        this.isShowPayDialog = false;

        // this.$http.post('/api/createOrder', reqParams)
        //     .then((res) => {
        //         this.orderId = res.data.orderId;
        //         this.isShowCheckOrder = true;
        //         this.isShowPayDialog = false;
        //     }, (err) => {
        //         this.isShowBuyDialog = false;
        //         this.isShowErrDialog = true;
        //     })
    }
}
