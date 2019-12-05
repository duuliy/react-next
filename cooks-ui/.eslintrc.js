module.exports = {
    root: true,
    // extends: '@react-native-community',
    "parserOptions": {
      "ecmaVersion": 6,          //ES的版本，默认为5
      "sourceType": "module",    //指定源代码存在的位置，script | module，默认为script。
      "ecmaFeatures": {          //指定要使用其他那些语言对象
        "experimentalObjectRestSpread": true,//启用对对象的扩展
        "jsx": true,                       //启用jsx语法
        "globalReturn": true            //允许return在全局使用
      }
    },
    rules: {
      'no-var': 2,
      'eqeqeq': [2, 'always'],
      'quotes': [2, 'single'],
      'semi': [2, 'never'],
      'comma-dangle': [2, 'never'],
      'comma-spacing': [2, { 'before': false, 'after': true }],
      'indent': [2, 2, { 'SwitchCase': 1 }],
      'no-mixed-spaces-and-tabs': [2, false],
      'no-trailing-spaces': 1,
      'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
      'space-before-function-paren': [0, 'always'],
      'space-infix-ops': 2,
      'object-curly-spacing': [2, 'always'],
      'no-multiple-empty-lines': [2, { 'max': 1 }]
    }
  };