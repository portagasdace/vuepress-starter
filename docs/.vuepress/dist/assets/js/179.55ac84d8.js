(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{535:function(a,e,r){"use strict";r.r(e);var n=r(42),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"第-4-节-基本数据处理-·-数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-4-节-基本数据处理-·-数组"}},[a._v("#")]),a._v(" 第 4 节 基本数据处理 · 数组")]),a._v(" "),r("p",[a._v("让我们再次把目光放回我们在第 2 节中提出的大数据中的 “Hello World” 词频统计上。在前面的章节中，我们将 MIT 开源协议中的一部分文本进行了预处理，并将这个文本切割成以字符串为元素的数组。")]),a._v(" "),r("p",[a._v("那么我们就可以开始学习如何处理数组、更强的数组以及使用数组完成我们的案例。")]),a._v(" "),r("h2",{attrs:{id:"_4-1-数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-数组"}},[a._v("#")]),a._v(" 4.1 数组")]),a._v(" "),r("p",[a._v("数组在数学中也可以称为“数列”，也就是以数字或其他类型内容为元素的有序集合。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("// 整型数字数组\nconst intArray = [ 1, 2, 3, 4, 5 ]\n// 浮点型数字数组\nconst floatArray = [ 1.1, 1.2, 1.3, 1.4, 1.5 ]\n// 字符串数组\nconst strArray = [ 'a', 'b', 'c', 'd', 'e' ]\n\n")])])]),r("p",[a._v("在第 2 节中我们完成的将文本预处理便是将一段较长的文本变成了这种字符串数组。在数据科学领域中，数组可以说是承载了绝大部分数据的表达任务，无论是规整的数据表，还是随时间排序的时间序列，或是复杂多变的非结构化数据，都可以使用数组或类数组的形式表达。")]),a._v(" "),r("h3",{attrs:{id:"_4-1-1-长度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-长度"}},[a._v("#")]),a._v(" 4.1.1 长度")]),a._v(" "),r("p",[a._v("我们前面讲到数组是一个"),r("strong",[a._v("有序集合")]),a._v("，那么就意味着它包含了若干个元素。当然了，数组可空。因为它是一个包含了若干元素的集合，所以它就肯定天然地包含了一个属性，那便是"),r("strong",[a._v("元素的数量")]),a._v("。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4, 5 ]\nconsole.log(array.length) //=> 5\n\n")])])]),r("h3",{attrs:{id:"_4-1-2-修改内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-修改内容"}},[a._v("#")]),a._v(" 4.1.2 修改内容")]),a._v(" "),r("p",[a._v("因为在计算机中的可用内存是有限的，所以大部分程序在创建数据（比如数组）的时候，都需要先设定好该数据的所占长度。但在 JavaScript 中这并不需要，因为实际在 JavaScript 中数组就是一个特殊的对象，但这并不在讨论范围内。")]),a._v(" "),r("p",[a._v("所以在 JavaScript 中，对数组内容的修改会比较方便。“增查改删”是数据库应用领域中最常见的操作，这在数组中也是一样的。")]),a._v(" "),r("h4",{attrs:{id:"增加内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增加内容"}},[a._v("#")]),a._v(" 增加内容")]),a._v(" "),r("p",[a._v("一般来说向数组增加内容是在数组的末端新增内容（Append），当然也可能存在将新内容添加到数组首端或是插入到中间的某一个部分的需求。")]),a._v(" "),r("p",[r("strong",[a._v("添加到末端 Append")])]),a._v(" "),r("p",[a._v("Append 操作在 JavaScript 中使用 "),r("code",[a._v("array.push(element1[, ...[, elementN]])")]),a._v(" 方法直接实现。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = []\n\narray.push(1)\nconsole.log(array) //=> [1]\n\narray.push(2, 3)\nconsole.log(array) //=> [1, 2, 3]\nconsole.log(array.length) //=> 3\n\n")])])]),r("p",[r("strong",[a._v("添加到首端 Prepend")])]),a._v(" "),r("p",[a._v("添加到首端的操作在 JavaScript 中可以使用 "),r("code",[a._v("array.unshift(element1[, ...[, elementN]])")]),a._v(" 方法。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 4, 5 ]\n\narray.unshift(3)\nconsole.log(array) //=> [3, 4, 5]\n\narray.unshift(1, 2)\nconsole.log(array) //=> [1, 2, 3, 4, 5] \n\n")])])]),r("p",[r("strong",[a._v("插入到中间某位置 Insert")])]),a._v(" "),r("p",[a._v("有的时候我们还需要往数组中的某一个位置添加元素。但需要注意的是，在 JavaScript 中数组元素的位置是从 "),r("code",[a._v("0")]),a._v(" 开始的，也就是数组的第一个元素的下标为 "),r("code",[a._v("0")]),a._v("，第二个为 "),r("code",[a._v("1")]),a._v("。")]),a._v(" "),r("p",[a._v("假设我们需要在数组 "),r("code",[a._v("[ 1, 2, 4, 5 ]")]),a._v(" 中的第三个位置，即下标为 "),r("code",[a._v("2")]),a._v(" 的位置上添加元素 "),r("code",[a._v("3")]),a._v("。这需要用到 "),r("code",[a._v("array.splice(start, deleteCount, element1[, ...[, elementN]])")]),a._v(" 方法。你可以注意到该方法第二个参数是 "),r("code",[a._v("deleteCount")]),a._v("，因为这个方法也可以用来删除数组中某一个位置开始的若干个元素，而当我们将这个参数设置为 "),r("code",[a._v("0")]),a._v(" 的时候，该方法第三个以及后面的参数便会插入到下标为 "),r("code",[a._v("start")]),a._v(" 的位置，后面的元素自动往后推导。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 6, 7 ]\n\narray.splice(2, 0, 3)\nconsole.log(array) //=> [1, 2, 3, 6, 7]\n\narray.splice(3, 0, 4, 5)\nconsole.log(array) //=> [1, 2, 3, 4, 5, 6, 7]\n\n")])])]),r("h4",{attrs:{id:"查找内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查找内容"}},[a._v("#")]),a._v(" 查找内容")]),a._v(" "),r("p",[a._v("因为我们说数组是一个有序集合，所以我们在对数组中的元素进行查找的时候也是一个有序进行的过程，而最常用的内容查找方法便是 "),r("code",[a._v("filter")]),a._v(" 过滤器。")]),a._v(" "),r("p",[a._v("过滤器的逻辑便是定义一个过滤函数，该函数会有序地被传入数组中当前下标的元素，而它则需要返回该函数是否符合其过滤要求，即结果为 "),r("code",[a._v("true")]),a._v(" 或 "),r("code",[a._v("false")]),a._v("。")]),a._v(" "),r("p",[a._v("假设我们需要在数组 "),r("code",[a._v("[1, 2, 3, 4, 5, 6, 7, 8]")]),a._v(" 中找出偶数项，即对元素进行对 "),r("code",[a._v("2")]),a._v(" 求余结果为 "),r("code",[a._v("0")]),a._v(" 时即为偶数。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ]\nconst evenNumbers = array.filter(function(x) {\n  return x % 2 == 0\n})\n\nconsole.log(evenNumbers) //=> [2, 4, 6, 8]\n\n")])])]),r("h4",{attrs:{id:"删除内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除内容"}},[a._v("#")]),a._v(" 删除内容")]),a._v(" "),r("p",[a._v("删除内容在实际应用中有非常多的含义，有可能是删除不符合某一种条件的元素，那么使用过滤器即可实现；有可能是需要删除某一个位置上的元素，那么就需要使用上面提到的 "),r("code",[a._v("array.splice(start, deleteCount)")]),a._v(" 方法。")]),a._v(" "),r("p",[a._v("比如我们要删除数组 "),r("code",[a._v("[1, 2, 3, 10, 4, 5]")]),a._v(" 中下标为 "),r("code",[a._v("3")]),a._v(" 的元素 "),r("code",[a._v("10")]),a._v("，就可以这样使用，删除从位置 "),r("code",[a._v("3")]),a._v(" 开始的 "),r("code",[a._v("1")]),a._v(" 个元素。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [1, 2, 3, 10, 4, 5]\n\narray.splice(3, 1)\n\nconsole.log(array) //=> [1, 2, 3, 4, 5]\n\n")])])]),r("h4",{attrs:{id:"更新内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新内容"}},[a._v("#")]),a._v(" 更新内容")]),a._v(" "),r("p",[a._v("对数组中的某一个元素进行修改，这种操作与对象中的修改对象属性内容是一样的，因为数组就是一个特殊的对象（属性键为自增长自然数）。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4, 5 ]\n\narray[0] = 10\nconsole.log(array) //=> [10, 2, 3, 4, 5]\n\n")])])]),r("h4",{attrs:{id:"题外话-封装数组操作工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#题外话-封装数组操作工具"}},[a._v("#")]),a._v(" “题外话”：封装数组操作工具")]),a._v(" "),r("p",[a._v("虽然绝大多数操作都可以直接使用 JavaScript 中自带的 API 来实现，但是如 "),r("code",[a._v("array.splice()")]),a._v(" 这种方法看上去就很容易产生操作错误。那么为了避免开发中的失误，我们可以通过定义一个抽象对象来封装一个用于操作数组的工具库。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arrayUtils = {\n  // methods\n}\n\n")])])]),r("p",[r("strong",[a._v("添加内容")])]),a._v(" "),r("p",[a._v("前面我们说道了为数组添加内容有三种模式：末端添加、首端添加和中间插入，那么我们就可以分别为它们封装好 "),r("code",[a._v("append")]),a._v("、"),r("code",[a._v("prepend")]),a._v(" 和 "),r("code",[a._v("insert")]),a._v(" 函数。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arrayUtils = {\n\n  // ...\n  \n  append(array, ...elements) {\n    array.push(...elements)\n    \n    return array\n  },\n  \n  prepend(array, ...elements) {\n    array.unshift(...elements)\n    \n    return array\n  },\n  \n  insert(array, index, ...elements) {\n    array.splice(index, 0, ...elements)\n    \n    return array\n  }\n}\n\n// 使用\nconst array = []\narrayUtils.append(array, 3)    // 末端添加元素 3\narrayUtils.prepend(array, 1)   // 首端添加元素 1\narrayUtils.insert(array, 1, 2) // 在位置 1 添加元素 2\n\nconsole.log(array) //=> [1, 2, 3]\n\n")])])]),r("p",[r("strong",[a._v("删除内容")])]),a._v(" "),r("p",[a._v("因为要删除数组中的某一个元素同样需要用到 "),r("code",[a._v("array.splice()")]),a._v(" 方法，为了避免歧义我们也可以将其封装到工具库中。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arrayUtils = {\n\n  // ...\n  \n  remove(array, index) {\n    array.splice(index, 1)\n\n    return array\n  }\n}\n\n// 使用\nconst array = [ 1, 2, 3 ]\narrayUtils.remove(array, 1)\n\nconsole.log(array) //=> [1, 3]\n\n")])])]),r("h3",{attrs:{id:"_4-1-3-以数组为单位的基本处理方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-以数组为单位的基本处理方法"}},[a._v("#")]),a._v(" 4.1.3 以数组为单位的基本处理方法")]),a._v(" "),r("p",[a._v("我们前面对数组的介绍，全部都是以元素为单位的操作。但是在大多数情况下，我们都需要以整个数组为单位进行运算，比如进行平均数计算等等。那么我们就需要有一些方法来对整个数组进行处理和计算。")]),a._v(" "),r("p",[a._v("一般来说对数组的总体进行处理可以归类为两个操作：转换和聚合。")]),a._v(" "),r("h4",{attrs:{id:"转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[a._v("#")]),a._v(" 转换")]),a._v(" "),r("p",[a._v("转换便是将一个数组中的内容，以一定的方式规律地转换为另一个数组内容。为什么要进行数据转换？因为有时候并不是天生就是可计算的，比如视频、图像、声音和文本等等，而当我们讨论运算的时候，都是以数字为运算的基础。那么为了方便进行运算，就需要先将这些“不可计算”的数据转换为数字，就比如我们前面学习字符串处理的时候就使用过了将英文字母转换为 ASCII 码的过程。")]),a._v(" "),r("p",[a._v("在 JavaScript 中对数组进行“扫描”有不少方法，如前面提到过的 "),r("code",[a._v("filter")]),a._v("、只进行循环的 "),r("code",[a._v("forEach")]),a._v("、与 "),r("code",[a._v("filter")]),a._v(" 类似的但只返回第一个匹配值的 "),r("code",[a._v("find")]),a._v("，以及接下来我们需要用到的用于进行数据转换的 "),r("code",[a._v("map")]),a._v(" 和用于聚合数据的 "),r("code",[a._v("reduce")]),a._v("。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/9/162a91fd92263e1a?w=346&h=521&f=png&s=24132",alt:"数组转换"}})]),a._v(" "),r("p",[a._v("假设我们需要将数组 "),r("code",[a._v("[ 1, 2, 3, 4, 5 ]")]),a._v(" 中的每一个元素都转换为较其增 2 的数值，也就是说要给每一个元素做 "),r("code",[a._v("+ 2")]),a._v(" 的操作，那么我们就可以使用 "),r("code",[a._v("array.map(callback)")]),a._v(" 方法来实现。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4, 5 ]\n\nconst addedArray = array.map(function(x) {\n  return x + 2\n})\n\nconsole.log(addedArray) //=> [3,4,5,6,7]\n\n")])])]),r("p",[a._v("当然我们也可以用来做不同数据类型之间的转换，比如由 ASCII 码组成的数组 "),r("code",[a._v("[ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ]")]),a._v("，我们需要把它转化为对应的字符串数组就可以这样做。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('const asciiArray = [ 72, 101, 108, 108, 111, 87, 111, 114, 108, 100 ]\n\nconst charArray = asciiArray.map(function(ascii) {\n  return String.fromCharCode(ascii)\n})\n\nconsole.log(charArray) //=> ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]\n\n')])])]),r("h4",{attrs:{id:"聚合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[a._v("#")]),a._v(" 聚合")]),a._v(" "),r("p",[a._v("什么是聚合？或许我们刚开始听到这个词的时候会“一脸懵逼”，而看到 "),r("code",[a._v("reduce")]),a._v(" 这个方法名的时候则更是头疼了。其实不用担心，这个方法在我们很多年前学习加法运算的时候就已经使用过了。不相信吗？我们来接着看。")]),a._v(" "),r("p",[a._v("我们来回忆一下当年我们是怎么一步一步做 "),r("code",[a._v("1 + 2 + 3 + 4")]),a._v(" 这道加法运算题的。根据从左到右的运算法则，我们需要首先计算 "),r("code",[a._v("1 + 2")]),a._v(" 等于 "),r("code",[a._v("3")]),a._v("；然后将这个和再与 "),r("code",[a._v("3")]),a._v(" 相加得到 "),r("code",[a._v("6")]),a._v("，并且以此类推最终得到了这个式子的结果为 "),r("code",[a._v("10")]),a._v("。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/7/162a0219662c9951?w=521&h=261&f=png&s=12977",alt:"reduce"}})]),a._v(" "),r("p",[a._v("而其实这个过程就是 "),r("code",[a._v("reduce")]),a._v(" 方法的过程。我们换做使用 JavaScript 来实现便是这样的。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4 ]\n\nconst sumResult = array.reduce(function(left, right) {\n  return left + right\n})\n\nconsole.log(sumResult) //=> 10\n\n")])])]),r("p",[a._v("为此我们就可以对这个聚合结果做一个小封装，比如求数组中数值相加的和与相乘的积。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4 ]\n\nfunction sum(array) {\n  return array.reduce(function(left, right) {\n    return left + right\n  })\n}\n\nfunction multi(array) {\n  return array.reduce(function(left, right) {\n    return left * right\n  })\n}\n\nconsole.log(sum(array))   //=> 10\nconsole.log(multi(array)) //=> 24\n\n")])])]),r("p",[a._v("甚至我们还可以将这个封装的程度再往抽象的方向进一步发展，这其中涉及了一些函数式编程的概念。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4 ]\n\nfunction reduceFn(callback) {\n  return function(array) {\n    return array.reduce(callback)\n  }\n}\n\nconst sum = reduceFn(function(left, right) {\n  return left + right\n})\nconst multi = reduceFn(function(left, right) {\n  return left * right\n})\n\nconsole.log(sum(array))   //=> 10\nconsole.log(multi(array)) //=> 24\n\n")])])]),r("h4",{attrs:{id:"又一个-题外话-lodash-工具库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#又一个-题外话-lodash-工具库"}},[a._v("#")]),a._v(" 又一个“题外话”：Lodash 工具库")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://Lodash.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lodash"),r("OutboundLink")],1),a._v(" 是一个包含了非常多实用工具函数的 JavaScript 工具库，其中也包括了非常多我们在对对象型、数组型数据进行处理时需要用到的函数。我们在实际开发中可以借助 Lodash 以大大提高我们的开发效率。")]),a._v(" "),r("p",[a._v("安装 Lodash 工具库的方法有很多，如果你目前正在浏览器环境中使用 JavaScript 进行开发，那么就可以在 HTML 文件的 "),r("code",[a._v("head")]),a._v(" 部分中加入以下代码以加载 Lodash 工具库。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('<script type="application/javascript" src="https://cdn.staticfile.org/Lodash.js/4.17.5/Lodash.js"><\/script>\n\n')])])]),r("p",[r("strong",[a._v("使用 Lodash 实现数组相加")])]),a._v(" "),r("p",[a._v("正好我们可以使用 Lodash 来实现我们前面所用到的数组相加。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [ 1, 2, 3, 4 ]\n\nconst sumResult = _.sum(array)\n\nconsole.log(sumResult) //=> 20\n\n")])])]),r("p",[a._v("是的！Lodash 早就已经为我们提供了这个用于计算数值数组中所有元素相加的函数了。当然，Lodash 的实用性可不止如此，后面我们可以继续来学习。")]),a._v(" "),r("h3",{attrs:{id:"_4-1-4-更强-的数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-更强-的数组"}},[a._v("#")]),a._v(" 4.1.4 “更强”的数组")]),a._v(" "),r("p",[a._v("我们前面接触到的数组基本都是只包含了像数值、字符串这样的简单元素。那么如果说数组所包含的元素是更为复杂的对象，甚至是数组呢？实际开发经验告诉我们，除了包含数值、字符串这样的简单数据外，我们还需要“更强”的数组以对付更复杂的需求。")]),a._v(" "),r("p",[a._v("比如我们需要使用一个数组来存储某个部门的人员数据，那么该数组中的元素就应该代表了该部门中的每一个人的抽象映射。而为了能够表达一个人的各种属性，我们需要用对象来完成这样的需求，也就是说我们需要让对象成为数组的元素内容。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const crew = [\n  {\n    name: 'Peter',\n    gender: 'male',\n    level: 'Product Manager',\n    age: 32\n  },\n  {\n    name: 'Ben',\n    gender: 'male',\n    level: 'Senior Developer',\n    age: 28\n  },\n  {\n    name: 'Jean',\n    gender: 'female',\n    level: 'Senior Developer',\n    age: 26\n  },\n  {\n    name: 'Chang',\n    gender: 'male',\n    level: 'Developer',\n    age: 23\n  },\n  {\n    name: 'Siva',\n    gender: 'female',\n    level: 'Quality Assurance',\n    age: 25\n  }\n]\n\n")])])]),r("p",[a._v("而当我们需要表达一个抽象的二维空间（比如数学中的直角坐标系）甚至更高维度空间中的许多点的集合时，每一个点都可以使用一个向量来表示其在对应空间中的位置，比如 "),r("code",[a._v("[ 3, 5 ]")]),a._v("。那么自然地，用于表达这些点的集合的数组就是一个以数组为元素的数组了。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const points = [\n  [ 1, 1 ],\n  [ 2, 3 ],\n  [ 3, 5 ],\n  [ 4, 7 ],\n  [ 5, 10 ],\n  [ 6, 15 ]\n]\n\n")])])]),r("p",[a._v("甚至我们有的时候还需要一个数组中有着不同类型的元素，比如混杂着字符串和数值。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const array = [\n  [ 'Hello', 1 ],\n  [ 'World', 1 ]\n]\n\n")])])]),r("p",[a._v("这些更复杂的数组有什么实际的用途，我们下一节见分晓。")]),a._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),r("p",[a._v("数组是现实世界中绝大部分数据的主要呈现形式，学会如何灵活地使用数组类型的数据，对数组本身进行测量、对数组中的元素进行操作，那么你就已经可以非常自豪地大声说：我已经踏入了数据科学的大门了！")]),a._v(" "),r("h3",{attrs:{id:"习题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#习题"}},[a._v("#")]),a._v(" 习题")]),a._v(" "),r("ol",[r("li",[a._v("将数组 "),r("code",[a._v("[ 1, 2, 3, 4, 5 ]")]),a._v(" 转换为 "),r("code",[a._v("[ 'a1', 'a2', 'a3', 'a4', 'a5' ]")]),a._v("；")]),a._v(" "),r("li",[a._v("将数组 "),r("code",[a._v("[ 1, 2, 3, 4, 5 ]")]),a._v(" 转换为 "),r("code",[a._v("[ 'a1', 'b2', 'c3', 'd4', 'e5' ]")]),a._v("；")]),a._v(" "),r("li",[a._v("将数组 "),r("code",[a._v("[ 1, 2, 3, 4, 5 ]")]),a._v(" 转换为 "),r("code",[a._v("[ 1, 4, 9, 16, 25 ]")]),a._v("；")]),a._v(" "),r("li",[a._v("查询 JavaScript 中 "),r("code",[a._v("Array.prototype.map")]),a._v(" 方法的详细文档，并将数组 "),r("code",[a._v("[ 0, 0, 0, 0, 0 ]")]),a._v(" 转换为 "),r("code",[a._v("[ 'A', 'B', 'C', 'D', 'E' ]")]),a._v("；")]),a._v(" "),r("li",[a._v("提取数组 "),r("code",[a._v("[ 1, 2, 3, 4, 5 ]")]),a._v(" 中的 "),r("code",[a._v("[ 2, 3, 4 ]")]),a._v("。")])])])}),[],!1,null,null,null);e.default=t.exports}}]);