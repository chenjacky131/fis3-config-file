// 合并引入的css，js
/*fis.match('::packager', {
  postpackager: fis.plugin('loader',{// 合并页面里的零碎资源换成一个文件
  	allInOne:{
      js: function (file) {
        //return "/static/js/" + file.filename + "_mi.js";
         return "/static/js/mi.js";//自定义文件的命名方式
      },
      css: function (file) {
       // return "/static/css/" + file.filename + "_mi.css";
       return "/static/css/mi.css";//自定义文件的命名方式
      }  		
  	}
  })
});*/
// 修改静态资源目录
/*fis.match('*.{png,js,css,jpg}', {
  release: '/static/$0'
});*/
// less的编译
fis.match('*.less',{
	parser:fis.plugin('less'),
	rExt:'.css'
});
// scss的编译
fis.match('*.scss',{
	parser:fis.plugin('node-sass'),
	rExt:'.css'
});
// autoprefixer 自动添加css浏览器前缀
fis.match('*.{css,less,scss}', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
});
// 压缩js文件
fis.match('*.{js,jsx,ts,tsx,es6,es}', {
  optimizer: fis.plugin('uglify-js')
});
// 压缩css文件
fis.match('*.{scss,sass,less,css}', {
  optimizer: fis.plugin('clean-css')
});
// png图片压缩
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor',{
  	 type : 'pngquant'
  })
});
// 让所有文件，都使用相对路径（需要安装hook插件：fis3-hook-releative）。 
fis.hook('relative'); 
fis.match('**', { relative: true })
