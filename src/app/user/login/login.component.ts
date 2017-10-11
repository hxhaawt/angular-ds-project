import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // 这是响应式表单结构

    formModel: FormGroup;
    @Output()
        onChange: EventEmitter<any> = new EventEmitter();

    isUsernameEmpty: boolean = false;
    isPasswordEmpty: boolean = false;

    constructor(fb: FormBuilder) {
        // let fb = new FormBuilder();
        this.formModel = fb.group({
            username: ['', [Validators.required, Validators.minLength(6)]],
            password: [null, [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit() {
    }

    // 获取焦点事件
    usernameFocus() {
        // console.log('11');
        this.isUsernameEmpty = false;
    }
    passwordFocus() {
        // console.log('11');
        this.isPasswordEmpty = false;
    }

    // 登录检测
    onLogin(event: any) {

        event.stopPropagation();

        // 表单所有字段都是合法
        if (this.formModel.valid) {
            //console.log(  this.formModel.value );
            // 将用户名和密码传递给父组件
            this.onChange.emit(this.formModel.value);

            console.log('表单所有字段都是合法');
        } else {
            this.isUsernameEmpty = true;
            this.isPasswordEmpty = true;

            console.log('表单有字段是不合法');
        }
    }
}
