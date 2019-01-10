
## 预览

![豆瓣电影演示](https://github.com/zce/weapp-demo/raw/tutorial/preview.gif)



## 完整特性

- 开发阶段与生产阶段分离。
- 自动化生成新页面所需文件并添加到配置中。
- 以`Standard Code Style`校验全部的`js`和`json`文件。
- 开发阶段`json`配置文件可以有注释，方便备注。
- 代码中集成部分文档内容，减少查文档的时间。
- 开发阶段可以使用`less`完成样式编码，原因你懂得~ （如果你了解这些，当然可以支持`sass`等其他预处理样式）。
- 借助`babel`自动进行`ES2015`特性转换，放心使用新特性。
- 开发阶段用`xml`文件后缀取代`wxml`后缀，避免在开发工具中配置代码高亮。
- Source Map
- Travis CI

## 操作步骤

### for English

[README.en.md](./README.en.md)

### 将项目克隆到本地

用到了`GIT`环境，没有环境的话请自行解决吧。

```shell
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
$ git clone git@github.com:TencentIT/weixinPro.git

# 进入指定的文件夹
$ cd [project-name]
```

### 安装项目`NPM`依赖

用到了`Node`环境，没有环境的话也请自行解决吧。

```shell
$ npm install
```


## 使用说明

### for English

[README.en.md](./README.en.md)

### 开发阶段

执行如下命令

```shell
# 启动监视
$ npm run watch
```

通过`微信Web开放者工具`打开项目根目录下`dist`文件夹，预览~

- 打开`微信Web开放者工具`，选择`添加项目`，填写或选择相应信息
  + AppID：点击右下角`无AppID`（个人用户可以申请）
  + 项目名称：随便填写，因为不涉及到部署，所以无所谓
  + 项目目录：选择项目根目录下`dist`文件夹
  + 点击`添加项目`
- 可以通过任意开发工具完成`src`下的编码，`gulp`会监视项目根目录下`src`文件夹，当文件变化自动编译
- 注意在微信公众平台后台添加域名白名单设置或者关闭开发阶段对请求域名安全的校验
  + https://api.map.baidu.com
  + https://douban.uieee.com

#### 创建新页面

执行如下命令

```shell
# 启动生成器
$ npm run generate
? Input the page name (index) [page-name]
? Do you need a configuration file (y/N) N
? Select a style framework (Use arrow keys)
> less
# 自动生成...
```

由于微信小程序的每一个页面有特定的结构，新建工作比较繁琐。可以通过此任务减少操作。

### 生产阶段

执行如下命令

```shell
# 启动编译
$ npm run build
```

生产阶段的代码会经过压缩处理，最终输出到`dist`下。

同样可以通过`微信Web开放者工具`测试。
