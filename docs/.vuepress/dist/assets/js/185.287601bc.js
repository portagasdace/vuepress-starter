(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{547:function(n,e,t){"use strict";t.r(e);var o=t(42),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"第-7-节-复杂数据处理-·-树形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-7-节-复杂数据处理-·-树形"}},[n._v("#")]),n._v(" 第 7 节 复杂数据处理 · 树形")]),n._v(" "),t("p",[n._v("什么是树形结构？树形结构无论是在计算机环境中，还是在我们的日常生活中都非常的常见，比如我们电脑中的文件夹结构、比如公司内部的人员结构，都是呈上一级元素和若干下一级元素组成的高维度结构。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/19/16415e4ced2d5d14?w=900&h=350&f=png&s=29513",alt:"company-tree"}})]),n._v(" "),t("p",[n._v("为了能够在计算机程序中实现对树形结构的操作处理，工程师们发明了非常多不同种类的树形结构以及适合于它们的各种算法。但是我们这里不需要太深入地了解这些各式各样的结构和算法，我们只需要学习最朴素的简单树形即可。")]),n._v(" "),t("p",[n._v("当然如果有兴趣的话，您也可以通过《算法》、《算法导论》、《编程珠玑》等等经典的算法教材来学习更多树形结构及其相关算法。")]),n._v(" "),t("h2",{attrs:{id:"_7-1-创建节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-创建节点"}},[n._v("#")]),n._v(" 7.1 创建节点")]),n._v(" "),t("p",[n._v("树形结构是由多个包含子节点内容的节点（Node）所组成的，也就是说树形结构由根节点开始至每一个叶节点为止，都是由同一种数据结构组成的。")]),n._v(" "),t("p",[n._v("一般来说，普通树形结构的节点由一个用于存储节点内容的空间，以及一个用于存储子节点的引用（在其他语言中也可以为指针）的数组所组成。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/19/16415e4cea39fc04?w=352&h=241&f=png&s=7477",alt:"Tree-Node"}})]),n._v(" "),t("h3",{attrs:{id:"_7-1-1-javascript-中的类-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1-javascript-中的类-class"}},[n._v("#")]),n._v(" 7.1.1 JavaScript 中的类（Class）")]),n._v(" "),t("p",[n._v("在学习如何创建一个树形结构的节点之前，我们需要首先来学习下如何使用 JavaScript 中的类语法，因为接下来非常多的数据应用开发中都离不开对类的使用。")]),n._v(" "),t("p",[n._v("类（Class）可以比喻为生物学中的物种，自然界中生物种类多得数不清，但是生物学家们却可以将它们逐一使用"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%94%9F%E7%89%A9%E5%88%86%E7%B1%BB%E5%AD%A6",target:"_blank",rel:"noopener noreferrer"}},[n._v("生物分类法"),t("OutboundLink")],1),n._v("进行分类，就好比威猛凶悍的狮子、老虎再到惹人喜爱的花猫、橘猫无论从体型、毛色上都有着天差地别，但都同属猫科动物。也好比我们"),t("strong",[n._v("智人")]),n._v("这一种族也有非常多的“亲戚”，而哪怕是我们智人本身也有黄种人、黑种人、白种人，人与人之间也有着千差万别的多样性。")]),n._v(" "),t("p",[n._v("而在计算机中也同样有着这样的多样性，有着若干个相同性质的对象，但各自却有着不同的特性、内容、参数等等。这就需要类来进行表示和实现这种特性。")]),n._v(" "),t("p",[n._v("我们再次将具体事物抽象化，我们每一个人都有各自的名字，我们都能表达自己的欢迎之词，那么就用一个 "),t("code",[n._v("Person")]),n._v(" 类来表达我们共同的物种——智人。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n  constructor(name) {\n    this.name = name\n  }\n  \n  hello() {\n    return 'Hello, my name is ' + this.name\n  }\n}\n\nconst me = new Person('Will')\nconsole.log(me.hello()) //=> Hello, my name is Will\n\n")])])]),t("p",[t("code",[n._v("constructor")]),n._v(" 为构建函数，定义包含一个 "),t("code",[n._v("name")]),n._v(" 参数以将其赋予这个"),t("strong",[n._v("人")]),n._v("实例本身以作为其名字；"),t("code",[n._v("hello")]),n._v(" 方法用于表达作为智人的友好欢迎之词。")]),n._v(" "),t("p",[n._v("脱离动物世界，回到人类社会文明中来，我们不仅拥有名字，还有着更为复杂的家族关系，我们都有一个家族名（Family Name）也就是我们的姓氏，以组成我们完整的"),t("strong",[n._v("姓名")]),n._v("。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n  constructor(givenName, familyName) {\n    this.givenName = givenName\n    this.familyName = familyName\n  }\n  \n  hello() {\n    return `Hello, my name is ${this.givenName} ${this.familyName}`\n  }\n}\n\nconst me = new Person('Will', 'Gunn')\nconsole.log(me.hello()) //=> Hello, my name is Will Gunn\n\n")])])]),t("p",[n._v("在这个 "),t("code",[n._v("Person")]),n._v(" 类中，我们定义了 "),t("code",[n._v("givenName")]),n._v(" 和 "),t("code",[n._v("familyName")]),n._v(" 两个属性，而在 JavaScript 的类中同时还允许定义"),t("strong",[n._v("虚拟属性")]),n._v("，也就是 Getter。比如我们可以将姓与名结合在一起以组成我们的全名。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n  constructor(givenName, familyName) {\n    this.givenName = givenName\n    this.familyName = familyName\n  }\n  \n  get fullName() {\n    return `${this.givenName} ${this.familyName}`\n  }\n  \n  hello() {\n    return `Hello, my name is ${this.fullName}`\n  }\n}\n\nconst me = new Person('Will', 'Gunn')\nconsole.log(me.hello()) //=> Hello, my name is Will Gunn\n\n")])])]),t("p",[n._v("类所产生的实例都是一个对象，所以我们在第 3 节中时就已经说明了，对象是一种可以表达万物的技术。非常好，你已经学会了如何使用 JavaScript 的类来表达一种事物了，那么就让我们开始回到正题上，创建一个树形结构中的节点吧。")]),n._v(" "),t("h3",{attrs:{id:"_7-1-2-定义节点类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-2-定义节点类型"}},[n._v("#")]),n._v(" 7.1.2 定义节点类型")]),n._v(" "),t("p",[n._v("一般情况下每一个节点都包含一个用于存储内容的容器，我们可以使用一个简单的 "),t("code",[n._v("value")]),n._v(" 属性来表达；而对于子节点的引用则可以使用一个数组属性 "),t("code",[n._v("children")]),n._v(" 来承载。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n  constructor(value) {\n    this.value = value\n    this.children = []\n  }\n}\n\nconst node = new Node('node value')\n\n")])])]),t("p",[n._v("有了节点以后，就需要将多个节点组合起来了，比如将两个节点加入到另外一个节点中以作为其子节点。那么我们可以先为这个 "),t("code",[n._v("Node")]),n._v(" 类添加一个 "),t("code",[n._v("addChild")]),n._v(" 方法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n  // ...\n  \n  addChild(node) {\n    this.children.push(node)\n    \n    return this\n  }\n}\n\n")])])]),t("p",[n._v("你可能会问，为什么不直接使用 "),t("code",[n._v("node.children.push(childNode)")]),n._v("，而非要在外面包一层 "),t("code",[n._v("addChild")]),n._v(" 方法？别着急，事情远没有那么简单，我们后面会慢慢讲解。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const root = new Node('root')\nconst node1 = new Node('node 1')\nconst node2 = new Node('node 2')\nconst node3 = new Node('node 3')\n\nroot.addChild(node1).addChild(node2)\nnode1.addChild(node3)\n\n")])])]),t("p",[n._v("这段代码中我们定义了四个节点，其中一个包含内容 "),t("code",[n._v("root")]),n._v(" 的节点作为根节点，而节点 "),t("code",[n._v("node 1")]),n._v(" 和 "),t("code",[n._v("node 2")]),n._v(" 作为根节点的子节点，节点 "),t("code",[n._v("node 3")]),n._v(" 作为节点 "),t("code",[n._v("node 1")]),n._v(" 的子节点。从而形成了一棵非常简单的树形结构。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/19/16415e4ce9e8a0ff?w=241&h=251&f=png&s=10198",alt:"simple-tree"}})]),n._v(" "),t("p",[n._v("非常好，一个简单的树形已经构建出来了，那么接下来我们应该如何使用这棵树呢？一般来说每一种数据结构被发明出来就肯定会有其使用的方法和特征，就如数组结构有其长度特征 "),t("code",[n._v("length")]),n._v("，包含数字的数组则有平均值等等数学特征值。那么对于树形结构及其节点来说又有哪些特征值呢？")]),n._v(" "),t("p",[n._v("结构")]),n._v(" "),t("p",[n._v("树（Tree）")]),n._v(" "),t("p",[n._v("名称")]),n._v(" "),t("p",[n._v("翻译")]),n._v(" "),t("p",[n._v("解析")]),n._v(" "),t("p",[n._v("root")]),n._v(" "),t("p",[n._v("根")]),n._v(" "),t("p",[n._v("一棵树的根节点")]),n._v(" "),t("p",[t("strong",[n._v("结构")])]),n._v(" "),t("p",[t("strong",[n._v("节点（Node）")])]),n._v(" "),t("p",[n._v("名称")]),n._v(" "),t("p",[n._v("翻译")]),n._v(" "),t("p",[n._v("解析")]),n._v(" "),t("p",[n._v("parent")]),n._v(" "),t("p",[n._v("父节点")]),n._v(" "),t("p",[n._v("一个节点的父节点")]),n._v(" "),t("p",[n._v("children")]),n._v(" "),t("p",[n._v("子节点（复数）")]),n._v(" "),t("p",[n._v("一个节点的子节点集合")]),n._v(" "),t("p",[n._v("siblings")]),n._v(" "),t("p",[n._v("兄弟节点")]),n._v(" "),t("p",[n._v("与某一个节点拥有相同父节点的其他节点")]),n._v(" "),t("p",[n._v("degree")]),n._v(" "),t("p",[n._v("度")]),n._v(" "),t("p",[n._v("以某一节点为根节点的子树的个数，也可以简单地理解为子节点数目")]),n._v(" "),t("p",[n._v("depth")]),n._v(" "),t("p",[n._v("深度")]),n._v(" "),t("p",[n._v("一个节点的深度被定义为该节点到根节点之间边*数")]),n._v(" "),t("p",[n._v("height")]),n._v(" "),t("p",[n._v("高度")]),n._v(" "),t("p",[n._v("一个节点到距离它最远的叶节点**中间的边数")]),n._v(" "),t("blockquote",[t("p",[n._v("[ * ] 边：Edge，节点与节点直接的连接被定义为边"),t("br"),n._v("\n[ ** ] 叶节点：没有子节点的节点")])]),n._v(" "),t("p",[n._v("在这份表格中你发现其实每一个节点还可以包含其父节点的信息，所以在之前的 "),t("code",[n._v("Node")]),n._v(" 类中我们可以加入一个 "),t("code",[n._v("parent")]),n._v(" 属性，以存储该节点的父节点。")]),n._v(" "),t("p",[n._v("而在前面定义的 "),t("code",[n._v("addChild")]),n._v(" 方法中，我们就可以将定义父节点这个任务放在这里了。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n  constructor(name) {\n    this.name = name\n    this.parent = null // 默认一个节点在产生时为一个无父节点的根节点\n    this.children = []\n  }\n  \n  addChild(node) {\n    node.parent = this\n    this.children.push(node)\n    \n    return this\n  }\n}\n\n")])])]),t("h3",{attrs:{id:"_7-1-3-扩展节点类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3-扩展节点类型"}},[n._v("#")]),n._v(" 7.1.3 扩展节点类型")]),n._v(" "),t("h4",{attrs:{id:"siblings-兄弟节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#siblings-兄弟节点"}},[n._v("#")]),n._v(" Siblings 兄弟节点")]),n._v(" "),t("p",[n._v("当每一个节点有了其父节点的信息之后，就可以去尝试访问它的兄弟节点了，通过查询 "),t("code",[n._v("node.parent.children")]),n._v(" 中的节点排除掉自己后便是它的兄弟节点。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n\n  // ...\n\n  siblings() {\n    const self = this\n  \n    if (this.parent) {\n      return this.parent.children.filter(function(node) {\n        return node !== self\n      })\n    } else {\n      return []\n    }\n  }\n}\n\nconst root = new Node('root')\nconst node1 = new Node('node 1')\nconst node2 = new Node('node 2')\nconst node3 = new Node('node 3')\n\nroot.addChild(node1).addChild(node2)\nnode1.addChild(node3)\nconsole.log(node1.siblings()) //=> [Node{'node 2'}]\n\n")])])]),t("h4",{attrs:{id:"degree-度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#degree-度"}},[n._v("#")]),n._v(" Degree 度")]),n._v(" "),t("p",[n._v("这个特征值的定义比较简单，在树形结构中，每一个节点的 "),t("code",[n._v("degree")]),n._v(" 值就等于直接与它相连的子节点数。这里我们就可以用到前面学习到的“虚拟属性”了。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n  // ...\n  \n  get degree() {\n    return this.children.length\n  }\n}\n\nconst root = new Node('root')\nconst node1 = new Node('node 1')\nconst node2 = new Node('node 2')\n\nroot.addChild(node1)\nroot.addChild(node2)\n\nconsole.log(root.degree) //=> 2\n\n")])])]),t("h4",{attrs:{id:"depth-height-深度与高度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#depth-height-深度与高度"}},[n._v("#")]),n._v(" Depth & Height 深度与高度")]),n._v(" "),t("p",[n._v("深度（Depth）和高度（Height）可以说是树形结构中比较抽象且很有意思的特征值了。深度的定义为从某一个节点到其所在的树形结构中的根节点所经过边的数目。")]),n._v(" "),t("p",[n._v("就好比上面的例子中，从节点 "),t("code",[n._v("node 3")]),n._v(" 到节点 "),t("code",[n._v("node 1")]),n._v(" 最后到根节点 "),t("code",[n._v("root")]),n._v(" 中间经过了两个边，所以节点 "),t("code",[n._v("node 3")]),n._v(" 的深度则为 2。这个在 JavaScript 中也是非常好实现的，只需不断检查经过的每一个父节点是否存在继续往根部走的父节点，并记录循环次数即可。当找到了没有父节点的节点时，则该节点就是这棵树的根节点，而循环次数便是目标节点的深度值。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n\n  // ...\n\n  get depth() {\n    let depth = 0\n    let currNode = this\n\n    while (currNode.parent != null) {\n      depth++\n      currNode = currNode.parent\n    }\n\n    return depth\n  }\n\n}\n\nconst root = new Node('root')\nconst node1 = new Node('node 1')\nconst node3 = new Node('node 3')\n\nroot.addChild(node1)\nnode1.addChild(node3)\nconsole.log(node3.depth) //=> 2\n\n")])])]),t("p",[n._v("而高度的定义则是以某一个节点为根所形成的树形结构（该树形结构可能是一棵更大的树形结构中的一部分，即子树）中，这个节点到最深的子节点中间经过的边的数目。")]),n._v(" "),t("p",[n._v("而深度和高度的关系，可以用一张图非常清晰的解释。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/23/1687965199e9e04b?w=377&h=414&f=png&s=20068",alt:""}})]),n._v(" "),t("p",[n._v("我们可以发现每一个节点的高度其实就是等于以该节点为根的的子树中，最深的一个子节点的深度。也就是说只要找到最深的一个子节点，并计算当前子树的深度即可。")]),n._v(" "),t("p",[n._v("但是我们前面在计算深度的时候是直接计算整棵树的深度，那么为了能够让每一个子节点都能够计算指定子树的深度，我们需要对前面的代码进行一些修改。")]),n._v(" "),t("p",[n._v("我们可以首先假设每一棵树的根目录都有一个虚拟的父节点 "),t("code",[n._v("null")]),n._v("，那么就直接在计算深度时候，将 "),t("code",[n._v("currNode.parent != null")]),n._v(" 改成 "),t("code",[n._v("currNode.parent != root")]),n._v("，当 "),t("code",[n._v("root")]),n._v(" 为 "),t("code",[n._v("null")]),n._v(" 的时候将最后的结果加上 1 便是该节点到整棵树根节点的深度。")]),n._v(" "),t("p",[n._v("而为了能够将计算深度的算法使用在计算高度上，我们同时还需要将原本计算深度的算法提取出来，单独作为一个用于计算子树深度的方法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n\n  // ...\n\n  getDepthByRoot(root) {\n    let depth = 0\n    let currNode = this\n\n    while (currNode.parent !== root) {\n      depth++\n      currNode = currNode.parent\n    }\n\n    return depth + 1\n  }\n\n  get depth() {\n    return this.getDepthByRoot(null)\n  }\n}\n\n")])])]),t("p",[n._v("那么问题来了，该如何找到一棵子树中的最深子节点呢？一般来说有两种方式，"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Breadth-first_search",target:"_blank",rel:"noopener noreferrer"}},[n._v("BFS（Breadth-first Search，广度优先搜索）"),t("OutboundLink")],1),n._v("和 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Depth-first_search",target:"_blank",rel:"noopener noreferrer"}},[n._v("DFS（Depth-first Search，深度优先搜索）"),t("OutboundLink")],1),n._v("，而因为 DFS 的宗旨就是“不撞南墙不回头”，为了算法实现的简易性，我们这里选择 BFS 作为实现的方式。")]),n._v(" "),t("p",[n._v("如何使用 BFS 找到最深的子节点？那便是逐层给节点编号，直到最后一个就是最深的节点。当然我们也没有必要真的为它们编号，只需按层级顺序找到最深的一个即可。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/19/16415e4ceaaa3818?w=853&h=413&f=png&s=40352",alt:"BFS"}})]),n._v(" "),t("p",[n._v("定义一个 FIFO（First In First Out，先进的先出）的队列，将每一个层的节点不断地推入到这个队列中，并不断取出前面被推入的节点，并检查是否有子节点，直到最后一个节点便是最深子节点。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n\n  // ...\n\n  get height() {\n    const queue = [ this ]\n    let deepestNode = this\n\n    while (queue.length > 0) {\n      const len = queue.length\n\n      for (let i = 0; i < len; ++i) {\n        const currNode = queue.shift()\n\n        deepestNode = currNode\n\n        if (currNode.children.length > 0) {\n          queue.push(...currNode.children)\n        }\n      }\n    }\n\n    return deepestNode.getDepthByRoot(this)\n  }\n}\n\nconst root = new Node('root')\nconst node1 = new Node('node 1')\nconst node2 = new Node('node 2')\nconst node3 = new Node('node 3')\nconst node4 = new Node('node 4')\nconst node5 = new Node('node 5')\nconst node6 = new Node('node 6')\n\nroot.addChild(node1)\nroot.addChild(node2)\nnode1.addChild(node3)\nnode1.addChild(node4)\nnode2.addChild(node5)\nnode5.addChild(node6)\n\nconsole.log(root.height)  //=> 3\nconsole.log(node1.height) //=> 1\nconsole.log(node2.height) //=> 2\n\n")])])]),t("h3",{attrs:{id:"_7-1-4-树形节点代码清单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-4-树形节点代码清单"}},[n._v("#")]),n._v(" 7.1.4 树形节点代码清单")]),n._v(" "),t("p",[n._v("最后我们便得到了一个完整的树形结构节点类，以用于完成一些我们需要的需求实现。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Node {\n  constructor(name) {\n    this.name = name\n    this.parent = null\n    this.children = []\n  }\n  \n  addChild(node) {\n    node.parent = this\n    this.children.push(node)\n\n    return this\n  }\n\n  siblings() {\n    const self = this\n  \n    if (this.parent) {\n      return this.parent.children.filter(function(node) {\n        return node !== self\n      })\n    } else {\n      return []\n    }\n  }\n\n  get degree() {\n    return this.children.length\n  }\n\n  getDepthByRoot(root) {\n    let depth = 0\n    let currNode = this\n\n    while (currNode.parent !== root) {\n      depth++\n      currNode = currNode.parent\n    }\n\n    return depth + 1\n  }\n\n  get depth() {\n    return this.getDepthByRoot(null)\n  }\n\n  get height() {\n    const queue = [ this ]\n    let deepestNode = this\n\n    while (queue.length > 0) {\n      const len = queue.length\n\n      for (let i = 0; i < len; ++i) {\n        const currNode = queue.shift()\n\n        deepestNode = currNode\n\n        if (currNode.children.length > 0) {\n          queue.push(...currNode.children)\n        }\n      }\n    }\n\n    return deepestNode.getDepthByRoot(this)\n  }\n\n  toString(join = true) {\n    let parts = [ this.name ]\n\n    if (this.children.length > 0) {\n      parts = parts.concat(this.children\n        .map(function(node) {\n          return node.toString(false)\n        })\n        .reduce(function(left, right) {\n          return left.concat(right)\n        })\n        .map(function(line) {\n          return '  ' + line\n        })\n      )\n    }\n\n    if (join) {\n      return parts.join('\\n')\n    } else {\n      return parts\n    }\n  }\n}\n\n")])])]),t("h2",{attrs:{id:"_7-2-定义树形结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-定义树形结构"}},[n._v("#")]),n._v(" 7.2 定义树形结构")]),n._v(" "),t("p",[n._v("完成了节点的定义后，事实上我们已经可以实现树形结构的定义，并将数据存储在节点上了。但就如数组和序列之类的数据结构那样，除了对单个元素的操作以外，还需要对整个数据结构进行处理和计算。")]),n._v(" "),t("p",[n._v("所以我们需要定义一个专用的树形类，命名为 "),t("code",[n._v("Tree")]),n._v("，以完成一些需要对整棵树进行的计算。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Tree {\n\n  constructor(root) {\n    this.root = root\n  }\n\n  addNode(node, parent = this.root) {\n    parent.addChild(node)\n  }\n  \n}\n\n")])])]),t("p",[n._v("创建一棵树时首先要传入一个根节点对象，还可以使用 "),t("code",[n._v("tree.addNode")]),n._v(" 代替直接调用 "),t("code",[n._v("node.addChild")]),n._v("，并默认将传入的节点作为根节点的子节点，以便进行管理。")]),n._v(" "),t("h3",{attrs:{id:"_7-2-1-查询节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-1-查询节点"}},[n._v("#")]),n._v(" 7.2.1 查询节点")]),n._v(" "),t("p",[n._v("当一个树形结构被其他程序创建好以后，通过各种方式传入到你的程序中。而你需要知道这棵树中是否包含某一节点时，就需要使用一些算法来实现这个需求了。")]),n._v(" "),t("p",[n._v("我们前面在实现寻找一棵树中最深子节点的时候用到了 BFS 搜索算法来实现为每一层的子节点进行编号，BFS 的好处是可以搜索到树形结构中的大部分分支。但如果说要找到树形结构中的特定的某一个节点，BFS 显然不是最优的方案。")]),n._v(" "),t("p",[n._v("那么从拓扑学的角度上看一棵树形结构，BFS 的概念便是横向搜索，而 DFS 则是纵向搜索，“不撞南墙不回头”。这种搜索方式的好处是在一棵广度非常大的树形结构中，一旦能找到符合的节点，就能结束对其他分支的搜索。")]),n._v(" "),t("p",[n._v("DFS 在实现上也并不困难，从根节点开始，不断往下搜索第一个子节点（因为在本小册中所使用的树形结构节点都只会使用数组来存储子节点，所以自带顺序结构）。如果符合要求则返回该节点，如果不符合则先检查是否存在下一层或检查下一个兄弟节点。这里我们配合使用第 4 节中所封装的 "),t("code",[n._v("arrayUtils")]),n._v(" 进行实现。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/19/16415e4ce88409fc?w=811&h=421&f=png&s=47337",alt:"DFS"}})]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Tree {\n\n  // ...\n\n  search(validator) {\n    const queue = [ this.root ]\n    const result = []\n\n    while (queue.length > 0) {\n      const currNode = queue.shift()\n\n      if (validator(currNode)) {\n        result.push(currNode)\n        continue\n      }\n\n      if (currNode.children.length > 0) {\n        arrayUtils.prepend(queue, ...currNode.children)\n      }\n    }\n\n    return result\n  }\n}\n\nconst root = new Node('root')\nconst node1 = new Node('node 1')\nconst node2 = new Node('node 2')\nconst node3 = new Node('node 3')\nconst node4 = new Node('node 4')\nconst node5 = new Node('node 5')\nconst node6 = new Node('node 6')\n\nconst tree = new Tree(root)\ntree.addNode(node1)\ntree.addNode(node2)\ntree.addNode(node3, node1)\ntree.addNode(node4, node1)\ntree.addNode(node5, node2)\ntree.addNode(node6, node5)\n\nconsole.log(tree.search(function(node) {\n  return node.name == 'node 4')\n})) //=> [ Node{node 4} ]\n\n")])])]),t("h3",{attrs:{id:"_7-2-2-统计树形大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-2-统计树形大小"}},[n._v("#")]),n._v(" 7.2.2 统计树形大小")]),n._v(" "),t("p",[n._v("当我们使用各种程序来创建和扩展一棵树形结构之后，我们并不一定知道这棵树中究竟有多少节点，因为这些节点很有可能是由多个相互独立的程序所创建和插入的。那么我们就需要有一个方法来统计一棵树内究竟有多少节点（包括根节点）。")]),n._v(" "),t("p",[n._v("既然需要统计所有的节点，那必定要遍历整棵树以进行计数。而我们已经学会了使用 BFS 和 DFS 两种搜索方式了，那么我们可以使用其中的一种来进行遍历，并去掉其中的判断逻辑以遍历整棵树。这里我们先用我们刚刚学会的 DFS 来进行遍历统计。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Tree {\n\n  // ...\n\n  get size() {\n    let size = 0\n    const bag = [ this.root ]\n\n    while (bag.length > 0) {\n      const currNode = bag.shift()\n\n      size++\n\n      if (currNode.children.length > 0) {\n        arrayUtils.prepend(bag, ...currNode.children)\n      }\n    }\n\n    return size\n  }\n\n}\n\nconst root = new Node('root')\nconst node1 = new Node('node 1')\nconst node2 = new Node('node 2')\nconst node3 = new Node('node 3')\nconst node4 = new Node('node 4')\nconst node5 = new Node('node 5')\nconst node6 = new Node('node 6')\n\nconst tree = new Tree(root)\ntree.addNode(node1)\ntree.addNode(node2)\ntree.addNode(node3, node1)\ntree.addNode(node4, node1)\ntree.addNode(node5, node2)\ntree.addNode(node6, node5)\n\nconsole.log(tree.size) //=> 7\n\n")])])]),t("h3",{attrs:{id:"_7-2-3-树形结构代码清单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-3-树形结构代码清单"}},[n._v("#")]),n._v(" 7.2.3 树形结构代码清单")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Tree {\n\n  constructor(root) {\n    this.root = root\n  }\n\n  addNode(node, parent = this.root) {\n    parent.addChild(node)\n  }\n\n  search(validator) {\n    const queue = [ this.root ]\n\n    while (queue.length > 0) {\n      const currNode = queue.shift()\n\n      if (validator(currNode)) {\n        return currNode\n      }\n\n      if (currNode.children.length > 0) {\n        arrayUtils.prepend(queue, ...currNode.children)\n      }\n    }\n  }\n\n  get size() {\n    let size = 0\n    const bag = [ this.root ]\n\n    while (bag.length > 0) {\n      const currNode = bag.shift()\n\n      size++\n\n      if (currNode.children.length > 0) {\n        arrayUtils.prepend(bag, ...currNode.children)\n      }\n    }\n\n    return size\n  }\n\n  get height() {\n    return this.root.height\n  }\n  \n  toString() {\n    return this.root.toString()\n  }\n}\n\n")])])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),t("p",[n._v("我们已经学会了创建一个树形结构并且如何对其进行操作和检索，虽然现在看来你可能还会对树形结构究竟能完成些什么实际需求感到疑惑。但是别着急，我们接下来会接触更多的数据结构，我们需要通过接触不同的数据结构来进行组合学习，才能更好地理解每一种数据结构的特点和使用场景。")]),n._v(" "),t("h3",{attrs:{id:"习题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#习题"}},[n._v("#")]),n._v(" 习题")]),n._v(" "),t("p",[n._v("请使用 BFS 方法来实现统计树形结构中节点的数量。")])])}),[],!1,null,null,null);e.default=r.exports}}]);