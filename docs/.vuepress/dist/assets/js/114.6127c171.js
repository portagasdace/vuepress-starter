(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{470:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"搭建-flutter-开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搭建-flutter-开发环境"}},[t._v("#")]),t._v(" 搭建 Flutter 开发环境")]),t._v(" "),r("p",[t._v("搭建 Flutter 开发环境，有两部分：")]),t._v(" "),r("h3",{attrs:{id:"_1-flutter-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-flutter-sdk"}},[t._v("#")]),t._v(" 1. Flutter SDK")]),t._v(" "),r("p",[t._v("Flutter 开发需要安装 Flutter SDK，这里会分别介绍 Flutter SDK 在 Windows、MacOS、Linux 三个平台上的安装过程。")]),t._v(" "),r("h3",{attrs:{id:"_2-flutter-ide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-flutter-ide"}},[t._v("#")]),t._v(" 2. Flutter IDE")]),t._v(" "),r("p",[t._v("安装完 Flutter SDK 后，想要开发 Flutter，还需要 IDE ，可以开发 Flutter 的 IDE 有两个：")]),t._v(" "),r("ul",[r("li",[t._v("Android Studio")]),t._v(" "),r("li",[t._v("VS Code")])]),t._v(" "),r("p",[t._v("这两个 IDE，你可以根据自己的习惯选择一个。但是推荐使用 VS Code，因为其运行不会占用太多的内存，小巧方便，功能强大。")]),t._v(" "),r("h2",{attrs:{id:"配置-flutter-中国镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-flutter-中国镜像"}},[t._v("#")]),t._v(" 配置 Flutter 中国镜像")]),t._v(" "),r("p",[t._v("在搭建 Flutter 环境之前，因为众所周知的原因，有可能被墙，所以需要先为 Flutter 配置中国镜像。")]),t._v(" "),r("h3",{attrs:{id:"中国镜像地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中国镜像地址"}},[t._v("#")]),t._v(" 中国镜像地址")]),t._v(" "),r("p",[t._v("国内有两个镜像可以用，一个就是官方 Flutter 社区的国内镜像，另一个是上海交通大学 Linux 用户组的镜像，建议用官方 Flutter 社区的国内镜像。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Flutter 社区")]),t._v(" "),r("p",[t._v("FLUTTER_STORAGE_BASE_URL: "),r("code",[t._v("https://storage.flutter-io.cn")])]),t._v(" "),r("p",[t._v("PUB_HOSTED_URL: "),r("code",[t._v("https://pub.flutter-io.cn")])])]),t._v(" "),r("li",[r("p",[t._v("上海交通大学 Linux 用户组")]),t._v(" "),r("p",[t._v("FLUTTER_STORAGE_BASE_URL: "),r("code",[t._v("https://mirrors.sjtug.sjtu.edu.cn")])]),t._v(" "),r("p",[t._v("PUB_HOSTED_URL: "),r("code",[t._v("https://dart-pub.mirrors.sjtug.sjtu.edu.cn")])])])]),t._v(" "),r("h3",{attrs:{id:"配置方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置方法"}},[t._v("#")]),t._v(" 配置方法")]),t._v(" "),r("p",[t._v("需要设置两个环境变量："),r("code",[t._v("PUB_HOSTED_URL")]),t._v(" 和 "),r("code",[t._v("FLUTTER_STORAGE_BASE_URL")]),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),r("ol",[r("li",[r("p",[r("code",[t._v("计算机")]),t._v(" -> "),r("code",[t._v("属性")]),t._v(" -> "),r("code",[t._v("高级系统设置")]),t._v(" -> "),r("code",[t._v("环境变量")]),t._v("，打开环境变量设置框。")])]),t._v(" "),r("li",[r("p",[t._v("在用户变量下，选择"),r("code",[t._v("新建环境变量")]),t._v("，添加如下的两个环境变量和值：")]),t._v(" "),r("p",[t._v("变量名")]),t._v(" "),r("p",[t._v("值")]),t._v(" "),r("p",[t._v("FLUTTER_STORAGE_BASE_URL")]),t._v(" "),r("p",[r("code",[t._v("https://storage.flutter-io.cn")])]),t._v(" "),r("p",[t._v("PUB_HOSTED_URL")]),t._v(" "),r("p",[r("code",[t._v("https://pub.flutter-io.cn")])])])]),t._v(" "),r("h4",{attrs:{id:"linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),r("p",[t._v("打开 "),r("code",[t._v("~/.bashrc")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$vim ~/.bashrc\n\n")])])]),r("p",[t._v("将镜像加入环境变量：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("export PUB_HOSTED_URL=https://pub.flutter-io.cn\nexport FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn\n\n")])])]),r("p",[t._v("保存后，在运行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$source ~/.bashrc\n\n")])])]),r("h4",{attrs:{id:"macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" MacOS")]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("~/.bash_profile")]),t._v(" 上添加：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("export PUB_HOSTED_URL=https://pub.flutter-io.cn\nexport FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn\n\n")])])]),r("p",[t._v("保存文件后，在运行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ source ~/.bash_profile\n\n")])])]),r("h2",{attrs:{id:"flutter-sdk-安装-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-sdk-安装-windows"}},[t._v("#")]),t._v(" Flutter SDK 安装 — Windows")]),t._v(" "),r("h3",{attrs:{id:"系统要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),r("p",[t._v("开发环境必须满足以下最低要求：")]),t._v(" "),r("ul",[r("li",[t._v("操作系统： Windows 7 SP1（64位）及以上")]),t._v(" "),r("li",[t._v("硬盘空间：400M（不包括 IDE 或工具的磁盘空间）")]),t._v(" "),r("li",[t._v("依赖工具：Flutter 依赖如下的工具：\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/setup/installing-windows-powershell",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows PowerShell 5.0"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for Windows 2.x"),r("OutboundLink")],1)])])])]),t._v(" "),r("h4",{attrs:{id:"windows-powershell-5-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-powershell-5-0"}},[t._v("#")]),t._v(" Windows PowerShell 5.0")]),t._v(" "),r("p",[t._v("Powershell 从 Windows7 时代开始内置于 Windows 系统当中，可以看作是微软对 cmd 的大升级，随着微软对 Win10 系统的不断升级，内置的默认命令行工具也逐渐从 cmd 迁移到了 PowerShell。")]),t._v(" "),r("p",[t._v("PowerShell 相对于 cmd 来说：")]),t._v(" "),r("ul",[r("li",[t._v("界面更美观")]),t._v(" "),r("li",[t._v("不仅完美支持传统 Windows 命令和 .net 库中的命令，也支持部分常用的 Linux 命令，功能更强大。")])]),t._v(" "),r("p",[t._v("经过验证，可以不使用 PowerShell ，也不用升级 PowerShell 的版本，使用 cmd 完全没问题。")]),t._v(" "),r("p",[t._v("如果你想升级 PowerShell 到 5.0，可以自行搜索升级方法。")]),t._v(" "),r("h3",{attrs:{id:"安装-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[t._v("#")]),t._v(" 安装 Git")]),t._v(" "),r("p",[t._v("从"),r("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里下载"),r("OutboundLink")],1),t._v(" Git 的安装包安装。")]),t._v(" "),r("p",[t._v("安装完后，打开 cmd 验证，输入：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git --version\n\n")])])]),r("p",[t._v("看到：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("C:\\Users\\Administrator>git --version\n2.13.0.windows.1\n\n")])])]),r("p",[t._v("说明 Git 安装成功，Git 用于管理 Flutter 的源码。")]),t._v(" "),r("h3",{attrs:{id:"搭建-android-开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搭建-android-开发环境"}},[t._v("#")]),t._v(" 搭建 Android 开发环境")]),t._v(" "),r("p",[t._v("为了 Flutter 可以编译成 Android APK，和运行在 Android 模拟器上，需要搭建 Android 开发环境。")]),t._v(" "),r("ol",[r("li",[t._v("安装 Android Studio，安装成功后，会自带 Android SDK。")])]),t._v(" "),r("p",[t._v("Androdi Studio 的下载地址有三个，选一个可以下载的地址：")]),t._v(" "),r("ul",[r("li",[t._v("官方地址："),r("a",{attrs:{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.com/studio"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("官方中文地址："),r("a",{attrs:{href:"https://developer.android.google.cn/studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.google.cn/studio/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("国内第三方地址："),r("a",{attrs:{href:"https://www.androiddevtools.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.androiddevtools.cn/"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"配置-android-sdk-环境变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-android-sdk-环境变量"}},[t._v("#")]),t._v(" 配置 Android SDK 环境变量")]),t._v(" "),r("p",[t._v("打开 Android Studio，选择 "),r("code",[t._v("Confiure")]),t._v(" -> 'SDK Manager'：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad6f1e45b0afc8?w=1568&h=1138&f=jpeg&s=142405",alt:""}})]),t._v(" "),r("p",[t._v("在打开的窗口中就能看到 Android SDK 的路径:")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad6f345c0331eb?w=2248&h=1616&f=jpeg&s=514678",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"创建-android-模拟器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建-android-模拟器"}},[t._v("#")]),t._v(" 创建 Android 模拟器")]),t._v(" "),r("p",[t._v("打开 Android Studio，选择 "),r("code",[t._v("Confiure")]),t._v(" -> 'AVD Manager'：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad70511c1d9ab4?w=1560&h=1116&f=jpeg&s=140309",alt:""}})]),t._v(" "),r("p",[t._v("在打开的页面里点击 "),r("code",[t._v("Create Virtual Device...")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad70542acbb598?w=422&h=114&f=jpeg&s=15720",alt:""}})]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("Phone")]),t._v(" 里选择一个设备，这里选择 Pixel 2 XL：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad705e5f0daaaf?w=2224&h=1568&f=jpeg&s=345100",alt:""}})]),t._v(" "),r("p",[t._v("然后一直点击 Next，就成功创建了 Android 模拟器。")]),t._v(" "),r("ol",[r("li",[r("code",[t._v("计算机")]),t._v(" -> "),r("code",[t._v("属性")]),t._v(" -> "),r("code",[t._v("高级系统设置")]),t._v(" -> "),r("code",[t._v("环境变量")]),t._v("，打开环境变量设置框。")]),t._v(" "),r("li",[t._v("在用户变量下，选择 "),r("code",[t._v("Path")]),t._v("，点击编辑,添加上 "),r("code",[t._v(";(替换成 Android SDK 路径)/tools;(替换成 Android SDK 路径)/platform-tools")])])]),t._v(" "),r("h3",{attrs:{id:"下载-flutter-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载-flutter-sdk"}},[t._v("#")]),t._v(" 下载 Flutter SDK")]),t._v(" "),r("ol",[r("li",[t._v("你可以在 "),r("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/archive?tab=windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter SDK"),r("OutboundLink")],1),t._v(" 的下载页面，选择你想要的版本，一般选择稳定版的，目前最新的稳定版是 "),r("a",{attrs:{href:"https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_v1.9.1+hotfix.2-stable.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.9.1+hotfix.2"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("li",[t._v("将 Flutter SDK 的 zip 包解压到一个目录下，例如 "),r("code",[t._v("E:\\src\\flutter")]),t._v("（目录随意，但是不要放在需要权限的目录下，例如 "),r("code",[t._v("C:\\Program Files\\")]),t._v(" ）")])]),t._v(" "),r("h3",{attrs:{id:"设置-flutter-sdk-的环境变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置-flutter-sdk-的环境变量"}},[t._v("#")]),t._v(" 设置 Flutter SDK 的环境变量")]),t._v(" "),r("ol",[r("li",[r("p",[r("code",[t._v("计算机")]),t._v(" -> "),r("code",[t._v("属性")]),t._v(" -> "),r("code",[t._v("高级系统设置")]),t._v(" -> "),r("code",[t._v("环境变量")]),t._v("，打开环境变量设置框。")])]),t._v(" "),r("li",[r("p",[t._v("在用户变量下，选择 "),r("code",[t._v("Path")]),t._v("，点击编辑：")]),t._v(" "),r("ul",[r("li",[t._v("如果已经存在 "),r("code",[t._v("Path")]),t._v("变量，则在原有的值后面先加 "),r("code",[t._v(";")]),t._v("，然后将 Flutter SDK 的完整路径 "),r("code",[t._v("E:\\src\\flutter\\bin")]),t._v(" 添加上。")]),t._v(" "),r("li",[t._v("如果没有 "),r("code",[t._v("Path")]),t._v(" 变量，则新建一个名为 "),r("code",[t._v("Path")]),t._v(" 的用户变量，然后将 Flutter SDK 的完整路径 "),r("code",[t._v("E:\\src\\flutter\\bin")]),t._v(" 添加上。")])]),t._v(" "),r("p",[t._v("编辑完成后，点击确定。")])])]),t._v(" "),r("h3",{attrs:{id:"运行-flutter-doctor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行-flutter-doctor"}},[t._v("#")]),t._v(" 运行 flutter doctor")]),t._v(" "),r("p",[t._v("为了验证 Flutter 是否安装成功，在 cmd 运行：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("flutter doctor\n\n")])])]),r("p",[t._v("如果看到输出如下的结果：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("C:\\Users\\Administrator>flutter doctor\nDoctor summary (to see all details, run flutter doctor -v):\n[✓] Flutter (Channel stable, v1.9.1-hotfix.2, on Microsoft Windows [Version 6.1.7601], locale zh-CN)\n[✓] Android toolchain - develop for Android devices (Android SDK 27.0.3)\n[✓] Android Studio (version 3.1)\n[!] Connected device \n    ! No devices available\n\n! Doctor found issues in 1 categories.\n\n")])])]),r("p",[t._v("说明，Flutter SDK 已经安装成功。但是也可能遇到 Flutter 的报错，请按照报错的提示修复，例如：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Some Android licenses not accepted（Android证书的问题）")]),t._v(" "),r("p",[t._v("运行 "),r("code",[t._v("flutter doctor --android-licenses")]),t._v(" 修复")])])]),t._v(" "),r("h2",{attrs:{id:"flutter-sdk-安装-linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-sdk-安装-linux"}},[t._v("#")]),t._v(" Flutter SDK 安装 — Linux")]),t._v(" "),r("p",[t._v("这里以 Ubuntu 为例。")]),t._v(" "),r("h3",{attrs:{id:"系统要求-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统要求-2"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),r("p",[t._v("开发环境必须满足以下最低要求：")]),t._v(" "),r("ul",[r("li",[t._v("操作系统：Linux （64位）")]),t._v(" "),r("li",[t._v("硬盘空间：600M（不包括 IDE 或工具的磁盘空间）")]),t._v(" "),r("li",[t._v("工具：Flutter需要用到如下的命令行（Linux 自带，无需额外安装）：\n"),r("ul",[r("li",[t._v("bash")]),t._v(" "),r("li",[t._v("curl")]),t._v(" "),r("li",[t._v("git 2.x")]),t._v(" "),r("li",[t._v("mkdir")]),t._v(" "),r("li",[t._v("rm")]),t._v(" "),r("li",[t._v("unzip")]),t._v(" "),r("li",[t._v("which")]),t._v(" "),r("li",[t._v("xz-utils")])])]),t._v(" "),r("li",[t._v("共享库：Flutter test的命令需要用到如下的库（Linux 自带，无需额外安装）：\n"),r("ul",[r("li",[t._v("libGLU.so.1")])])])]),t._v(" "),r("p",[t._v("这些工具 Ubuntu 默认已经安装，无需在进行操作。")]),t._v(" "),r("h3",{attrs:{id:"安装-android-开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-android-开发环境"}},[t._v("#")]),t._v(" 安装 Android 开发环境")]),t._v(" "),r("p",[t._v("为了 Flutter 可以编译成 Android APK，和运行在 Android 模拟器上，需要搭建 Android 开发环境。")]),t._v(" "),r("ol",[r("li",[t._v("安装 Android Studio，安装成功后，会自带 Android SDK。")])]),t._v(" "),r("p",[t._v("Androdi Studio 的下载地址有三个，选一个可以下载的地址：")]),t._v(" "),r("ul",[r("li",[t._v("官方地址："),r("a",{attrs:{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.com/studio"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("官方中文地址："),r("a",{attrs:{href:"https://developer.android.google.cn/studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.google.cn/studio/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("国内第三方地址："),r("a",{attrs:{href:"https://www.androiddevtools.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.androiddevtools.cn/"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"配置-android-sdk-环境变量-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-android-sdk-环境变量-2"}},[t._v("#")]),t._v(" 配置 Android SDK 环境变量")]),t._v(" "),r("p",[t._v("打开 Android Studio，选择 "),r("code",[t._v("Confiure")]),t._v(" -> 'SDK Manager'：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad6f1e45b0afc8?w=1568&h=1138&f=jpeg&s=142405",alt:""}})]),t._v(" "),r("p",[t._v("在打开的窗口中就能看到 Android SDK 的路径:")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad6f345c0331eb?w=2248&h=1616&f=jpeg&s=514678",alt:""}})]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("~/.bashrc")]),t._v(" 上添加：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("export ANDROID_HOME=/Users/****/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools\n\n")])])]),r("h4",{attrs:{id:"创建-android-模拟器-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建-android-模拟器-2"}},[t._v("#")]),t._v(" 创建 Android 模拟器")]),t._v(" "),r("p",[t._v("打开 Android Studio，选择 "),r("code",[t._v("Confiure")]),t._v(" -> 'AVD Manager'：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad70511c1d9ab4?w=1560&h=1116&f=jpeg&s=140309",alt:""}})]),t._v(" "),r("p",[t._v("在打开的页面里点击 "),r("code",[t._v("Create Virtual Device...")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad70542acbb598?w=422&h=114&f=jpeg&s=15720",alt:""}})]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("Phone")]),t._v(" 里选择一个设备，这里选择 Pixel 2 XL：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad705e5f0daaaf?w=2224&h=1568&f=jpeg&s=345100",alt:""}})]),t._v(" "),r("p",[t._v("然后一直点击 Next，就成功创建了 Android 模拟器。")]),t._v(" "),r("h3",{attrs:{id:"下载-flutter-sdk-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载-flutter-sdk-2"}},[t._v("#")]),t._v(" 下载 Flutter SDK")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("你可以在 "),r("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/archive?tab=linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter SDK"),r("OutboundLink")],1),t._v(" 的下载页面，选择你想要的版本，一般选择稳定版的，最新的稳定版是 "),r("a",{attrs:{href:"https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_v1.9.1+hotfix.2-stable.tar.xz",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.9.1+hotfix.2"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("选择一个目录，解压缩 Flutter SDK 的 zip 包，例如：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ cd ~/development\n$ tar xf ~/Downloads/flutter_linux_v1.0.0-stable.tar.xz\n\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"设置-flutter-sdk-的环境变量-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置-flutter-sdk-的环境变量-2"}},[t._v("#")]),t._v(" 设置 Flutter SDK 的环境变量")]),t._v(" "),r("p",[t._v("打开 "),r("code",[t._v("~/.bashrc")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$vim ~/.bashrc\n\n")])])]),r("p",[t._v("将 Flutter SDK 的完整路径加入环境变量，添加：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("export PATH=$PATH:~/development/flutter/bin\n\n")])])]),r("p",[t._v("保存后，在运行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$source ~/.bashrc\n\n")])])]),r("h3",{attrs:{id:"运行-flutter-doctor-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行-flutter-doctor-2"}},[t._v("#")]),t._v(" 运行 flutter doctor")]),t._v(" "),r("p",[t._v("为了验证 Flutter 是否安装成功，运行：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ flutter doctor\n\n")])])]),r("p",[t._v("如果看到输出如下的结果：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Doctor summary (to see all details, run flutter doctor -v):\n[✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Linux, locale zh_CN.UTF-8)\n[✓] Android toolchain - develop for Android devices (Android SDK 27.0.3)\n[✓] Android Studio (version 3.1)\n[!] Connected device \n    ! No devices available\n\n! Doctor found issues in 1 categories.\n\n")])])]),r("p",[t._v("说明，Flutter SDK 已经安装成功。但是也可能遇到 Flutter 的报错，请按照报错的提示修复，例如：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Some Android licenses not accepted（Android 证书的问题）")]),t._v(" "),r("p",[t._v("运行 "),r("code",[t._v("flutter doctor --android-licenses")]),t._v(" 修复")])])]),t._v(" "),r("h2",{attrs:{id:"flutter-sdk-安装-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-sdk-安装-macos"}},[t._v("#")]),t._v(" Flutter SDK 安装 — MacOS")]),t._v(" "),r("h3",{attrs:{id:"系统要求-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统要求-3"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),r("p",[t._v("开发环境必须满足以下最低要求：")]),t._v(" "),r("ul",[r("li",[t._v("操作系统： macOS （64位）")]),t._v(" "),r("li",[t._v("硬盘空间：700M（不包括 IDE 或工具的磁盘空间）")]),t._v(" "),r("li",[t._v("依赖工具：Flutter需要用到如下的命令行（MacOS 自带，无需额外安装）：\n"),r("ul",[r("li",[t._v("bash")]),t._v(" "),r("li",[t._v("curl")]),t._v(" "),r("li",[t._v("git 2.x")]),t._v(" "),r("li",[t._v("mkdir")]),t._v(" "),r("li",[t._v("rm")]),t._v(" "),r("li",[t._v("unzip")]),t._v(" "),r("li",[t._v("which")])])])]),t._v(" "),r("p",[t._v("这些工具 MacOS 默认已经安装，无需在进行操作。")]),t._v(" "),r("h3",{attrs:{id:"安装-android-开发环境-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-android-开发环境-2"}},[t._v("#")]),t._v(" 安装 Android 开发环境")]),t._v(" "),r("p",[t._v("为了 Flutter 可以编译成 Android APK，和运行在 Android 模拟器上，需要搭建 Android 开发环境。")]),t._v(" "),r("ol",[r("li",[t._v("安装 Android Studio，安装成功后，会自带 Android SDK。")])]),t._v(" "),r("p",[t._v("Androdi Studio 的下载地址有三个，选一个可以下载的地址：")]),t._v(" "),r("ul",[r("li",[t._v("官方地址："),r("a",{attrs:{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.com/studio"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("官方中文地址："),r("a",{attrs:{href:"https://developer.android.google.cn/studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.google.cn/studio/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("国内第三方地址："),r("a",{attrs:{href:"https://www.androiddevtools.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.androiddevtools.cn/"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"配置-android-sdk-环境变量-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-android-sdk-环境变量-3"}},[t._v("#")]),t._v(" 配置 Android SDK 环境变量")]),t._v(" "),r("p",[t._v("打开 Android Studio，选择 "),r("code",[t._v("Confiure")]),t._v(" -> 'SDK Manager'：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad6f1e45b0afc8?w=1568&h=1138&f=jpeg&s=142405",alt:""}})]),t._v(" "),r("p",[t._v("在打开的窗口中就能看到 Android SDK 的路径:")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad6f345c0331eb?w=2248&h=1616&f=jpeg&s=514678",alt:""}})]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("~/.bash_profile")]),t._v(" 上添加：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("export ANDROID_HOME=/Users/****/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools\n\n")])])]),r("h4",{attrs:{id:"创建-android-模拟器-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建-android-模拟器-3"}},[t._v("#")]),t._v(" 创建 Android 模拟器")]),t._v(" "),r("p",[t._v("打开 Android Studio，选择 "),r("code",[t._v("Confiure")]),t._v(" -> 'AVD Manager'：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad70511c1d9ab4?w=1560&h=1116&f=jpeg&s=140309",alt:""}})]),t._v(" "),r("p",[t._v("在打开的页面里点击 "),r("code",[t._v("Create Virtual Device...")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad70542acbb598?w=422&h=114&f=jpeg&s=15720",alt:""}})]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("Phone")]),t._v(" 里选择一个设备，这里选择 Pixel 2 XL：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/21/16ad705e5f0daaaf?w=2224&h=1568&f=jpeg&s=345100",alt:""}})]),t._v(" "),r("p",[t._v("然后一直点击 Next，就成功创建了 Android 模拟器。")]),t._v(" "),r("h3",{attrs:{id:"安装-ios-开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-ios-开发环境"}},[t._v("#")]),t._v(" 安装 iOS 开发环境")]),t._v(" "),r("p",[t._v("为了 Flutter 可以编译成 iOS 安装包，和运行在 iOS 模拟器上，需要搭建 iOS 开发环境。")]),t._v(" "),r("p",[t._v("在 MacOS 需要先安装 Xcode：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Xcode 版本需要 9.0 及以上（下载地址 "),r("a",{attrs:{href:"https://developer.apple.com/xcode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web download"),r("OutboundLink")],1),t._v(" 或者 "),r("a",{attrs:{href:"https://itunes.apple.com/us/app/xcode/id497799835",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac App Store"),r("OutboundLink")],1),t._v("）。")])]),t._v(" "),r("li",[r("p",[t._v("在 Terminal 运行：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$  sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer\n\n")])])]),r("p",[t._v("目的是使用最新版的 Xcode。")])]),t._v(" "),r("li",[r("p",[t._v("先打开 Xcode，同意 Xcode 的许可协议")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/8/169fc4f9ec134730?w=1204&h=908&f=jpeg&s=233926",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("然后在命令行运行：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ sudo xcodebuild -license\n\n")])])]),r("p",[t._v("会看到如下的内容")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("....\nBy typing 'agree' you are agreeing to the terms of the software license agreements. Type 'print' to print them or anything else to cancel, [agree, print, cancel]\n\n")])])]),r("p",[t._v("然后输入 "),r("code",[t._v("agree")]),t._v(" 回车。")]),t._v(" "),r("p",[t._v("然后 Xcode 的协议就签署成功了。")])])]),t._v(" "),r("p",[t._v("安装完 Xcode 之后，就可以将 Flutter 编译成 iOS 安装包了，电脑上也能运行 iOS 的模拟器。")]),t._v(" "),r("h3",{attrs:{id:"下载-flutter-sdk-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载-flutter-sdk-3"}},[t._v("#")]),t._v(" 下载 Flutter SDK")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("你可以在 "),r("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/archive?tab=macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter SDK"),r("OutboundLink")],1),t._v(" 的下载页面，选择你想要的版本，一般选择稳定版的，最新的稳定版是 "),r("a",{attrs:{href:"https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.9.1+hotfix.2-stable.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.9.1+hotfix.2"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("选一个路径来存放 Flutter SDK ，例如 "),r("code",[t._v("/Users/kk/sdk")]),t._v("， 在这个位置下解压缩 Flutter SDK 的 zip 包：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ cd /Users/kk/sdk\n$ unzip ~/Downloads/flutter_macos_v1.0.0-stable.zip\n\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"设置-flutter-sdk-的环境变量-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置-flutter-sdk-的环境变量-3"}},[t._v("#")]),t._v(" 设置 Flutter SDK 的环境变量")]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("~/.bash_profile")]),t._v(" 上添加（没有 .bash_profile ,可以新建一个）：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("export FLUTTER_HOME=/Users/kk/sdk\nexport PATH=$PATH:$FLUTTER_HOME/bin\n\n")])])]),r("p",[t._v("保存文件后，在运行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ source ~/.bash_profile\n\n")])])]),r("h3",{attrs:{id:"运行-flutter-doctor-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行-flutter-doctor-3"}},[t._v("#")]),t._v(" 运行 flutter doctor")]),t._v(" "),r("p",[t._v("为了验证 Flutter 是否安装成功，运行：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ flutter doctor\n\n")])])]),r("p",[t._v("如果看到输出如下的结果：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Doctor summary (to see all details, run flutter doctor -v):\n[✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Mac OS X 10.13.6 17G2208, locale zh-Hans-CN)\n[!] Android toolchain - develop for Android devices (Android SDK 28.0.3)\n    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses\n[!] iOS toolchain - develop for iOS devices (Xcode 10.1)\n    ✗ Verify that all connected devices have been paired with this computer in Xcode.\n      If all devices have been paired, libimobiledevice and ideviceinstaller may require updating.\n      To update with Brew, run:\n        brew update\n        brew uninstall --ignore-dependencies libimobiledevice\n        brew uninstall --ignore-dependencies usbmuxd\n        brew install --HEAD usbmuxd\n        brew unlink usbmuxd\n        brew link usbmuxd\n        brew install --HEAD libimobiledevice\n        brew install ideviceinstaller\n[✓] Android Studio (version 3.1)\n[✓] VS Code (version 1.30.2)\n[✓] Connected device (1 available)\n\n! Doctor found issues in 2 categories.\n\n")])])]),r("p",[t._v("说明，Flutter SDK 已经安装成功。但是也可以看到 flutter 的报错，请按照报错的提示修复，例如：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Android toolchain - develop for Android devices（Android证书的问题）")]),t._v(" "),r("p",[t._v("运行"),r("code",[t._v("flutter doctor --android-licenses")]),t._v("修复")])]),t._v(" "),r("li",[r("p",[t._v("iOS toolchain - develop for iOS devices（iOS的问题）")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[!] iOS toolchain - develop for iOS devices (Xcode 10.2)\n  ✗ libimobiledevice and ideviceinstaller are not installed. To install with Brew, run:\n      brew update\n      brew install --HEAD usbmuxd\n      brew link usbmuxd\n      brew install --HEAD libimobiledevice\n      brew install ideviceinstaller\n  ✗ ios-deploy not installed. To install:\n      brew install ios-deploy\n  ✗ CocoaPods not installed.\n      CocoaPods is used to retrieve the iOS platform side's plugin code that responds to your plugin usage on the Dart side.\n      Without resolving iOS dependencies with CocoaPods, plugins will not work on iOS.\n      For more info, see https://flutter.io/platform-plugins\n    To install:\n      brew install cocoapods\n      pod setup\n\n")])])]),r("p",[t._v("这里列出了出现的问题，并且给出了解决方案，需要你按照提示运行相应的命令。")])])]),t._v(" "),r("h2",{attrs:{id:"flutter-ide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-ide"}},[t._v("#")]),t._v(" Flutter IDE")]),t._v(" "),r("h3",{attrs:{id:"android-studio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android-studio"}},[t._v("#")]),t._v(" Android Studio")]),t._v(" "),r("p",[t._v("我们知道 Android Studio 是用来开发 Android 的，但是也可以开发 Flutter。")]),t._v(" "),r("h4",{attrs:{id:"安装-android-studio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-android-studio"}},[t._v("#")]),t._v(" 安装 Android Studio")]),t._v(" "),r("p",[t._v("版本要求：")]),t._v(" "),r("ul",[r("li",[t._v("Android Studio 3.0 及以后")])]),t._v(" "),r("p",[t._v("Androdi Studio 的下载地址有三个，选一个可以下载的地址：")]),t._v(" "),r("ul",[r("li",[t._v("官方地址："),r("a",{attrs:{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.com/studio"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("官方中文地址："),r("a",{attrs:{href:"https://developer.android.google.cn/studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.google.cn/studio/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("国内第三方地址："),r("a",{attrs:{href:"https://www.androiddevtools.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.androiddevtools.cn/"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"安装-flutter-插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-flutter-插件"}},[t._v("#")]),t._v(" 安装 Flutter 插件")]),t._v(" "),r("ol",[r("li",[t._v("打开 Android Studio")]),t._v(" "),r("li",[t._v("打开 plugin preferences (MacOS 是："),r("strong",[t._v("Android Studio > Preferences > Plugins")]),t._v(" ,Windows 和 Linux 是： "),r("strong",[t._v("File > Settings > Plugins")]),t._v(" )。如下图：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/16/168f41b6ffb5de6a?w=2274&h=1620&f=jpeg&s=306432",alt:""}})]),t._v(" "),r("p",[t._v("3. 点击 "),r("strong",[t._v("Browse repositories")]),t._v(", 搜索 "),r("strong",[t._v("Flutter")]),t._v(" ,如下图")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/16/168f41e4a19f2401?w=1872&h=1580&f=jpeg&s=363315",alt:""}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[t._v("选中 Flutter 插件并点击 "),r("strong",[t._v("Install")]),t._v(" 安装。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/1699368972105e96?w=1652&h=1362&f=jpeg&s=330127",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("安装完之后，点击 "),r("strong",[t._v("Restart Android Studio")]),t._v(" ，重启 Android Studio 。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/16993695f8f1b4c2?w=1652&h=1362&f=jpeg&s=317623",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("Android Studio 重启后，点击 "),r("strong",[t._v("File > New")]),t._v(" ，如果看到了 "),r("strong",[t._v("New Flutter Project..")]),t._v(" ，说明 Flutter 插件已经安装完成。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169936afe968d07b?w=1286&h=254&f=jpeg&s=104009",alt:""}})])])]),t._v(" "),r("h3",{attrs:{id:"vs-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[t._v("#")]),t._v(" VS Code")]),t._v(" "),r("p",[t._v("VS Code 是一个轻量级编辑器，支持 Flutter 的开发。")]),t._v(" "),r("h4",{attrs:{id:"安装-vs-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-vs-code"}},[t._v("#")]),t._v(" 安装 VS Code")]),t._v(" "),r("p",[t._v("版本要求：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code"),r("OutboundLink")],1),t._v(" 最新稳定版")])]),t._v(" "),r("h4",{attrs:{id:"安装-flutter-插件-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-flutter-插件-2"}},[t._v("#")]),t._v(" 安装 Flutter 插件")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("打开 VS Code。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("View > Command Palette…")]),t._v(" 或者快捷键 "),r("strong",[t._v("Shift+cmd+P")]),t._v("(MacOS) /"),r("strong",[t._v("Ctrl+Shift+P")]),t._v("(Windows、Linux)，打开命令面板。")])]),t._v(" "),r("li",[r("p",[t._v("输入 "),r("strong",[t._v("install")]),t._v(", 选择 "),r("strong",[t._v("Extensions: Install Extensions")]),t._v("，如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/16/168f4317aa5711ce?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("在 "),r("strong",[t._v("Extensions")]),t._v(" 的搜索框里输入 "),r("strong",[t._v("Flutter")]),t._v(",如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/16/168f442d0a5c25f8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("选择 "),r("strong",[t._v("Flutter")]),t._v(" 并点击 "),r("strong",[t._v("Install")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169936fdfca764a7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("安装完后，在点击 "),r("strong",[t._v("Reload")]),t._v("，重启 VS Code，如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/1699370e89aea497?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("View > Command Palette…")]),t._v("，或者快捷键 "),r("strong",[t._v("Shift+cmd+P")]),t._v("(MacOS) /"),r("strong",[t._v("Ctrl+Shift+P")]),t._v("(Windows、Linux)，打开命令面板。输入 "),r("strong",[t._v("Flutter")]),t._v(" ，如果看到如下图的 Flutter 命令，说明安装成功：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/16/168f449300e52630?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])])]),t._v(" "),r("blockquote",[r("p",[t._v("本小册中的 Flutter 代码都是使用 VS Code 开发的。而且本小册在使用 VS Code 的过程中都会对 VS Code 的功能进行说明，所以不用担心自己不会使用 VS Code。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);