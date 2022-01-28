module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended'],

  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    // 禁用 console
    'no-console': 0,
    'indent': [2, 2], // 强制使用一致的缩进
    'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
    'semi': [2, 'never'], // 要求或禁止使用分号代替 ASI 
    'quotes': [2, 'single']  // 强制使用一致的反勾号、双引号或单引号
  }
}
