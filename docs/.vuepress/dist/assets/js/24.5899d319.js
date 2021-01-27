(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{380:function(v,t,_){"use strict";_.r(t);var a=_(42),r=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"少学些招式-多长些内力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#少学些招式-多长些内力"}},[v._v("#")]),v._v(" 少学些招式，多长些内力")]),v._v(" "),_("p",[v._v("从本节开始，我们进入“大厂真题解读与训练”环节。在进入正题之前，笔者想要先帮大家捋清楚几件事情："),_("br"),v._v("\n在2-23节的漫长的知识讲解过程中，我们学过的所有题目，都是"),_("strong",[v._v("实打实的大厂真题")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"不要相信-猜题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不要相信-猜题"}},[v._v("#")]),v._v(" 不要相信“猜题”")]),v._v(" "),_("p",[v._v("首先， “真题解读”!==“猜题”。"),_("strong",[v._v("本环节在整本小册中的作用，是对前述知识体系的补充")]),v._v("，意在帮助同学们"),_("strong",[v._v("扩展解题思路、强化做题手感")]),v._v("。"),_("br"),v._v("\n很多同学在各种营销号、培训机构广告的蛊惑下，潜意识里会觉得大公司总会有一套一成不变的面试套路，认为有类似于“面试题库”这样的稳定题源存在，自己或许可以从中谋求捷径，因此对面试猜题这种性质的行为抱有强烈的幻想。")]),v._v(" "),_("p",[v._v("我们刷题之旅的第一步，就是要打破这种幻想——算法面试并没有因公司而异的套路，唯一的“套路”只能是你扎实的算法基本功和丰富的解题思路方面的积累——这些东西是需要你真刀真枪地花时间和算法面对面搏斗才能沉淀下来的“内力”，唯有它能够以不变应万变。")]),v._v(" "),_("h2",{attrs:{id:"最长回文子串问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最长回文子串问题"}},[v._v("#")]),v._v(" 最长回文子串问题")]),v._v(" "),_("blockquote",[_("p",[v._v("题目描述：给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。")])]),v._v(" "),_("blockquote",[_("p",[v._v("示例 1："),_("br"),v._v('\n输入: "babad"'),_("br"),v._v('\n输出: "bab"'),_("br"),v._v('\n注意: "aba" 也是一个有效答案。')])]),v._v(" "),_("blockquote",[_("p",[v._v("示例 2："),_("br"),v._v('\n输入: "cbbd"'),_("br"),v._v('\n输出: "bb"')])]),v._v(" "),_("p",[_("strong",[v._v("命题关键字：字符串、动态规划")])]),v._v(" "),_("h3",{attrs:{id:"思路分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[v._v("#")]),v._v(" 思路分析")]),v._v(" "),_("p",[v._v("这道题最直接的思路仍然是暴力解法："),_("br"),v._v("\n定义两个指针 "),_("code",[v._v("i")]),v._v(" 和 "),_("code",[v._v("j")]),v._v("，用这两个指针嵌套两层循环，尝试枚举出给定字符串对应的所有可能的子序列，判断每一个子序列是否回文，进而计算长度，然后通过对比求出最大长度。"),_("br"),v._v("\n枚举子串需要两层循环，对应的复杂度是 "),_("code",[v._v("O(n^2)")]),v._v("；判断是否回文，又额外需要 "),_("code",[v._v("O(n)")]),v._v("的开销。因此，这个暴力解法的时间复杂度就是 "),_("code",[v._v("O(n^3)")]),v._v("。"),_("br"),v._v("\n由于这个复杂度过于辣鸡，我们看看就行了。下面抛弃本能，恢复理智，我们结合前面做题的经验，重新来看这道题。")]),v._v(" "),_("p",[v._v("题干中的“最长”二字，表明了这是一道“求最值”型问题。前面我们说过，看到最值，就要把动态规划调度进可用解题工具里。"),_("br"),v._v("\n继续往下分析，发现这道题中，较长回文子串中可能包含较短的回文子串（最优子结构）；若按照暴力解法来做，多次遍历的过程中不可避免地会涉及到对同一个回文子串的重复判断（重叠子问题），因此，这道题用动态规划求解是比较合理的。")]),v._v(" "),_("p",[v._v("这道题中，我们拿到的原始素材是一个字符串序列，符合“序列型”动态规划的特征。大家现在已经知道，对于序列型动态规划，我们总是需要以它的索引为线索去构造一维或二维的状态数组。对于这道题来说，由于定位任意子串需要的是两个索引，因此我们的状态数组应该是一个二维数组：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// 初始化一个二维数组\nlet dp = [];\nconst len = s.length\nfor (let i = 0; i < len; i ++) {\n    dp[i] = [];\n};\n\n")])])]),_("p",[v._v("由于"),_("code",[v._v("i")]),v._v("和"),_("code",[v._v("j")]),v._v("分别表示子串的两个端点，只要我们明确了这两个值，就能间接地求出子串的长度。因此"),_("code",[v._v("dp[i][j]")]),v._v("不必额外记录长度这个状态，只需要记录该区间内的字符串是否回文。")]),v._v(" "),_("h2",{attrs:{id:"从前序与中序遍历序列构造二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从前序与中序遍历序列构造二叉树"}},[v._v("#")]),v._v(" 从前序与中序遍历序列构造二叉树")]),v._v(" "),_("h2",{attrs:{id:"买卖股票的最佳时机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#买卖股票的最佳时机"}},[v._v("#")]),v._v(" 买卖股票的最佳时机")])])}),[],!1,null,null,null);t.default=r.exports}}]);