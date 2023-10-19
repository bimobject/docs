/*module.exports = {
    // ...
    head: [
      ['link', { rel: 'stylesheet', href: '/custom.css' }]
    ],
    // ...
  }
  */

  // .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme