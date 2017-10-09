import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-order',
  templateUrl: './check-order.component.html',
  styleUrls: ['./check-order.component.scss']
})
export class CheckOrderComponent implements OnInit {

    @Input()
    isShowCheckDialog: boolean = false;
    @Input()
    orderId: string = '';

    isShowSuccessDialog: boolean = false;
    isShowFailDialog: boolean = false;

    @Output()
    onCloseCheckDialog: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    checkStatus () {

        this.isShowSuccessDialog = true;

        this.onCloseCheckDialog.emit();

        // this.$http.post('/api/checkOrder', {
        //     orderId: this.orderId
        // })
        //     .then((res) => {
        //         this.isShowSuccessDialog = true
        //         this.$emit('on-close-check-dialog')
        //     }, (err) => {
        //         this.isShowFailDialog = true
        //         this.$emit('on-close-check-dialog')
        //     })
    }

    checkStatus1 () {
        this.onCloseCheckDialog.emit();
    }
    checkStatus2 () {
        this.isShowFailDialog = true;
        this.onCloseCheckDialog.emit();
    }
    toOrderList () {
        this.isShowSuccessDialog = false;
        // this.$router.push({path: '/orderList'});
    }
    closeFailDialog() {
        this.isShowFailDialog = false;
    }
}
