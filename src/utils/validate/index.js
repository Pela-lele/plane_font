import Vue from 'vue'
import zh from './zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

// 配置中文
// Validator.addLocale(zh);
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};

Vue.use(VeeValidate,config);
// const config = {
//   errorBagName: 'errors', // change if property conflicts.
//   fieldsBagName: 'fields', 
//   delay: 0, 
//   locale: 'en', 
//   dictionary: null, 
//   strict: true, 
//   enableAutoClasses: true,
//   classNames: {
//     touched: 'touched', // the control has been blurred
//     untouched: 'untouched', // the control hasn't been blurred
//     valid: 'ng-valid', // model is valid
//     invalid: 'ng-invalid', // model is invalid
//     pristine: 'pristine', // control has not been interacted with
//     dirty: 'ng-dirty' // control has been interacted with
//   },
//   events: 'input|blur',
//   inject: true  
// }
// Vue.use(VeeValidate,config)


// 自定义validate 
const dictionary = {
   zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: ( field )=> "请输入" + field
      },
      attributes:{
        email:'邮箱',
        password:'密码',
        name: '账号',
        contactPhone : '联系电话',
        telephone: '手机号',
        name:'姓名',
        idCard:'身份证号',
        password:'密码'
        // flightHeight: '飞行高度'
      }
  }
};

Validator.updateDictionary(dictionary);

// export default VeeValidate


Validator.extend('phone', {
  messages: {
    zh_CN:field => '请输入11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

Validator.extend('idCard', {
  messages: {
    zh_CN:field => '身份证号格式不正确',
  },
  validate: value => {
    return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/.test(value)
  }
});
