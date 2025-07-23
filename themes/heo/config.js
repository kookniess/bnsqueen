const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-07-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '华熙赵燕针对我这个吹哨人的精准猎杀...', url: 'https://bnsqueen.com/post/video' }, // 链接到小说第一章
    { title: '千亿华熙隐藏的权力与阴谋？点击揭秘', url: 'https://bnsqueen.com/post/novel' }, // 链接到“故事宇宙”或小说简介页面
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '看证据',
  HEO_HERO_TITLE_2: '看华熙秘密',
  HEO_HERO_TITLE_3: '',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: '',
  HEO_HERO_TITLE_LINK: '',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '证据我还留存着！',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '我的声明', url: '/statements' },
  HEO_HERO_CATEGORY_2: { title: '内幕揭秘', url: '/evidence' },
  HEO_HERO_CATEGORY_3: { title: '收听故事：58集播客', url: '/post/podcast' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 作者',
    '🤝 吹哨人',
    '🏃 被陷害的犯罪嫌疑人',
    '🏠 资本市场部总经理',
    '🤖️ 全球投资者关系负责人',
    '🧱 首席执行官特别助理'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: '/post/support',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.bnsqueen.com',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: '新加坡投资基金',
      img_1: '/images/heo/001.png',
      color_1: '#989bf8',
      title_2: '富兰克林基金',
      img_2: '/images/heo/002.png',
      color_2: '#ffffff'
    },
    {
      title_1: '安永企业家奖',
      img_1: '/images/heo/003.png',
      color_1: '#57b6e6',
      title_2: '国美电器',
      img_2: '/images/heo/004.png',
      color_2: '#4082c3'
    },
    {
      title_1: '华熙生物',
      img_1: '/images/heo/005.png',
      color_1: '#ffffff',
      title_2: '中信银行',
      img_2: '/images/heo/006.png',
      color_2: '#ffffff'
    },
    {
      title_1: '关键证据',
      img_1: '/images/heo/007.png',
      color_1: '#eb6840',
      title_2: '致命语音',
      img_2: '/images/heo/008.png',
      color_2: '#8f55ba'
    },
    {
      title_1: '吹哨人',
      img_1: '/images/heo/009.png',
      color_1: '#f29e39',
      title_2: '靠山打手',
      img_2: '/images/heo/0010.png',
      color_2: '#2c51db'
    },
    {
      title_1: '4.3亿K线图',
      img_1: '/images/heo/0011.png',
      color_1: '#f7cb4f',
      title_2: '2017审计报告',
      img_2: '/images/heo/0012.png',
      color_2: '#e9572b'
    },
    {
      title_1: '红头文件',
      img_1: '/images/heo/0013.png',
      color_1: '#df5b40',
      title_2: '正义',
      img_2: '/images/heo/0014.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://youtube.com/@bnsqueen_com',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
