module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  "plugins": ["prettier"],
  rules: {
    "prettier/prettier": "error",
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "quotes": ["error", "single"],
    "spaced-comment": 0, //注释风格要不要有空格什么的
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "ObjectExpression": 1
    }], //缩进风格
    "no-tabs": "off",
    "semi": [2, "always"], //语句强制分号结尾
    "valid-jsdoc": 0, //jsdoc规则
    "padded-blocks": 0, //块语句内行首行尾是否要空行
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "max-params": [0, 3], //函数最多只能有3个参数
    "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    "eol-last": 0 // 文件末尾不强制换行
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}