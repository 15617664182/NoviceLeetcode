
// webpack干什么的：将多个文件打包成一个文件

// 核心概念
/**
 * 1. 入口 entry 打包入口
 * 2. 输出 output  输出文件
 * 3. 模块 Module
 * 4. 加载器 Loader
 * 5. 插件 Plugin
 * */

// 常见loader
/**
 * css方面的loader
 *
 * postcss.loader   主要用来兼容css不同浏览器的语法
 * style.loader     将css注入到html中
 * css.loader       将css打包到js中
 * less.loader      将less样式转为css样式
 * sass.loader      将sass样式转为css样式
 *
 *
 *
 * js方面的loader
 *
 * babel.loader     语法降级 es6 -> es5
 * ts.loader        用于配置项目typescript
 * vue-loader       用于编译vue文件
 * html-loader      将html语法转为js语法
 * file-loader      处理图片类型资源
 * url-loader       处理图片类型资源，与file-loader配合使用，当图片资源小于10kb的时候，会将图片转为base64
 * */

// 常见的插件 plugin

/**
 * html-webpack-plugin  用于将html文件打包到js中
 * extract-text-webpack-plugin 用于将css打包到单独的文件中
 * webpack-dev-server  用于开发环境的打包
 * webpack-merge  用于合并多个配置文件
 * optimize-css-assets-webpack-plugin 用于压缩css文件。
 * */

// 打包优化
/**
 *
 *    -1、 优化loader  通过cache-loader 缓存打包结果 减少再次打包的时间 通过 include/exclude 限制loader的范围  （打包速度）
 *    -2、 通过alias 配置别名 减少模块的路径长度，加快webpack查找速度  （打包速度）
 *    -3、 ParallelUglifyPlugin/happyPack 设置打包进程数 减少打包时间 （多线程打包） （打包速度）
 *    -4、 生产环境关闭 sourceMap（体积）
 *    -5、 uglifyJsPlugin   代码压缩 （体积）
 *
 * */

// imagemin-webpack-plugin 图片压缩
