# 微信小程序
一个用于存储账号和密码的小程序，使用微信小程序云开发，免服务器。

### 功能介绍
小程序支持云端存储和本地存储，云端存储数据支持SM4和AES加密，同时支持用户管理，以便授权其他人使用云端存储权限。

### 部署
1. 注册一个小程序
2. 在project.config.json里补充小程序的appid
3. 开通云开发，在miniprogram/env.js里填写云环境ID
4. 在云开发后台创建users，accounts和applies集合
5. 在cloudfunctions/users/目录下运行 `npm i`(运行前需要安装node和npm)
6. 运行测试后，在users集合里对应自己的账号信息记录中手动添加role字段，值为admin
7. 提交审核！
