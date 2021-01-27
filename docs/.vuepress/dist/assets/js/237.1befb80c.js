(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{593:function(e,n,s){"use strict";s.r(n);var a=s(42),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"实战篇-7-小程序登录授权与-jwt-签发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战篇-7-小程序登录授权与-jwt-签发"}},[e._v("#")]),e._v(" 实战篇 7：小程序登录授权与 JWT 签发")]),e._v(" "),s("p",[e._v("借助于微信小程序自身的第三方登录能力，能够让用户获得更好的应用使用体验，避开了繁琐的注册信息的提交，带来更好的用户交互体验。本小节将介绍微信小程序授权登录的开发流程，最终将小程序的有效登录，创建获取对应的相关用户，签发 JWT。")]),e._v(" "),s("p",[e._v("在小节的核心话题之外，我们还可以学习体会随着项目工程的需求增加，数据库增量迁移 migrate 的过程。")]),e._v(" "),s("p",[e._v("下面是微信小程序登录的官方流程示意图：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/27/1657752198db3025?w=710&h=720&f=jpeg&s=61617",alt:""}})]),e._v(" "),s("p",[e._v("我们以现有的 hapi 后端服务应用为例：")]),e._v(" "),s("p",[e._v("1） 小程序提供自封装的 "),s("code",[e._v("wx.login()")]),e._v(" 方法，帮助前端开发者获取 临时登录凭证 code 值。")]),e._v(" "),s("p",[e._v("2） hapi 后端服务提供一个类似 wxLogin 的接口，接收小程序传来的 code 值，结合小程序申请时的 appid 与 appsecret，一并向微信接口服务器交换回 session_key 与 openid 等。临时登录凭证 code 只能使用一次。会话密钥 session_key 是对用户数据进行加密签名的密钥。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。")]),e._v(" "),s("p",[e._v("3） hapi 后端服务通过 openid 向数据库查询是否已有该 openid 的用户，如果没有，则作为新用户，创建一条该 openid 的 新用户记录。最终获取该 openid 所对应的 user_id，并向小程序签发包涵 user_id 的 JWT。")]),e._v(" "),s("p",[e._v("4） 小程序获取到 JWT 信息后，保存在本地，并在后续的请求中通过 header Authorization=(jwt 值) 的方式与 hapi 后端服务器通信，访问需要身份验证的服务接口。")]),e._v(" "),s("h2",{attrs:{id:"小程序端主要实现细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序端主要实现细节"}},[e._v("#")]),e._v(" 小程序端主要实现细节")]),e._v(" "),s("h3",{attrs:{id:"_1-getuserinfo-获取用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-getuserinfo-获取用户信息"}},[e._v("#")]),e._v(" 1. getUserInfo 获取用户信息")]),e._v(" "),s("p",[e._v('小程序为 button 按钮提供 open-type="getUserInfo" 的获取用户信息的开放能力，并通过 '),s("code",[e._v('bindgetuserinfo="onGotUserInfo"')]),e._v(" 的回调函数定义，来响应返回的用户信息。 按钮被点击后，小程序会自动从微信服务器获取包含 encryptedData，iv，rawData, signature, userInfo 等用户信息的数据存放在 "),s("code",[e._v("detail")]),e._v(" 的字段中，并返回到 "),s("code",[e._v("onGotUserInfo")]),e._v(" 的回调函数。具体参考代码如下：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<view class="page">\n  <button open-type="getUserInfo" bindgetuserinfo="onGotUserInfo">微信登录</button>\n</view>\n\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Page({\n  onGotUserInfo (e) {\n    // e.detail 跟 wx.getUserInfo()获取的用户信息是一样的\n    const { encryptedData, iv, rawData, signature, userInfo } = e.detail;\n  }\n})\n\n")])])]),s("p",[e._v("其中的字段说明:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("encryptedData")]),e._v(": 加密的用户信息，包含 openid 和 unionid。")]),e._v(" "),s("li",[s("code",[e._v("iv")]),e._v(": 对 encryptedData 加密算法的初始向量，解密 encrytedData 时要用到。")]),e._v(" "),s("li",[s("code",[e._v("rawData")]),e._v(": userInfo 的 json 字符串，不包含 openid 和 unionid。")]),e._v(" "),s("li",[s("code",[e._v("signature")]),e._v(": 使用 sha1 对 rawData + session_key 签名得到的字符串。")]),e._v(" "),s("li",[s("code",[e._v("userInfo")]),e._v(": 用户信息的对象，不包含 openid 和 unionid，供前端使用。")])]),e._v(" "),s("p",[e._v("由于小程序应用的服务端无法获取到微信用户的信息，当服务端需要用户的信息时，只能前端把用户信息传给服务端，为了确保用户信息数据的完整、不被篡改，微信对用户信息数据做了签名和加密处理。encryptedData 是加密的用户信息，signature 是签名的字符串，根据自己后台的需求选择使用 encryptedData 还是 signature。 本文中使用 encryptedData，因为校验 signature 比较简单，在服务端用 sha1 对 rawData + session_key 签名，然后判断跟 signature 是不是相等就可以了，所以本文中不作讲解。")]),e._v(" "),s("p",[e._v("数据签名的官方流程图如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/27/1657752595e923a4?w=830&h=304&f=jpeg&s=26053",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_2-获取临时登录的-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取临时登录的-code"}},[e._v("#")]),e._v(" 2. 获取临时登录的 code")]),e._v(" "),s("p",[e._v("后端需要能够校验 encryptedData, 依赖于 session_key。session_key 的获取，又依赖于 appid + secret + code。临时登录凭证 code 来自于小程序的 "),s("code",[e._v("wx.login()")]),e._v(" 方法。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Page({\n  onGotUserInfo (e) {\n    const { encryptedData, iv } = e.detail;\n    const data = { encryptedData, iv };\n\n    wx.login({\n      timeout: 3000, // timeout 是超时时间，单位是 ms\n      success: res => { // wx.login 接口调成功后会执行 success 回调\n        // res.code 就是登录的凭证, 需要发送给服务端\n        const code = res.code;\n      }\n    })\n  }\n})\n\n")])])]),s("h3",{attrs:{id:"_3-换取登录-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-换取登录-jwt"}},[e._v("#")]),e._v(" 3. 换取登录 JWT")]),e._v(" "),s("p",[e._v("把 code、encryptedData、iv 发送给服务端，换取 JWT，代码如下：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nPage({\n  onGotUserInfo (e) {\n    const { encryptedData, iv } = e.detail;\n\n    wx.login({\n      timeout: 3000,\n      success: res => {\n        const code = res.code;\n\n        wx.request({\n          url: `http://your-api-server/users/wxLogin`, // 我们的服务端地址\n          method: 'POST',\n          data: {\n            code, encryptedData, iv\n          },\n          success: res => {\n            // res.data 为服务端正确登录后签发的 JWT\n            wx.setStorageSync('auth', res.data);\n          }\n        })\n      }\n    })\n  }\n})\n\n")])])]),s("p",[e._v("前端的登录代码实现细节基本就这些。接下来开始实现服务端的接口和逻辑。")]),e._v(" "),s("h2",{attrs:{id:"hapi-服务端实现细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hapi-服务端实现细节"}},[e._v("#")]),e._v(" hapi 服务端实现细节")]),e._v(" "),s("p",[e._v("关键步骤：")]),e._v(" "),s("ol",[s("li",[e._v("使用 migrate 增加一张用户表，并且在 model 中对应创建 users 表结构定义。")]),e._v(" "),s("li",[e._v("增加一个用户登录签发 JWT 的 API 接口路由 POST /users/wxLogin")]),e._v(" "),s("li",[e._v("通过 "),s("a",{attrs:{href:"https://api.weixin.qq.com/sns/jscode2session",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.weixin.qq.com/sns/jscode2session"),s("OutboundLink")],1),e._v(" 换取 openid 和 session_key。")]),e._v(" "),s("li",[e._v("通过 openid 决定是否创建新用户，并获取数据库表中对应的 uesrId。")]),e._v(" "),s("li",[e._v("签发包含 uesrId 的 JWT。")])]),e._v(" "),s("h3",{attrs:{id:"_1-users-表结构定义与迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-users-表结构定义与迁移"}},[e._v("#")]),e._v(" 1. users 表结构定义与迁移")]),e._v(" "),s("p",[e._v("users 表结构定义")]),e._v(" "),s("p",[e._v("字段")]),e._v(" "),s("p",[e._v("字段类型")]),e._v(" "),s("p",[e._v("字段说明")]),e._v(" "),s("p",[e._v("id")]),e._v(" "),s("p",[e._v("integer")]),e._v(" "),s("p",[e._v("用户的 ID，自增")]),e._v(" "),s("p",[e._v("nick_name")]),e._v(" "),s("p",[e._v("varchar(255)")]),e._v(" "),s("p",[e._v("用户的昵称")]),e._v(" "),s("p",[e._v("avatar_url")]),e._v(" "),s("p",[e._v("varchar(255)")]),e._v(" "),s("p",[e._v("用户头像")]),e._v(" "),s("p",[e._v("gender")]),e._v(" "),s("p",[e._v("integer")]),e._v(" "),s("p",[e._v("用户的性别")]),e._v(" "),s("p",[e._v("open_id")]),e._v(" "),s("p",[e._v("varchar(255)")]),e._v(" "),s("p",[e._v("用户 open_id")]),e._v(" "),s("p",[e._v("session_key")]),e._v(" "),s("p",[e._v("varchar(255)")]),e._v(" "),s("p",[e._v("用户 session_key")]),e._v(" "),s("p",[e._v("created_at")]),e._v(" "),s("p",[e._v("datetime")]),e._v(" "),s("p",[e._v("记录的创建时间")]),e._v(" "),s("p",[e._v("updated_at")]),e._v(" "),s("p",[e._v("datetime")]),e._v(" "),s("p",[e._v("记录的更新时间")]),e._v(" "),s("p",[e._v("创建 users 表的迁移文件 create-users-table：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ node_modules/.bin/sequelize migration:create --name create-users-table\n\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// migrations/create-users-table.js\nmodule.exports = {\n  up: (queryInterface, Sequelize) => queryInterface.createTable(\n    'users',\n    {\n      id: {\n        type: Sequelize.INTEGER,\n        autoIncrement: true,\n        primaryKey: true,\n      },\n      nick_name: Sequelize.STRING,\n      avatar_url: Sequelize.STRING,\n      gender: Sequelize.INTEGER,\n      open_id: Sequelize.STRING,\n      session_key: Sequelize.STRING,\n      created_at: Sequelize.DATE,\n      updated_at: Sequelize.DATE,\n    },\n  ),\n\n  down: queryInterface => queryInterface.dropTable('users'),\n};\n\n\n")])])]),s("p",[e._v("在 models 中定义 users 表结构:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// models/users.js\n\nmodule.exports = (sequelize, DataTypes) => sequelize.define(\n  'users',\n  {\n    id: {\n      type: DataTypes.INTEGER,\n      primaryKey: true,\n      autoIncrement: true,\n      allowNull: false,\n    },\n    nick_name: DataTypes.STRING,\n    avatar_url: DataTypes.STRING,\n    gender: DataTypes.INTEGER,\n    open_id: DataTypes.STRING,\n    session_key: DataTypes.STRING,\n  },\n  {\n    tableName: 'users',\n  },\n);\n\n\n")])])]),s("p",[e._v("向数据库迁移 users 表:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ node_modules/.bin/sequelize db:migrate\n\n")])])]),s("h3",{attrs:{id:"_2-创建-users-的路由-支持-wxlogin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-users-的路由-支持-wxlogin"}},[e._v("#")]),e._v(" 2. 创建 users 的路由，支持 wxLogin")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("创建接口 POST /users/wxLogin")])]),e._v(" "),s("li",[s("p",[e._v("接收 payload 参数 code, encryptedData, iv")])]),e._v(" "),s("li",[s("p",[e._v("设置此接口不需要通过用户验证 config.auth = false")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// routes/users\n\nconst GROUP_NAME = 'users';\n\nmodule.exports = [\n  {\n    method: 'POST',\n    path: `/${GROUP_NAME}/wxLogin`,\n    handler: async (req, reply) => {\n      reply();\n    },\n    config: {\n      auth: false, // 不需要用户验证\n      tags: ['api', GROUP_NAME], // 注册 swagger 文档\n      validate: {\n        payload: {\n          code: Joi.string().required().description('微信用户登录的临时code'),\n          encryptedData: Joi.string().required().description('微信用户信息encryptedData'),\n          iv: Joi.string().required().description('微信用户信息iv'),\n        },\n      },\n    },\n  },\n]\n\n\n")])])]),s("h3",{attrs:{id:"_3-换取-openid-和-session-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-换取-openid-和-session-key"}},[e._v("#")]),e._v(" 3. 换取 openid 和 session_key")]),e._v(" "),s("p",[e._v("利用微信开放接口 "),s("a",{attrs:{href:"https://api.weixin.qq.com/sns/jscode2session",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.weixin.qq.com/sns/jscode2session"),s("OutboundLink")],1),e._v(" 获取 openid 与 session_key。在 Node.js 服务端使用 axios 插件发送 HTTP 请求。并需要自行申请小程序的 AppID 与 AppSecret。可以用小程序账号登录微信公众平台，在设置 -> 开发设置 -> 开发者 ID 中可以找到 AppID 和 AppSecret。")]),e._v(" "),s("p",[e._v("注意: "),s("em",[e._v("AppID 与 AppSecret 的配置敏感信息，依旧通过 .evn 来配置管理，config/index.js 来中间勾取为宜。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm i axios\n\n")])])]),s("p",[e._v("handler 中的微信 session 接口调用细节:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// routes/users\n\n// ... 省略上文\nconst axios = require('axios');\n\nhandler: async (req, reply) => {\n  const appid = config.wxAppid; // 你的小程序 appid\n  const secret = config.wxSecret; // 你的小程序 appsecret\n  const { code, encryptedData, iv } = req.payload;\n\n  const response = await axios({\n    url: 'https://api.weixin.qq.com/sns/jscode2session',\n    method: 'GET',\n    params: {\n      appid,\n      secret,\n      js_code: code,\n      grant_type: 'authorization_code',\n    }\n  });\n  // response 中返回 openid 与 session_key\n  const { openid, session_key } = response.data;\n  reply();\n}\n// ... 省略下文\n\n\n")])])]),s("h3",{attrs:{id:"_4-通过-openid-换取本地数据库的-user-id-签发-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过-openid-换取本地数据库的-user-id-签发-jwt"}},[e._v("#")]),e._v(" 4. 通过 openid 换取本地数据库的 user_id，签发 JWT")]),e._v(" "),s("p",[e._v("1） 通过 openid 查找 users 表中是否已有用户，没有则创建一个用户。")]),e._v(" "),s("p",[e._v("2） 封装一个 decryptData 方法，将 encryptedData 的信息，利用 iv，session_key，appid 进行校验与解码，最终获得合法的用户信息。")]),e._v(" "),s("p",[e._v("decryptData 的加解密数据算法官方文档，提供多语言示例下载，"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/signature.html#wxchecksessionobject",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击此处链接"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[e._v("3） 将 decryptData 后的用户信息，更新回 users 表。")]),e._v(" "),s("p",[e._v("4） 签发包含 userId 的 JWT。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// utils/decrypted-data.js\n\n// 封装的 decryptData，用于解码小程序的 encryptData\nconst crypto = require('crypto');\n\nconst decryptData = (encryptedData, iv, sessionKey, appid) => {\n  // base64 decode\n  const encryptedDataNew = Buffer.from(encryptedData, 'base64');\n  const sessionKeyNew = Buffer.from(sessionKey, 'base64');\n  const ivNew = Buffer.from(iv, 'base64');\n\n  let decoded = '';\n  try {\n    // 解密，使用的算法是 aes-128-cbc\n    const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKeyNew, ivNew);\n    // 设置自动 padding 为 true，删除填充补位\n    decipher.setAutoPadding(true);\n    decoded = decipher.update(encryptedDataNew, 'binary', 'utf8');\n    decoded += decipher.final('utf8');\n    decoded = JSON.parse(decoded);\n    // decoded 是解密后的用户信息\n  } catch (err) {\n    throw new Error('Illegal Buffer');\n  }\n\n  // 解密后的用户数据中会有一个 watermark 属性，这个属性中包含这个小程序的 appid 和时间戳，下面是校验 appid\n  if (decoded.watermark.appid !== appid) {\n    throw new Error('Illegal Buffer');\n  }\n\n  // 返回解密后的用户数据\n  return decoded;\n};\n\nmodule.exports = decryptData;\n\n\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// routes/users\n\n// ... 忽略上文\nconst models = require(\"../models\");\nconst GROUP_NAME = 'user';\nconst JWT = require('jsonwebtoken');\nconst decryptData = require('../utils/decrypt-data');\n\nhandler: async (req, reply) => {\n  // ... 忽略通过微信接口获取 openid 与 session_key 的上文\n  const { openid, session_key: sessionKey } = response.data;\n\n  // 基于 openid 查找或创建一个用户\n  const user = await models.users.findOrCreate({\n    where: { open_id: openid },\n  });\n\n  // decrypt 解码用户信息\n  const userInfo = decryptData(encryptedData, iv, sessionKey, appid);\n  // 更新 user 表中的用户的资料信息\n  await models.users.update({\n    nick_name: userInfo.nickName,\n    gender: userInfo.gender,\n    avatar_url: userInfo.avatarUrl,\n    open_id: openid,\n    session_key: sessionKey,\n  }, {\n    where: { open_id: openid },\n  });\n\n  // 签发 jwt\n  const generateJWT = (jwtInfo) => {\n    const payload = {\n      userId: jwtInfo.userId,\n      exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,\n    };\n    return JWT.sign(payload, config.jwtSecret);\n  };\n  reply(generateJWT({\n    userId: user[0].id,\n  }));\n}\n// ... 忽略下文\n\n")])])]),s("p",[e._v("至此，用于小程序的用户登录验证的 JWT 签发逻辑已完成。")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("GitHub 参考代码")]),e._v(" "),s("a",{attrs:{href:"https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter11/hapi-tutorial-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("chapter11/hapi-tutorial-1"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),s("p",[e._v("关键词：小程序登录，数据库增量迁移")]),e._v(" "),s("p",[e._v("通过本小节的实战学习，相信同学们对微信小程序的用户授权登录与用户表如何无缝创建新用户有了一个具体的认识。")]),e._v(" "),s("p",[e._v("而与第三方的系统做接入整合，也常常伴随着大量的对接规范要小心翼翼地遵循，比如小程序的登录接入。这方面的首次接触没有捷径，可以考虑自行抽象封装一个小程序授权登录的组件，来降低日后新系统接入时的复杂度。")]),e._v(" "),s("p",[e._v("思考：如果系统试图加入 QQ 第三方授权登录，要怎样来实现？与小程序授权登录是否相似？")]),e._v(" "),s("p",[s("strong",[e._v("本小节参考代码汇总")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter11/hapi-tutorial-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("chapter11/hapi-tutorial-1"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);