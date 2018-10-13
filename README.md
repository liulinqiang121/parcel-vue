# parcel-vue
Parcel 是 Web 应用打包工具，提供了极快的速度，并且号称零配置。最新打包工具parcel初探，用vue,vue-router,elment-ui等写了一个demo,感觉真的好棒。除了创建.babelrc文件来适配es6,.其他几乎不需要配置什么。用了sass,编译的时候直接下载解析sass的模块，厉害的不行，用起来感觉棒极了。就是build的时候，postcss版本与其他的模块版本不同，一直build不成功，这个应该是还不太成熟的地方吧。这个parcel以后绝对要成为主流的样子啊，赶紧用起来。

使用：

下载： git clone https://github.com/liulinqiang121/parcel-vue

安装模块： yarn 或者yarn install

运行： yarn run start

//特别要说明的是 parcel的组件拆分，直接支持es6的import()，所已我使用的是import();与webpack的require.ensure()起到相同的效果。
