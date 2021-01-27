(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{658:function(n,e,t){"use strict";t.r(e);var a=t(42),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("blockquote",[t("p",[n._v("本节代码对应 GitHub 分支: chapter4")])]),n._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/sanyuan0704/react-cloud-music/tree/chapter4",target:"_blank",rel:"noopener noreferrer"}},[n._v("仓库传送门"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("本节最终效果如下所示:")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/18/16dddf229c87866a?w=372&h=66&f=gif&s=109982",alt:""}})]),n._v(" "),t("h2",{attrs:{id:"接受参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接受参数"}},[n._v("#")]),n._v(" 接受参数")]),n._v(" "),t("p",[n._v("在 baseUI 文件夹下新建 horizen-item 目录，接着新建 index.js。")]),n._v(" "),t("p",[n._v("首先分析这个基础组件接受哪些参数，")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import React, { useState, useRef, useEffect, memo } from 'react';\nimport styled from'styled-components';\nimport Scroll from '../scroll/index'\nimport { PropTypes } from 'prop-types';\nimport style from '../../assets/global-style';\n\nfunction Horizen (props) {\n  return (\n    // 暂时省略\n  )\n}\n\n// 首先考虑接受的参数\n//list 为接受的列表数据\n//oldVal 为当前的 item 值\n//title 为列表左边的标题\n//handleClick 为点击不同的 item 执行的方法\nHorizen.defaultProps = {\n  list: [],\n  oldVal: '',\n  title: '',\n  handleClick: null\n};\n\nHorizen.propTypes = {\n  list: PropTypes.array,\n  oldVal: PropTypes.string,\n  title: PropTypes.string,\n  handleClick: PropTypes.func\n};\nexport default memo (Horizen);\n\n")])])]),t("p",[n._v("现在，来把 props 对象进行解构赋值，")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const { list, oldVal, title } = props;\nconst { handleClick } = props;\n\n")])])]),t("p",[n._v("返回的 JSX 代码为:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("return ( \n  <Scroll direction={\"horizental\"}>\n    <div>\n      <List>\n        <span>{title}</span>\n        {\n          list.map ((item) => {\n            return (\n              <ListItem \n                key={item.key}\n                className={`${oldVal === item.key ? 'selected': ''}`} \n                onClick={() => handleClick (item.key)}>\n                  {item.name}\n              </ListItem>\n            )\n          })\n        }\n      </List>\n    </div>\n  </Scroll>\n);\n\n")])])]),t("p",[n._v("样式代码:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 由于基础组件样式较少，直接写在 index.js 中\nconst List = styled.div`\n  display: flex;\n  align-items: center;\n  height: 30px;\n  overflow: hidden;\n  >span:first-of-type {\n    display: block;\n    flex: 0 0 auto;\n    padding: 5px 0;\n    margin-right: 5px;\n    color: grey;\n    font-size: ${style ["font-size-m"]};\n    vertical-align: middle;\n  }\n`\nconst ListItem = styled.span`\n  flex: 0 0 auto;\n  font-size: ${style ["font-size-m"]};\n  padding: 5px 8px;\n  border-radius: 10px;\n  &.selected {\n    color: ${style ["theme-color"]};\n    border: 1px solid ${style ["theme-color"]};\n    opacity: 0.8;\n  }\n`\n\n')])])]),t("p",[n._v("现在大家还看不到效果，可能会有些慌张，没关系，我们现在就把这个组件进入到页面中试一试。")]),n._v(" "),t("h2",{attrs:{id:"载入页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#载入页面"}},[n._v("#")]),n._v(" 载入页面")]),n._v(" "),t("p",[n._v("进入到 application/Singers/index.js 中，代码如下:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import React from 'react';\nimport Horizen from '../../baseUI/horizen-item';\nimport { categoryTypes } from '../../api/config';\n\nfunction Singers () {\n  return (\n    <Horizen list={categoryTypes} title={\"分类 (默认热门):\"}></Horizen>\n  )\n}\n\nexport default React.memo (Singers);\n\n")])])]),t("p",[n._v("分类数据在 api/config.js 中，但现在还没定义，现在在这个文件中添加以下代码:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 歌手种类\nexport const categoryTypes = [{\n  name: "华语男",\n  key: "1001"\n},\n{\n  name: "华语女",\n  key: "1002"\n},\n{\n  name: "华语组合",\n  key: "1003"\n},\n{\n  name: "欧美男",\n  key: "2001"\n},\n{\n  name: "欧美女",\n  key: "2002"\n},\n{\n  name: "欧美组合",\n  key: "2003"\n},\n{\n  name: "日本男",\n  key: "6001"\n},\n{\n  name: "日本女",\n  key: "6002"\n},\n{\n  name: "日本组合",\n  key: "6003"\n},\n{\n  name: "韩国男",\n  key: "7001"\n},\n{\n  name: "韩国女",\n  key: "7002"\n},\n{\n  name: "韩国组合",\n  key: "7003"\n},\n{\n  name: "其他男歌手",\n  key: "4001"\n},\n{\n  name: "其他女歌手",\n  key: "4002"\n},\n{\n  name: "其他组合",\n  key: "4003"\n},\n];\n\n// 歌手首字母\nexport const alphaTypes = [{\n    key: "A",\n    name: "A"\n  },\n  {\n    key: "B",\n    name: "B"\n  },\n  {\n    key: "C",\n    name: "C"\n  },\n  {\n    key: "D",\n    name: "D"\n  },\n  {\n    key: "E",\n    name: "E"\n  },\n  {\n    key: "F",\n    name: "F"\n  },\n  {\n    key: "G",\n    name: "G"\n  },\n  {\n    key: "H",\n    name: "H"\n  },\n  {\n    key: "I",\n    name: "I"\n  },\n  {\n    key: "J",\n    name: "J"\n  },\n  {\n    key: "K",\n    name: "K"\n  },\n  {\n    key: "L",\n    name: "L"\n  },\n  {\n    key: "M",\n    name: "M"\n  },\n  {\n    key: "N",\n    name: "N"\n  },\n  {\n    key: "O",\n    name: "O"\n  },\n  {\n    key: "P",\n    name: "P"\n  },\n  {\n    key: "Q",\n    name: "Q"\n  },\n  {\n    key: "R",\n    name: "R"\n  },\n  {\n    key: "S",\n    name: "S"\n  },\n  {\n    key: "T",\n    name: "T"\n  },\n  {\n    key: "U",\n    name: "U"\n  },\n  {\n    key: "V",\n    name: "V"\n  },\n  {\n    key: "W",\n    name: "W"\n  },\n  {\n    key: "X",\n    name: "X"\n  },\n  {\n    key: "Y",\n    name: "Y"\n  },\n  {\n    key: "Z",\n    name: "Z"\n  }\n];\n\n')])])]),t("h2",{attrs:{id:"解决滚动问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决滚动问题"}},[n._v("#")]),n._v(" 解决滚动问题")]),n._v(" "),t("p",[n._v("启动项目，进入歌手列表页后，你发现这个横向列表并不能滚动，我们再回顾下 better-scroll 的 (横向) 滚动原理，首先外面容器要宽度固定，其次内容宽度要大于容器宽度。")]),n._v(" "),t("p",[n._v("因此目前存在两个问题:")]),n._v(" "),t("ol",[t("li",[n._v("外部容器未限定宽度，也就是两个 Horizen 外面包裹的 div 元素。")]),n._v(" "),t("li",[n._v("内部宽度没有进行相应的计算，始终为屏幕宽度。")])]),n._v(" "),t("p",[n._v("现在就分别来解决这两个问题。")]),n._v(" "),t("p",[n._v("首先，新建 Singers/style.js 并增加：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import styled from'styled-components';\nimport style from '../../assets/global-style';\n\nexport const NavContainer  = styled.div`\n  box-sizing: border-box;\n  position: fixed;\n  top: 95px;\n  width: 100%;\n  padding: 5px;\n  overflow: hidden;\n`;\n\n")])])]),t("p",[n._v("在 Singers/index.js 中使用:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('import { NavContainer } from "./style";\n\n//...\n// 返回的 JSX\nreturn (\n  <NavContainer>\n    <Horizen list={categoryTypes} title={"分类 (默认热门):"}></Horizen>\n    <Horizen list={alphaTypes} title={"首字母:"}></Horizen>\n  </NavContainer>\n)\n//...\n\n')])])]),t("p",[n._v("接下来 ，我们进入 baseUI/horizen-item/index.js 中:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 加入声明\nconst Category = useRef (null);\n\n// 加入初始化内容宽度的逻辑\nuseEffect (() => {\n  let categoryDOM = Category.current;\n  let tagElems = categoryDOM.querySelectorAll ("span");\n  let totalWidth = 0;\n  Array.from (tagElems).forEach (ele => {\n    totalWidth += ele.offsetWidth;\n  });\n  categoryDOM.style.width = `${totalWidth}px`;\n}, []);\n\n// JSX 在Scroll下面，对第一个 div 赋予 ref\n<Scroll direction={"horizental"}>\n  <div ref={Category}>\n\n')])])]),t("h2",{attrs:{id:"点击-item-样式改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击-item-样式改变"}},[n._v("#")]),n._v(" 点击 item 样式改变")]),n._v(" "),t("p",[n._v("现在整个列表就可以滑动啦。不过还有一个问题，当我们点击某个 item 的时候，应该呈现选中样式，然后并没有，因为我们并没有在点击的时候改变 oldVal 的值。")]),n._v(" "),t("p",[n._v("现在进入到 Singers/index.js 中，我们加入部分逻辑后代码如下:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import React, {useState} from 'react';\nimport Horizen from '../../baseUI/horizen-item';\nimport { categoryTypes, alphaTypes } from '../../api/config';\nimport { NavContainer } from \"./style\";\n\nfunction Singers () {\n  let [category, setCategory] = useState ('');\n  let [alpha, setAlpha] = useState ('');\n\n  let handleUpdateAlpha = (val) => {\n    setAlpha (val);\n  }\n\n  let handleUpdateCatetory = (val) => {\n    setCategory (val);\n  }\n\n  return (\n    <NavContainer>\n      <Horizen \n        list={categoryTypes} \n        title={\"分类 (默认热门):\"} \n        handleClick={handleUpdateCatetory} \n        oldVal={category}></Horizen>\n      <Horizen \n        list={alphaTypes} \n        title={\"首字母:\"} \n        handleClick={val => handleUpdateAlpha (val)} \n        oldVal={alpha}></Horizen>\n    </NavContainer>\n  )\n}\n\nexport default React.memo (Singers);\n\n")])])]),t("p",[n._v("好，现在就有了我们开头的效果。现在你可以为所欲为地滑动、点击，都没有任何问题啦。")])])}),[],!1,null,null,null);e.default=s.exports}}]);