(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{631:function(e,t,s){"use strict";s.r(t);var r=s(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"web-ui-之-jobs-页面代码编写与-web-ui-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-ui-之-jobs-页面代码编写与-web-ui-测试"}},[e._v("#")]),e._v(" Web UI 之 Jobs 页面代码编写与 Web UI 测试")]),e._v(" "),s("p",[e._v("规划中大部分的功能与选项都在首页实现，Jobs 中仅仅需要将页面进行拼接并且展示当前不同状态的爬虫数即可，也可以将爬虫调用情况添加到 Jobs 页面中。因为每次查看爬虫运行记录时，如果能够在同一个页面中知晓爬虫调用情况和状态数信息，那就省去了页面切换的麻烦，所以需要把必要的信息放到 Jobs 页面当中。")]),e._v(" "),s("h2",{attrs:{id:"界面重构-jobs-页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面重构-jobs-页"}},[e._v("#")]),e._v(" 界面重构-Jobs 页")]),e._v(" "),s("p",[e._v("第一步就是要将 Jobs 类的父类换成 CustomResource：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("class Jobs(CustomResource):\n\n")])])]),s("p",[e._v("第二步则需要确定 Jobs 中哪些方法需要保留、哪些需要舍弃，回顾之前对 Jobs 的剖析：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("A、cancel 与 header - 它设定取消按钮以及爬虫运行信息的列名\nB、gen_css - 设定 css 样式，为爬虫日志表格设定 css 样式\nC、prep_row - 生成爬虫日志表格的表头数据\nD、prep_tab_pending - pending 状态爬虫列表\nE、prep_tab_running - 正在运行的爬虫列表\nF、prep_tab_finished - 运行完毕的爬虫列表及日志记录\nG、prep_table - 生成爬虫运行信息表\nH、render - 页面渲染\n\n")])])]),s("h2",{attrs:{id:"界面重构-jobs-页之表格样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面重构-jobs-页之表格样式"}},[e._v("#")]),e._v(" 界面重构-Jobs 页之表格样式")]),e._v(" "),s("p",[e._v("因为要对爬虫运行记录表格样式进行调整，所以不需要用到的有 B 选项，其它的都需要保留。参考"),s("code",[e._v("prep_row")]),e._v("方法，新建"),s("code",[e._v("prep_header")]),e._v("对列表的表头样式进行调整：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("def prep_header(self, cells):\n    \"\"\" 构造表头并加上html标签 \"\"\"\n    if not isinstance(cells, dict):\n        assert len(cells) == len(self.header_cols)\n    else:\n        cells = [cells.get(k) for k in self.header_cols]\n    cells = ['<th style=\"font-size: 16px;\">%s</th>' % ('' if c is None else c) for c in cells]\n    return '<tr>%s</tr>' % ''.join(cells)\n\n")])])]),s("p",[e._v("也就是这部分：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/16676a79750ba18f?w=1447&h=731&f=png&s=114425",alt:""}})]),e._v(" "),s("p",[e._v("并且在 render 中调用：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("table_header = self.prep_header(self.header_cols)\n\n")])])]),s("h2",{attrs:{id:"界面重构-jobs-页之可重用资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面重构-jobs-页之可重用资源"}},[e._v("#")]),e._v(" 界面重构-Jobs 页之可重用资源")]),e._v(" "),s("p",[e._v("之前在重构首页的时候已经编写了非常多的功能，这里只需要拿来使用即可，在 render 中:")]),e._v(" "),s("blockquote",[s("p",[e._v("为了提高文章可读性并保持逻辑清晰，在文章中"),s("code",[e._v("+")]),e._v("代表"),s("code",[e._v("新增的代码")]),e._v("，"),s("code",[e._v("-")]),e._v("代表"),s("code",[e._v("删除的代码")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('   def render_GET(self, request):\n    table_header = self.prep_header(self.header_cols)\n\n    +pending, running, finished, average, shortest, \\\n    +longest, projects, spiders, ranks, dps, \\\n    +lpn, lsn, invoked_spider, un_invoked_spider, most_record = features(self=self)\n\n    +hosts = host_information(request)  # host以及auth信息\n    +home_uri, jobs_uri, feature_uri, documents_uri = make_urls(hosts)\n    +nav = """\n    <ul>\n    <li>\n    <a href={home_uri} class="item" id="home">\n    <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"> <polygon fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="12,2 3,10 3,23 9,23 9,16 15,16 15,23 21,23 21,10 " stroke-linejoin="miter"></polygon> </g></svg>\n    Home</a>\n    </li>\n    <li>\n    <a href={jobs_uri} class="selected" id="jobs">\n    <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"> <polyline data-color="color-2" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 16,7 16,2 8,2 8,7 " stroke-linejoin="miter"></polyline> <rect x="1" y="7" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="22" height="15" stroke-linejoin="miter"></rect> <line fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="5" y1="7" x2="5" y2="22" stroke-linejoin="miter"></line> <line fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="19" y1="7" x2="19" y2="22" stroke-linejoin="miter"></line> </g></svg>\n    Jobs</a>\n    </li>\n    <li>\n    <a href={feature_uri} class="item" id="feature">\n    <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"> <rect x="1" y="1" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="22" height="22" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="5" y="5" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="14" y="5" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="5" y="14" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="14" y="14" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> </g></svg>\n    ArtDoc</a>\n    </li>\n    </ul>\n        """.format(home_uri=home_uri, jobs_uri=jobs_uri, feature_uri=feature_uri, documents_uri=documents_uri)\n    +header = HEADER_HTML.format(style_css=STYLE_CSS, reset_css=RESET_CSS, nav=nav)\n    +most_spider, most_num = most_record\n    +feature_uri = feature_uri\n\n')])])]),s("h2",{attrs:{id:"界面重构-jobs-页之页面拼接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面重构-jobs-页之页面拼接"}},[e._v("#")]),e._v(" 界面重构-Jobs 页之页面拼接")]),e._v(" "),s("p",[e._v("完成上述步骤后，将所用到的页面拼接起来，并转成 bytes 返回：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    +jobs = JOBS_HTML.format(table_header=table_header, tables=self.prep_table(), most_spider=most_spider, most_num=most_num, invoked_spider=",".join(invoked_spider),\n    un_invoked_spider=",".join(un_invoked_spider), feature_uri=feature_uri)\n    +footers = FOOTERS_HTML\n    +self.content = str_to_bytes(header + jobs + footers)  # return value need bytes\n    return self.content\n\n')])])]),s("p",[e._v("Jobs 页面所有步骤都完成了？")]),e._v(" "),s("p",[e._v("还没有，jobs.html 中的 format 占位符还未填写呢，打开 jobs.html 按照页面需求将占位符填写到合适的位置，比如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<div class="sdm-top">\n    <p><span>被调用过的爬虫 : </span><span>{invoked_spider}</span></p>\n    <p><span>被调用次数最多 : </span><span>{most_spider},{most_num}次</span></p>\n    <p><span>未被调用的爬虫 : </span><span>{un_invoked_spider}</span></p>\n</div>\n\n')])])]),s("ul",[s("li",[s("p",[s("code",[e._v("website.py")]),e._v(" 中所有代码为："),s("a",{attrs:{href:"https://github.com/dequinns/ScrapydArt/blob/master/scrapydart/website.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("website.py"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("jobs.html 的所有代码为："),s("a",{attrs:{href:"https://github.com/dequinns/ScrapydArt/blob/master/scrapydart/template/jobs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("jobs.html"),s("OutboundLink")],1)])])]),e._v(" "),s("h2",{attrs:{id:"界面重构-静态页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面重构-静态页"}},[e._v("#")]),e._v(" 界面重构-静态页")]),e._v(" "),s("p",[e._v("这里还准备了一个静态页，其中只是对 ScrapydArt 做了一些简单介绍。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/16676c419da7492a?w=1903&h=700&f=png&s=226099",alt:""}})]),e._v(" "),s("blockquote",[s("p",[e._v("通过添加静态页来学习如何给 Scrapyd 添加视图及路由映射。")])]),e._v(" "),s("p",[e._v("在 website.py 中新建类 Feature:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('class Feature(CustomResource):\n\n    def __init__(self, root, local_items):\n        resource.Resource.__init__(self)\n        self.root = root\n        self.local_items = local_items\n\n    @decorator_auth\n    def render_GET(self, request):\n        hosts = host_information(request)  # host以及auth信息\n        home_uri, jobs_uri, feature_uri, documents_uri = make_urls(hosts)\n        nav = """\n                <ul>\n                <li>\n                <a href={home_uri} class="item" id="home">\n                <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"> <polygon fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="12,2 3,10 3,23 9,23 9,16 15,16 15,23 21,23 21,10 " stroke-linejoin="miter"></polygon> </g></svg>\n                Home</a>\n                </li>\n                <li>\n                <a href={jobs_uri} class="item" id="jobs">\n                <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"> <polyline data-color="color-2" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 16,7 16,2 8,2 8,7 " stroke-linejoin="miter"></polyline> <rect x="1" y="7" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="22" height="15" stroke-linejoin="miter"></rect> <line fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="5" y1="7" x2="5" y2="22" stroke-linejoin="miter"></line> <line fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="19" y1="7" x2="19" y2="22" stroke-linejoin="miter"></line> </g></svg>\n                Jobs</a>\n                </li>\n                <li>\n                <a href={feature_uri} class="selected" id="feature">\n                <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"> <rect x="1" y="1" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="22" height="22" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="5" y="5" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="14" y="5" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="5" y="14" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> <rect data-color="color-2" x="14" y="14" fill="none" stroke="#4a5261" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" width="5" height="5" stroke-linejoin="miter"></rect> </g></svg>\n                ArtDoc</a>\n                </li>\n                </ul>\n                    """.format(home_uri=home_uri, jobs_uri=jobs_uri, feature_uri=feature_uri,\n                               documents_uri=documents_uri)\n        header = HEADER_HTML.format(style_css=STYLE_CSS, reset_css=RESET_CSS, nav=nav)\n\n        feature = FEATURE_HTML.format()\n        footers = FOOTERS_HTML\n        self.content = str_to_bytes(header + feature + footers)  # return value need bytes\n        return self.content\n\n')])])]),s("p",[e._v("将"),s("code",[e._v("url")]),e._v("、"),s("code",[e._v("header.html")]),e._v("、"),s("code",[e._v("feature.html")]),e._v("、"),s("code",[e._v("footer.html")]),e._v("进行拼接并转码返回即可。")]),e._v(" "),s("p",[e._v("这样可以在浏览器中访问到它了么？")]),e._v(" "),s("p",[e._v("那是不行的，浏览器给你的提示是未找到该资源。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/16676bbcf2be3a91?w=407&h=136&f=png&s=5951",alt:""}})]),e._v(" "),s("p",[e._v("回顾一下之前对视图类的剖析，其中负责路由的是 "),s("code",[e._v("website.py")]),e._v(" 中的 Root 类")]),e._v(" "),s("blockquote",[s("p",[e._v("Root - 根据配置文件初始化项目并设置路由映射关系。")])]),e._v(" "),s("p",[e._v("所以这里需要在 Root 类的"),s("code",[e._v("__init__")]),e._v("函数中通过 putchild 为 Feature 类添加路由映射关系"),s("code",[e._v("self.putChild(b'feature', Feature(self, local_items))")]),e._v("：")]),e._v(" "),s("blockquote",[s("p",[e._v("为了提高文章可读性并保持逻辑清晰，在文章中"),s("code",[e._v("+")]),e._v("代表"),s("code",[e._v("新增的代码")]),e._v("，"),s("code",[e._v("-")]),e._v("代表"),s("code",[e._v("删除的代码")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" def __init__(self, config, app):\n    resource.Resource.__init__(self)\n    ...\n    self.putChild(b'jobs', Jobs(self, local_items))\n    +self.putChild(b'feature', Feature(self, local_items))\n    services = config.items('services', ())\n\n")])])]),s("p",[e._v("保存后，重新启动项目，对 Web 界面重构的所有功能进行测试。")]),e._v(" "),s("h2",{attrs:{id:"web-重构后的测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-重构后的测试"}},[e._v("#")]),e._v(" Web 重构后的测试")]),e._v(" "),s("p",[e._v("首先在配置文件中加上用户名和密码的配置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("auth_username = qu\nauth_password = qus7\n\n")])])]),s("p",[e._v("然后通过 scrapyd_run.py 启动项目，先测试未携带用户名和密码参数的请求：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/1667684b9c245f37?w=1723&h=828&f=gif&s=135927",alt:""}})]),e._v(" "),s("p",[e._v("得到的是未取得授权的提示")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"status": "error", "message": "You have not obtained the authorization."}\n\n')])])]),s("p",[e._v("再试一下携带用户名和密码参数，但值与配置文件不符：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/1667686c881256a8?w=1730&h=823&f=gif&s=57643",alt:""}})]),e._v(" "),s("p",[e._v("得到的是用户名或密码不正确的提示")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"status": "error", "message": "username or password you entered is incorrect. Please re request"}\n\n')])])]),s("p",[e._v("再试试正确的用户名和密码：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/166768a8db3253c7?w=1711&h=808&f=gif&s=478998",alt:""}})]),e._v(" "),s("p",[e._v("最后对各个 URL 的跳转进行测试，看看是否能够正常跳转：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/15/16676c7a79d9ca9b?w=1574&h=828&f=gif&s=1783851",alt:""}})]),e._v(" "),s("p",[e._v("通过上图可以看到，首页页面显示效果正确无误、URL 跳转也可以正常跳转、权限验证根据用户请求时传递的用户名和密码与配置文件中的进行比对，比对通过则返回正常的页面，比对失败则给出对应的提示。")])])}),[],!1,null,null,null);t.default=o.exports}}]);