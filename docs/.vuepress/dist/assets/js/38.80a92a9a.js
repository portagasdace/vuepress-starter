(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{395:function(t,a,n){"use strict";n.r(a);var e=n(42),c=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使你的-canvas-更加优雅"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使你的-canvas-更加优雅"}},[t._v("#")]),t._v(" 使你的 Canvas 更加优雅")]),t._v(" "),n("p",[t._v("本节作为本小册的最后一节，将带大家一起对你的 Canvas 进行优化，使你的 Canvas 更加优雅。我们来看一下都有哪些方法可以优化我们的 Canvas。")]),t._v(" "),n("h2",{attrs:{id:"常见的-canvas-优化方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的-canvas-优化方法"}},[t._v("#")]),t._v(" 常见的 Canvas 优化方法")]),t._v(" "),n("h3",{attrs:{id:"避免浮点数的坐标点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免浮点数的坐标点"}},[t._v("#")]),t._v(" 避免浮点数的坐标点")]),t._v(" "),n("p",[t._v("绘制图形时，长度与坐标应选取整数而不是浮点数，原因在于 Canvas 支持半个像素绘制。")]),t._v(" "),n("p",[t._v("会根据小数位实现插值算法实现绘制图像的反锯齿效果，如果没有必要请不要选择浮点数值。")]),t._v(" "),n("h3",{attrs:{id:"使用多层画布去画一个复杂的场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用多层画布去画一个复杂的场景"}},[t._v("#")]),t._v(" 使用多层画布去画一个复杂的场景")]),t._v(" "),n("p",[t._v("一般在游戏中这个优化方式会经常使用，但是在我们的背景特效中不经常使用，这个优化方式是将经常移动的元素和不经常移动的元素分层，避免不必要的重绘。")]),t._v(" "),n("p",[t._v("比如在游戏中，背景不经常变换和人物这些经常变换的元素分成不同的层，这样需要重绘的资源就会少很多。")]),t._v(" "),n("h3",{attrs:{id:"用-css-transform-特性缩放画布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用-css-transform-特性缩放画布"}},[t._v("#")]),t._v(" 用 CSS "),n("code",[t._v("transform")]),t._v(" 特性缩放画布")]),t._v(" "),n("p",[t._v("如果你使用 "),n("code",[t._v("left")]),t._v("、"),n("code",[t._v("top")]),t._v(" 这些 CSS 属性来写动画的话，那么会触发整个像素渲染流程 —— "),n("code",[t._v("paint")]),t._v("、"),n("code",[t._v("layout")]),t._v(" 和 "),n("code",[t._v("composition")]),t._v("。")]),t._v(" "),n("p",[t._v("但是使用 "),n("code",[t._v("transform")]),t._v(" 中的 "),n("code",[t._v("translateX/Y")]),t._v(" 来切换动画，你将会发现，这并不会触发 "),n("code",[t._v("paint")]),t._v(" 和 "),n("code",[t._v("layout")]),t._v("，仅仅会触发 "),n("code",[t._v("composition")]),t._v(" 的阶段。")]),t._v(" "),n("p",[t._v("这是因为 "),n("code",[t._v("transform")]),t._v(" 调用的是 GPU 而不是 CPU。")]),t._v(" "),n("h3",{attrs:{id:"离屏渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#离屏渲染"}},[t._v("#")]),t._v(" 离屏渲染")]),t._v(" "),n("p",[t._v("名字听起来很复杂，什么离屏渲染，其实就是设置缓存，绘制图像的时候在屏幕之外的地方绘制好，然后再直接拿过来用，这不就是缓存的概念吗?!︿(￣︶￣)︿.")]),t._v(" "),n("p",[t._v("建立两个 Canvas 标签，大小一致，一个正常显示，一个隐藏（缓存用的，不插入 DOM 中）。先将结果 draw 到缓存用的 canvas 上下文中，因为游离 Canvas 不会造成 UI 的渲染，所以它不会展现出来；再把缓存的内容整个裁剪再 draw 到正常显示用的 Canvas 上，这样能优化不少。")]),t._v(" "),n("h2",{attrs:{id:"离屏渲染-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#离屏渲染-2"}},[t._v("#")]),t._v(" 离屏渲染")]),t._v(" "),n("p",[t._v("我们主要来介绍一下 Canvas 的离屏渲染优化，就拿第 5 节和第 6 节的那个示例来继续。")]),t._v(" "),n("p",[t._v("忘记的童鞋再去重温下第 5 节和第 6 节的内容。")]),t._v(" "),n("p",[t._v("离屏渲染的主要过程就是将一个一个的粒子先在屏幕之外创建出来，然后再使用 "),n("code",[t._v("drawImage()")]),t._v(" 方法将其“放入”到我们的主屏幕中。")]),t._v(" "),n("p",[t._v("在了解了思想之后，我们就来实现一下吧！ｂ（￣▽￣）ｄ")]),t._v(" "),n("p",[t._v("我们首先要在全局设置一个变量 "),n("code",[t._v("useCache")]),t._v(" 来存放我们是否使用离屏渲染这种优化方式。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var useCache = true;\n\n")])])]),n("h3",{attrs:{id:"round-item-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#round-item-方法"}},[t._v("#")]),t._v(" "),n("code",[t._v("Round_item")]),t._v(" 方法")]),t._v(" "),n("p",[t._v("然后我们在 "),n("code",[t._v("Round_item")]),t._v(" 原型的 "),n("code",[t._v("draw()")]),t._v(" 方法中创建每一个离屏的小的 "),n("code",[t._v("canvas")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    function Round_item(index, x, y) {\n        this.index = index;\n        this.x = x;\n        this.y = y;\n        this.useCache = useChache;\n        \n        this.cacheCanvas = document.createElement("canvas");\n        this.cacheCtx = this.cacheCanvas.getContext("2d");\n\n        this.r = Math.random() * 2 + 1;\n        \n        this.cacheCtx.width = 6 * this.r;\n        this.cacheCtx.height = 6 * this.r;\n        \n        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;\n        this.color = "rgba(255,255,255," + alpha + ")";\n\n        if(useChache){\n            this.cache();\n        }\n    }\n\n')])])]),n("p",[t._v("有人会产生疑问，为什么这里的 "),n("code",[t._v("cacheCanvas")]),t._v(" 画布的宽度要设置为 6 倍的半径？那是因为，我们创建的 "),n("code",[t._v("cacheCanvas")]),t._v(" 不仅仅是有圆，还包括圆的阴影，所以我们要将 "),n("code",[t._v("cacheCanvas")]),t._v(" 的面积设置得稍微大一些，这样才能将圆带阴影一起剪切到我们的主 Canvas 中。")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("draw()")]),t._v(" 方法中，我们新创建了 "),n("code",[t._v("cacheCanvas")]),t._v("，并获取到了 "),n("code",[t._v("cacheCanvas")]),t._v(" 的上下文环境，然后设置其宽高。")]),t._v(" "),n("p",[t._v("然后我们判断了 "),n("code",[t._v("useChache")]),t._v(" 变量的值，也就是说，如果我们将 "),n("code",[t._v("useChache")]),t._v(" 设置为 "),n("code",[t._v("true")]),t._v("，也就是使用缓存，我们就调用 "),n("code",[t._v("this.cache()")]),t._v(" 方法。接下来，我们来看一下 "),n("code",[t._v("this.cache()")]),t._v(" 方法。")]),t._v(" "),n("h3",{attrs:{id:"this-cache-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this-cache-方法"}},[t._v("#")]),t._v(" "),n("code",[t._v("this.cache()")]),t._v(" 方法")]),t._v(" "),n("p",[t._v("同样的，我们也是在 "),n("code",[t._v("Round_item")]),t._v(" 的原型中设置 "),n("code",[t._v("this.cache()")]),t._v(" 方法。")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("this.cache()")]),t._v(" 方法中，我们的主要任务是在每一个 "),n("code",[t._v("cacheCanvas")]),t._v(" 中都绘制一个圆。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    Round_item.prototype.cache = function () {\n        this.cacheCtx.save();\n        this.cacheCtx.fillStyle = this.color;\n        this.cacheCtx.shadowColor = "white";\n        this.cacheCtx.shadowBlur = this.r * 2;\n        this.cacheCtx.beginPath();\n        this.cacheCtx.arc(this.r * 3, this.r * 3, this.r, 0, 2 * Math.PI);\n        this.cacheCtx.closePath();\n        this.cacheCtx.fill();\n        this.cacheCtx.restore();\n    };\n\n')])])]),n("p",[t._v("这里需要注意的是，和在 "),n("code",[t._v("draw()")]),t._v(" 方法中画的圆不同之处是，要注意这里设置的圆心坐标，是 "),n("code",[t._v("this.r * 3")]),t._v("，因为我们创建的 "),n("code",[t._v("cacheCanvas")]),t._v(" 的宽度和高度都是 "),n("code",[t._v("6 * this.r")]),t._v("，我们的圆是要显示在 "),n("code",[t._v("cacheCanvas")]),t._v(" 的正中心，所以设置圆心的坐标应该是 "),n("code",[t._v("this.r * 3,this.r * 3")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"draw-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#draw-方法"}},[t._v("#")]),t._v(" "),n("code",[t._v("draw()")]),t._v(" 方法")]),t._v(" "),n("p",[t._v("既然设置了 "),n("code",[t._v("cacheCanvas")]),t._v("，那么我们在 "),n("code",[t._v("draw()")]),t._v(" 中，就需要使用 Canvas 的 "),n("code",[t._v("drawImage")]),t._v(" 方法将 "),n("code",[t._v("cacheCanvas")]),t._v(" 中的内容显示在屏幕上。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    Round_item.prototype.draw = function () {\n\n        if( !useChache){\n            content.fillStyle = this.color;\n            content.shadowBlur = this.r * 2;\n            content.beginPath();\n            content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);\n            content.closePath();\n            content.fill();\n        }else{\n            content.drawImage(this.cacheCanvas, this.x - this.r, this.y - this.r);\n        }\n\n    };\n\n")])])]),n("p",[t._v("这里也是要判断下，如果没有使用缓存的话，还是使用最原始的创建圆的方式。")]),t._v(" "),n("p",[t._v("这样，我们就完成了离屏渲染的优化，我们来一起看一下完整的代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <style>\n        html, body {\n            margin: 0;\n            overflow: hidden;\n            width: 100%;\n            height: 100%;\n            cursor: none;\n            background: black;\n        }\n    </style>\n</head>\n<body>\n<canvas id="canvas"></canvas>\n\n<script>\n    var ctx = document.getElementById(\'canvas\'),\n        content = ctx.getContext(\'2d\'),\n        round = [],\n        WIDTH,\n        HEIGHT,\n        initRoundPopulation = 80,\n        useChache = true;\n\n\n\n    WIDTH = document.documentElement.clientWidth;\n    HEIGHT = document.documentElement.clientHeight;\n\n    ctx.width = WIDTH;\n    ctx.height = HEIGHT;\n\n    function Round_item(index, x, y) {\n        this.index = index;\n        this.x = x;\n        this.y = y;\n        this.useCache = useChache;\n        this.cacheCanvas = document.createElement("canvas");\n        this.cacheCtx = this.cacheCanvas.getContext("2d");\n\n        this.cacheCtx.width = 6 * this.r;\n        this.cacheCtx.height = 6 * this.r;\n        this.r = Math.random() * 2 + 1;\n        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;\n        this.color = "rgba(255,255,255," + alpha + ")";\n\n        if(useChache){\n            this.cache();\n        }\n    }\n\n    Round_item.prototype.draw = function () {\n\n        if( !useChache){\n            content.fillStyle = this.color;\n            content.shadowBlur = this.r * 2;\n            content.beginPath();\n            content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);\n            content.closePath();\n            content.fill();\n        }else{\n            content.drawImage(this.cacheCanvas, this.x - this.r, this.y - this.r);\n        }\n\n    };\n\n    Round_item.prototype.cache = function () {\n        this.cacheCtx.save();\n        this.cacheCtx.fillStyle = this.color;\n        this.cacheCtx.shadowColor = "white";\n        this.cacheCtx.shadowBlur = this.r * 2;\n        this.cacheCtx.beginPath();\n        this.cacheCtx.arc(this.r * 3, this.r * 3, this.r, 0, 2 * Math.PI);\n        this.cacheCtx.closePath();\n        this.cacheCtx.fill();\n        this.cacheCtx.restore();\n    };\n    function animate() {\n        content.clearRect(0, 0, WIDTH, HEIGHT);\n\n        for (var i in round) {\n            round[i].move();\n        }\n        requestAnimationFrame(animate)\n    }\n\n    Round_item.prototype.move = function () {\n        this.y -= 0.15;\n        if (this.y <= -10) {\n            this.y = HEIGHT + 10;\n        }\n        this.draw();\n    };\n\n\n    function init() {\n        for (var i = 0; i < initRoundPopulation; i++) {\n            round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT);\n            round[i].draw();\n        }\n        animate();\n\n    }\n\n    init();\n<\/script>\n</body>\n</html>\n\n')])])])])}),[],!1,null,null,null);a.default=c.exports}}]);