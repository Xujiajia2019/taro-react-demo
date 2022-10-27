export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/graph/graph'
  ],
  tabBar: {
    "custom": true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '记录'
      }, 
      {
        pagePath: 'pages/graph/graph',
        text: '趋势图'
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
