(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{518:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动效开发-5-svg-动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动效开发-5-svg-动画"}},[t._v("#")]),t._v(" 动效开发 5：SVG 动画")]),t._v(" "),a("p",[t._v("CSS3 动画已然足够强大，不过还是有一些它做不到的地方，例如轨迹（路径）动画的实现。配合 SVG，可以让 Web 动效有更多的可能性。")]),t._v(" "),a("h2",{attrs:{id:"案例实战-实现一个购物袋的-loading-动效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例实战-实现一个购物袋的-loading-动效"}},[t._v("#")]),t._v(" 案例实战 - 实现一个购物袋的 loading 动效")]),t._v(" "),a("p",[t._v("下面以一个购物袋的 loading 动效为示例，带领大家上手 SVG 动画。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be0fc40cc3301?w=301&h=233&f=gif&s=60669",alt:"效果"}})]),t._v(" "),a("p",[t._v("其中旋转通过 CSS 来完成，但是旋转之后圆弧缩短变成笑脸的嘴巴需要借助 SVG 来实现。")]),t._v(" "),a("h3",{attrs:{id:"步骤-1-声明-svg-视窗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-声明-svg-视窗"}},[t._v("#")]),t._v(" 步骤 1 - 声明 SVG 视窗")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<svg width="100" height=“100”></svg>\n\n')])])]),a("p",[t._v("指定一个宽高都为 100 像素的区域，"),a("code",[t._v('width="100"')]),t._v(" 和 "),a("code",[t._v('width="100px"')]),t._v(" 是等价的，当然也可以使用其他的合法单位，例如 cm、mm、em 等。")]),t._v(" "),a("p",[t._v("阅读器会设置一个默认的坐标系统，见下图：左上角为原点，其中水平（x）坐标向右递增，垂直（y）坐标向下递增。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be10cc3f5fc0e?w=359&h=276&f=png&s=8037",alt:"坐标系统"}})]),t._v(" "),a("p",[t._v("在没有指定的情况下，所有数值的默认单位都是像素。")]),t._v(" "),a("h3",{attrs:{id:"步骤-2-绘制购物袋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-绘制购物袋"}},[t._v("#")]),t._v(" 步骤 2 - 绘制购物袋")]),t._v(" "),a("p",[t._v("购物袋由两个部分组成，先画下面的主体：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<path d="M 20 40 L 80 40 L 80 90 A 10 10 90 0 1 70 100 L 30 100 A 10 10 90 0 1 20 90" style="fill: #e9e8ee;" />\n\n')])])]),a("p",[t._v("任何形状都可以使用路径元素画出，描述轮廓的数据放在它的 "),a("code",[t._v("d")]),t._v(" 属性中。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("样式中的 "),a("code",[t._v("fill")]),t._v(" 用来设置填充色")])]),t._v(" "),a("li",[a("p",[t._v("路径数据由命令和坐标构成")]),t._v(" "),a("p",[t._v("指令")]),t._v(" "),a("p",[t._v("说明")]),t._v(" "),a("p",[t._v("M 20 40")]),t._v(" "),a("p",[t._v("表示移动画笔到 (20,40)")]),t._v(" "),a("p",[t._v("L 80 40")]),t._v(" "),a("p",[t._v("表示绘制一条线到 (80, 40)")]),t._v(" "),a("p",[t._v("A 10 10 90 0 1 70 100")]),t._v(" "),a("p",[t._v("绘制一个椭圆弧")])])]),t._v(" "),a("p",[t._v("圆弧命令以字母 A 开始，后面紧跟着 7 个参数，这 7 个参数分别用来表示：")]),t._v(" "),a("ol",[a("li",[t._v("椭圆的 x 半径和 y 半径")]),t._v(" "),a("li",[t._v("椭圆的 x 轴旋转角度")]),t._v(" "),a("li",[t._v("圆弧的角度小于 180 度，为 0；大于或等于 180 度，则为 1")]),t._v(" "),a("li",[t._v("以负角度绘制为 0，否则为 1")]),t._v(" "),a("li",[t._v("终点的x、y坐标")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be16aaf4efee4?w=335&h=289&f=png&s=8581",alt:"图片"}})]),t._v(" "),a("p",[t._v("接下来绘制购物袋上面的部分：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<path d="M 35 40 A 15 15 180 1 1 65 40" style="fill: none; stroke: #e9e8ee; stroke-width: 5;” />\n\n')])])]),a("p",[t._v("上面的部分是一个半圆弧，同样用路径来画出，当然也可以使用基础形状来完成。")]),t._v(" "),a("p",[t._v("样式中的 "),a("code",[t._v("stoke")]),t._v(" 和 "),a("code",[t._v("stroke-width")]),t._v(" 分别用来设置描边色和描边的宽度。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be172ffcd05d7?w=305&h=286&f=png&s=9394",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"步骤-3-绘制眼睛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-绘制眼睛"}},[t._v("#")]),t._v(" 步骤 3 - 绘制眼睛")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<circle cx=“40" cy="60" r="2.5" style="fill: #fff;" />\n<circle cx="60" cy="60" r="2.5" style="fill: #fff;" />\n\n')])])]),a("p",[t._v("使用基础形状，画两个小圆点。四个属性分别是位置坐标、半径和填充颜色。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be17aa1fd5568?w=297&h=287&f=png&s=9577",alt:"绘制眼睛"}})]),t._v(" "),a("h3",{attrs:{id:"步骤-4-绘制嘴巴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-绘制嘴巴"}},[t._v("#")]),t._v(" 步骤 4 - 绘制嘴巴")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<circle cx="50" cy="70" r="15" style="fill: none; stroke: #fff; stroke-width: 5; stroke-linecap: round;transform: rotate(280deg); transform-origin: 50% 50%; stroke-dashoffset: -23; stroke-dasharray: 42, 95;”>\n\n')])])]),a("p",[t._v("嘴巴是一段圆弧，我绘制了一个圆，然后描边了其中的一段，并且做了一个旋转，来让它的角度处于正确的位置。")]),t._v(" "),a("blockquote",[a("ol",[a("li",[a("code",[t._v("stroke-linecap")]),t._v("：用来定义开放路径的终结,可选 "),a("code",[t._v("round|butt|square")])]),t._v(" "),a("li",[a("code",[t._v("stroke-dasharray")]),t._v("：用来创建虚线")]),t._v(" "),a("li",[a("code",[t._v("stroke-dashoffset")]),t._v("：设置虚线位置的起始偏移值，在下一个步骤里，它会和 "),a("code",[t._v("stroke-dasharray")]),t._v(" 一起用来实现动效")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be1948afec303?w=314&h=285&f=png&s=10645",alt:"绘制嘴巴"}})]),t._v(" "),a("h3",{attrs:{id:"步骤-5-给嘴巴部分添加动效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-给嘴巴部分添加动效"}},[t._v("#")]),t._v(" 步骤 5 - 给嘴巴部分添加动效")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@keyframes mouth {\n 0% {\n  transform: rotate(-80deg);\n  stroke-dasharray: 60, 95;\n  stroke-dashoffset: 0;\n }\n 40% {\n  transform: rotate(280deg);\n  stroke-dasharray: 60, 95;\n  stroke-dashoffset: 0;\n }\n 70%, 100% {\n  transform: rotate(280deg);\n  stroke-dashoffset: -23;\n  stroke-dasharray: 42, 95;\n }\n}\n\n")])])]),a("p",[t._v("动画分为两个部分：")]),t._v(" "),a("ol",[a("li",[t._v("圆弧旋转")]),t._v(" "),a("li",[t._v("旋转之后缩短变形")])]),t._v(" "),a("p",[t._v("在一个循环里，最后留有 30% 的时间保持一个停留状态。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be1af387d088a?w=354&h=282&f=gif&s=76664",alt:"嘴巴动画"}})]),t._v(" "),a("h3",{attrs:{id:"步骤-6-给眼睛添加动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-6-给眼睛添加动画"}},[t._v("#")]),t._v(" 步骤 6 - 给眼睛添加动画")]),t._v(" "),a("p",[t._v("两只眼睛都是沿着圆弧运动 ，例如左眼，首先用一个路径来规定它的运动轨迹：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<path id="eyeright" d="M 40 60 A 15 15 180 0 1 60 60" style="fill: none; stroke-width: 0;" />\n\n')])])]),a("p",[t._v("然后使用 "),a("code",[t._v("animateMotion")]),t._v(" 来设置动画：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<circle class="eye" cx="" cy="" r="2.5" style="fill: #fff;">\n <animateMotion\n  dur="0.8s"\n  repeatCount="indefinite"\n  keyPoints="0;0;1;1"\n  keyTimes="0;0.3;0.9;1"\n  calcMode="linear">\n  <mpath xlink:href="#eyeleft"/>\n </animateMotion>\n</circle>\n\n')])])]),a("blockquote",[a("ol",[a("li",[a("code",[t._v("dur")]),t._v("：动画的时间")]),t._v(" "),a("li",[a("code",[t._v("repeatCount")]),t._v("：重复次数")]),t._v(" "),a("li",[a("code",[t._v("keyPoints")]),t._v("：运动路径的关键点")]),t._v(" "),a("li",[a("code",[t._v("timePoints")]),t._v("：时间的关键点")]),t._v(" "),a("li",[a("code",[t._v("calcMode")]),t._v("：控制动画的运动速率的变化，"),a("code",[t._v("discrete")]),t._v(" | "),a("code",[t._v("linear")]),t._v(" | "),a("code",[t._v("paced")]),t._v(" | "),a("code",[t._v("spline")]),t._v(" 四个属性可选")]),t._v(" "),a("li",[a("code",[t._v("mpath")]),t._v("：指定一个外部定义的路径")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be1c4cccfb106?w=354&h=282&f=gif&s=62795",alt:"眼睛动画"}})]),t._v(" "),a("h3",{attrs:{id:"步骤-7-将不同部位的动画组合到一起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-7-将不同部位的动画组合到一起"}},[t._v("#")]),t._v(" 步骤 7 - 将不同部位的动画组合到一起")]),t._v(" "),a("ul",[a("li",[t._v("眼睛的动画是从嘴巴旋转完成开始，到嘴巴变形完成结束，因此和嘴巴的动画一样，设置了四个对应的关键时间点。")]),t._v(" "),a("li",[t._v("为了让衔接更顺畅，眼睛的动画开始比嘴巴变形开始稍微提前了一点点。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be1d04dfd4f3a?w=354&h=282&f=gif&s=101961",alt:"最终效果"}})]),t._v(" "),a("p",[t._v("Bingo！小功告成！"),a("a",{attrs:{href:"http://jdc.jd.com/demo/simba/loading/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看 DEMO"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"初探-smil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初探-smil"}},[t._v("#")]),t._v(" 初探 SMIL")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/REC-smil/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMIL"),a("OutboundLink")],1),t._v(" 的全称为 Synchronized Multimedia Integration Language（同步多媒体集成语言），按照 W3C 规范对 SMIL 的描述，它是一种允许用户在网页上定义可交互多媒体内容的 XML 语言，可结合 XHTML 和 SVG 一起使用来实现网页动态效果。")]),t._v(" "),a("p",[t._v("在上面的案例中，我们使用了一个名为 "),a("code",[t._v("animateMotion")]),t._v(" 的元素来实现眼睛的轨迹动画，其实便属于 SMIL 的知识范畴。")]),t._v(" "),a("p",[t._v("除了 "),a("code",[t._v("animationMotion")]),t._v(" 用于实现轨迹动画之外，SMIL 还提供了另外两个元素来定义父级对象的动画，分别为：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("animate")]),t._v("：用于设置父元素的数值属性（如 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v("、"),a("code",[t._v("color")]),t._v(" 等）的过渡动画")]),t._v(" "),a("li",[a("code",[t._v("animateTransform")]),t._v("：用于设置父元素的 "),a("code",[t._v("transform")]),t._v(" 属性的过渡动画")])]),t._v(" "),a("h3",{attrs:{id:"smil-的兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smil-的兼容性"}},[t._v("#")]),t._v(" SMIL 的兼容性")]),t._v(" "),a("p",[t._v("除了微软系浏览器 及 Opera Mini 外，其他主流浏览器均支持 SMIL。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/14/1622414dfb24f7ff?w=1200&h=257&f=jpeg&s=49621",alt:"SMIL CAN I USE"}})]),t._v(" "),a("p",[a("em",[t._v("（数据来源："),a("a",{attrs:{href:"https://caniuse.com/#search=SMIL",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse.com"),a("OutboundLink")],1),t._v("，截至 2018 年 3 月 14 日）")])]),t._v(" "),a("blockquote",[a("p",[t._v("Chrome 45 版本曾声称准备弃用 SMIL ，但随后撤回了弃用计划。")])]),t._v(" "),a("h3",{attrs:{id:"smil-的一个小例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smil-的一个小例子"}},[t._v("#")]),t._v(" SMIL 的一个小例子")]),t._v(" "),a("p",[t._v("如下利用 SMIL 同时改变圆的位置和颜色：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<svg width="100%" height="90" viewPort="0 0 90 90" class="demo-item">\n    <circle cx="55" cy="45" r="45">\n      <animate attributeType="XML" attributeName="cx" from="55" to="100%"\n          dur="5s" repeatCount="indefinite"/>\n      <animate attributeType="XML" attributeName="fill" from="#6190e8" to="#23232e"\n          dur="5s" repeatCount="indefinite"/>\n    </circle>\n</svg>\n\n')])])]),a("p",[t._v("可见 SMIL 的动画元素是可以叠加使用的，"),a("a",{attrs:{href:"https://codepen.io/mamboer/full/MVKRZJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看 DEMO"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://css-tricks.com/animating-svg-css/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Animating SVG with CSS"),a("OutboundLink")],1),t._v("：利用 SVG 结合 CSS 实现一个动态广告图")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.smashingmagazine.com/2015/09/creating-cel-animations-with-svg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating Cel Animations With SVG"),a("OutboundLink")],1),t._v("：利用 SVG 结合 CSS 实现逐帧（定格）动画")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Heydon/cel-animation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cel Animation"),a("OutboundLink")],1),t._v("：用于辅助实现 SVG 逐帧（定格）动画的一个 SASS @mixin 函数")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG - animationMotion"),a("OutboundLink")],1),t._v("：了解 "),a("code",[t._v("animationMotion")]),t._v(" 元素")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG animation with SMIL"),a("OutboundLink")],1),t._v("：了解使用 SMIL 实现 SVG 动画的方法")])]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("SVG 在网页中的角色更像是类似图片一样的媒体对象，其动画也常常和 CSS 有关联，当然利用 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMIL"),a("OutboundLink")],1),t._v(" 仍然可以为 SVG 添加独立的动效，除了微软系的浏览器不支持之外，其兼容性还是相当可观的。在平时工作过程中，矢量图标的动画、轨迹动画特别适合使用 SVG 来实现。")])])}),[],!1,null,null,null);e.default=s.exports}}]);