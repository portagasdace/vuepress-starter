(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{712:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"导读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导读"}},[t._v("#")]),t._v(" 导读")]),t._v(" "),a("p",[t._v("本节标题：「建造毛坯」- SEO TDK 支持")]),t._v(" "),a("p",[t._v("本节主旨：解决 SPA 的不足，两种方式实现 TDK 直出，达到 "),a("code",[t._v("SEO")]),t._v(" 优化的目的")]),t._v(" "),a("p",[t._v("本节配套代码：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo0"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo1"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),a("p",[t._v("这一节我们来解决一个小问题，在我们小册开篇的时候也着重提到过，那就网页的 "),a("code",[t._v("SEO")]),t._v(",主要是指页面的 "),a("code",[t._v("TDK")]),t._v("信息。")]),t._v(" "),a("p",[t._v("上一节我们已经让页面内有了数据，"),a("code",[t._v("SEO")]),t._v("优化除了需要基础数据外，"),a("code",[t._v("TDK")]),t._v("也是非常重要的,否则搜索引擎很难知道你这页面是干啥的。")]),t._v(" "),a("p",[a("code",[t._v("TDK")])]),t._v(" "),a("ul",[a("li",[t._v("title 当前页面的标题")]),t._v(" "),a("li",[t._v("description 当前页面的描述")]),t._v(" "),a("li",[t._v("keywords 当前页面的关键词")])]),t._v(" "),a("p",[t._v("可以参考京东官网的 "),a("code",[t._v("tdk")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/31/16f5ad71d42cf3fd?w=1317&h=195&f=png&s=93959",alt:""}})]),t._v(" "),a("p",[t._v("另外也可以看下"),a("code",[t._v("弹个车")]),t._v("的 "),a("code",[t._v("tdk")]),t._v("，弹个车整站就是个单页应用，很早之前没有"),a("code",[t._v("tdk")]),t._v(",现在已经直出了"),a("code",[t._v("tdk")]),t._v("。")]),t._v(" "),a("p",[t._v("搜索引擎爬虫会抓取页面内容同时根据上面三个关键内容确定网页的内容和权重。")]),t._v(" "),a("p",[t._v("如何实现像上面这样的 "),a("code",[t._v("tdk")]),t._v(" 信息直出效果呢？")]),t._v(" "),a("p",[t._v("我们已经实现了组件直出，增加"),a("code",[t._v("tdk")]),t._v(" 直出是不是太简单了。")]),t._v(" "),a("h1",{attrs:{id:"简单粗暴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单粗暴"}},[t._v("#")]),t._v(" 简单粗暴")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("react-srr")]),t._v("中间件里加入相关的 "),a("code",[t._v("meta")]),t._v(" 标记")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// /src/server/middlewares/react-ssr.js\n\n***\nctx.body=`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    + <title>my react ssr 标题</title>\n    + <meta name="keywords" content="关键词内容" />\n    + <meta name="description" content="描述内容" />\n</head>\n<body>\n    <div id="root">\n       ${html}\n    </div>\n    <textarea id="ssrTextInitData" style="display:none;">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n<script type="text/javascript"  src="/index.js"><\/script>\n`;\n***\n\n\n')])])]),a("p",[t._v("以上代码便可以为所有的页面添加 "),a("code",[t._v("tdk")]),t._v(" 信息，简单粗暴，但是意义不大。")]),t._v(" "),a("p",[t._v("一个网站有很多页面，每个页面的信息肯是不同的，所以我们需要动态的设置，让每个页面的 "),a("code",[t._v("tdk")]),t._v(" 可以 不同。")]),t._v(" "),a("h1",{attrs:{id:"动态-tdk-数据预取中做手脚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态-tdk-数据预取中做手脚"}},[t._v("#")]),t._v(" 动态 tdk - 数据预取中做手脚")]),t._v(" "),a("p",[t._v("可以从我们的数据预取方法返回当前页面的 "),a("code",[t._v("tdk")]),t._v(" 信息 ，服务端得到数据后可直出到页面，同时浏览器端在"),a("code",[t._v("componentDidMount")]),t._v("生命周期内通过 "),a("code",[t._v("DOM")]),t._v(" 操作 修改当前页面的"),a("code",[t._v("title")]),t._v("信息,来避免单页跳转时 "),a("code",[t._v("title")]),t._v(" 不变的问题。")]),t._v(" "),a("p",[t._v("在数据预取中返回 "),a("code",[t._v("tdk")]),t._v("还有一个好处，就是可以在预取方法内利用当前的数据来组织 "),a("code",[t._v("tdk")]),t._v(",让每个页面的 "),a("code",[t._v("tdk")]),t._v(" 不同。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("***\n //数据预取方法\n static async  getInitialProps() {\n        //模拟数据请求方法\n        const fetchData=()=>{\n            return new Promise(resolve=>{\n                setTimeout(() => {\n                    resolve({\n                        code:0,\n                        data: tempData\n                    })\n                }, 100);\n            })\n        }\n\n        let res = await fetchData();\n        \n        — return res;\n        + return {\n            fetchData:res,\n            page:\n            {\n                tdk:{\n                    title:'首页',\n                    keywords:'前端技术江湖',\n                    description:'前端技术江湖'\n                }\n            }\n        }\n    }\n***\n\n")])])]),a("h2",{attrs:{id:"组件内需要的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件内需要的处理"}},[t._v("#")]),t._v(" 组件内需要的处理")]),t._v(" "),a("p",[a("code",[t._v("componentDidMount")]),t._v("内通过 "),a("code",[t._v("DOM")]),t._v("操作 设置页面标题，防止页面切换的时候标题不更新。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" componentDidMount(){\n        let {tdk} =this.state.page;\n        if(tdk){\n            document.title=tdk.title;\n        }\n        \n         if(!this.state.fetchData){\n            //如果没有数据，则进行数据请求\n            Index.getInitialProps().then(res=>{\n                this.setState({\n                    fetchData:res.fetchData||[],\n                    page:res.page\n                });\n                //重设页面 title\n                document.title = res.page.tdk.title;\n            })\n        }\n        \n    }\n\n")])])]),a("h2",{attrs:{id:"服务端获取-tdk-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端获取-tdk-信息"}},[t._v("#")]),t._v(" 服务端获取 tdk 信息")]),t._v(" "),a("p",[t._v("服务端代码调整,我们可以直接从数据预取的方法里得到页面的 "),a("code",[t._v("tdk")]),t._v(" 信息，所以可以很方便的直出到页面内。")]),t._v(" "),a("p",[t._v("获取 "),a("code",[t._v("tdk")]),t._v(" 信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//  /src/server/middlewares/react-ssr.js\n\n//...\n let { page } = fetchResult || {};\n    let tdk = {\n        title: \'默认标题\',\n        keywords: \'默认关键词\',\n        description: \'默认描述\'};\n\n    if(page && page.tdk){\n        tdk=page.tdk;\n    }\n//...\n\nctx.body=`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    + <title>${tdk.title}</title>\n    + <meta name="keywords" content="${tdk.keywords}" />\n    + <meta name="description" content="${tdk.description}" />\n</head>\n<body>\n    <div id="root">\n       ${html}\n    </div>\n    <textarea id="ssrTextInitData" style="display:none;">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n<script type="text/javascript"  src="//localhost:9002/index.js"><\/script>\n`;\n\n//...\n\n')])])]),a("p",[t._v("上面代码将 "),a("code",[t._v("tdk")]),t._v(" 内容和 "),a("code",[t._v("html")]),t._v(" 内容一同返回给浏览器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/18/16f16fc9425a579c?w=1324&h=320&f=png&s=87838",alt:""}})]),t._v(" "),a("h1",{attrs:{id:"动态-tdk-使用轮子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态-tdk-使用轮子"}},[t._v("#")]),t._v(" 动态 tdk - 使用轮子")]),t._v(" "),a("p",[t._v("此方法是方法1的改造，"),a("code",[t._v("tdk")]),t._v("数据 依然从"),a("code",[t._v("getInitialProps")]),t._v("方法内返回。")]),t._v(" "),a("p",[t._v("方法1的实现方式比较传统，虽然思路较容易理解，但是代码涉及的部分较多，有些繁琐，效率不高，且容易出错。")]),t._v(" "),a("p",[t._v("所以这里我们结合现有的轮子来完成这个功能，该用轮子用轮子，毕竟轮子可以帮助我们提高一些效率,而且功能更丰富。")]),t._v(" "),a("h2",{attrs:{id:"react-helmet-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-helmet-组件"}},[t._v("#")]),t._v(" react-helmet 组件")]),t._v(" "),a("p",[t._v("该组件可以帮助你管理和定制你的页面"),a("code",[t._v("title")]),t._v("以及 "),a("code",[t._v("meta")]),t._v(" 信息，支持服务端和客户端渲染。")]),t._v(" "),a("ul",[a("li",[t._v("安装")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i react-helmet\n\n")])])]),a("h2",{attrs:{id:"客户端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端使用"}},[t._v("#")]),t._v(" 客户端使用")]),t._v(" "),a("p",[t._v("组件在浏览器端渲染后会自动完成 "),a("code",[t._v("DOM")]),t._v(" 操作，无需手动操作。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//src/client/pages/index/index.js\n\n+ import { Helmet } from \'react-helmet\';\n\n //....\n render() {\n        //渲染数据\n         const {tdk={}} = this.state.page || {};\n        \n       return <div>\n        <Helmet>\n                <title>{tdk.title}</title>\n                <meta name="description" content={tdk.description}/>\n                <meta name="keywords" content={tdk.keywords}/>\n        </Helmet>\n        首页</div>\n    }\n\n\n')])])]),a("h2",{attrs:{id:"服务端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端使用"}},[t._v("#")]),t._v(" 服务端使用")]),t._v(" "),a("p",[t._v("可以直接得到组件的"),a("code",[t._v("html")]),t._v(" 内容，更方便的直出到客户端。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// /src/server/middlewares/react-ssr.js\n\n+ import { Helmet } from \'react-helmet\';\n\n//....\n\n//得到组件的序列化数据\n+ const helmet = Helmet.renderStatic();\n\nctx.body=`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    + ${helmet.title.toString()} //直出到客户端\n    + ${helmet.meta.toString()}\n    <meta name="keywords" content="${tdk.keywords}" />\n    <meta name="description" content="${tdk.description}" />\n</head>\n//....\n</html>\n</body>\n<script type="text/javascript"  src="/index.js"><\/script>\n`;\n\n***\n\n\n')])])]),a("p",[a("code",[t._v("react-helmet")]),t._v(" 帮我们完成了所需的 "),a("code",[t._v("dom")]),t._v(" 操作，方便快捷，同时也减少了错误。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/2/16f66d68769beb66?w=500&h=375&f=png&s=80089",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/2/16f66d65c2208b75?w=500&h=375&f=png&s=19981",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"本节代码已上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节代码已上传"}},[t._v("#")]),t._v(" 本节代码已上传")]),t._v(" "),a("p",[t._v("方法1")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo0"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("方法2")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-seo1"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("感谢你的阅读。")]),t._v(" "),a("p",[t._v("如果有问题欢迎留言，也欢迎在留言区留下你的想法和思考。")])])}),[],!1,null,null,null);e.default=s.exports}}]);