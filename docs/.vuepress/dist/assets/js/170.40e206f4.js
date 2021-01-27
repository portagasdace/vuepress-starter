(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{526:function(n,t,e){"use strict";e.r(t);var s=e(42),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"第-20-节-动态数据应用-·-应用高大上的动态数据流-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-20-节-动态数据应用-·-应用高大上的动态数据流-上"}},[n._v("#")]),n._v(" 第 20 节 动态数据应用 · 应用高大上的动态数据流（上）")]),n._v(" "),e("p",[n._v("我们已经学会了如何将一个不断生成的数据源展示在页面上并加以转换处理和过滤，但是到现在为止我们使用的都是通过自行模拟的实时数据源，并没有真正地接触到从其他系统得到的实时数据源。那么在本节中我们将要自己实现一个真正的实时数据源，并将其应用到我们的数据应用中。")]),n._v(" "),e("h2",{attrs:{id:"_20-1-构建真实实时数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-1-构建真实实时数据源"}},[n._v("#")]),n._v(" 20.1 构建真实实时数据源")]),n._v(" "),e("p",[n._v("笔者是一个游戏爱好者，前些天发现家里的网络在某一个时间段会变得非常不稳定，而在笔者喜欢的其中一款游戏中便自带了一个用于监控网络情况的数据图表工具。而这个图表的数据源其实就是通过对游戏服务器的 IP 进行持续的发送 Ping 请求，并记录其返回耗时。")]),n._v(" "),e("h3",{attrs:{id:"_20-1-1-ping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-1-1-ping"}},[n._v("#")]),n._v(" 20.1.1 Ping")]),n._v(" "),e("p",[n._v("而 Ping 工具事实上就是我们对网络情况进行监控的一个基本工具，我们可以使用这一行命令检查我们本地设备到 "),e("code",[n._v("www.baidu.com")]),n._v(" 所在服务器（经过 DNS 解析后的 CDN 节点）的网络情况。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$ ping www.baidu.com\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("PING www.a.shifen.com (14.215.177.39): 56 data bytes\n64 bytes from 14.215.177.39: icmp_seq=0 ttl=56 time=9.315 ms\n64 bytes from 14.215.177.39: icmp_seq=1 ttl=56 time=7.433 ms\n64 bytes from 14.215.177.39: icmp_seq=2 ttl=56 time=7.327 ms\n64 bytes from 14.215.177.39: icmp_seq=3 ttl=56 time=19.945 ms\n64 bytes from 14.215.177.39: icmp_seq=4 ttl=56 time=6.379 ms\n64 bytes from 14.215.177.39: icmp_seq=5 ttl=56 time=9.088 ms\n...\n\n")])])]),e("p",[n._v("我们可以看到其中的一个重要指标便是 "),e("code",[n._v("time")]),n._v(" 字段，这个字段所表示的便是从我们本地设备连接到 "),e("code",[n._v("www.baidu.com")]),n._v(" 所在 CDN 节点并完成返回的耗时。一般来说 Ping 工具会在上一次发送 Ping 信号后一秒进行下一次发送，而如果网络情况良好的话，几毫秒的耗时基本可以忽略不计并把这个数据看做一个平均一秒生成一个新数据的实时数据源。")]),n._v(" "),e("h3",{attrs:{id:"_20-1-2-commands-piping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-1-2-commands-piping"}},[n._v("#")]),n._v(" 20.1.2 Commands Piping")]),n._v(" "),e("p",[n._v("在 Unix 或 Linux 系统中，命令行有一个非常有用的特性叫命令串流（Pipe），意思是在一行命令中运行多个程序，每一个程序通过标准输入输入（Standrad Input/Output）按顺序串联形成一个串流。")]),n._v(" "),e("p",[n._v("假设有程序 "),e("code",[n._v("a")]),n._v(" 和程序 "),e("code",[n._v("b")]),n._v("，在命令行中运行 "),e("code",[n._v("a | b")]),n._v("。其中 "),e("code",[n._v("a")]),n._v(" 程序会向标准输出中打出 "),e("code",[n._v("Hello, World.")]),n._v("，那么在 "),e("code",[n._v("b")]),n._v(" 程序中就可以通过标准输入得到 "),e("code",[n._v("Hello, World.")]),n._v("。")]),n._v(" "),e("p",[n._v("比如假设在某一个文件夹下有许多不同的文件，我希望查找该文件夹根目录下文件名包含 "),e("code",[n._v(".md")]),n._v(" 的文件，就可以通过串流 "),e("code",[n._v("ls")]),n._v(" 命令（列出当前文件夹根目录下所有文件、文件夹）和 "),e("code",[n._v("grep")]),n._v(" 命令（按指定匹配模式匹配输入数据中的内容）来实现。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$ ls -l | grep .md\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("-rw-r--r--@  1 iwillwen  staff   7527 11 22  2017 15113423841119.md\n-rw-r--r--@  1 iwillwen  staff   1159 11 22  2017 15113423841120.md\n-rw-r--r--@  1 iwillwen  staff  16474 11 23  2017 15113424478129.md\n-rw-r--r--@  1 iwillwen  staff    461 11 23  2017 15113991864913.md\n-rw-r--r--@  1 iwillwen  staff   6021 11 26  2017 15116829262749.md\n...\n\n")])])]),e("p",[n._v("那么我们这里可以使用 "),e("code",[n._v("ping")]),n._v(" 命令对 "),e("code",[n._v("www.baidu.com")]),n._v(" 进行网络通信检查，并使用 GNU 中的 "),e("code",[n._v("awk")]),n._v(" 命令对 Ping 工具所返回的数据进行处理和提取。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$ ping www.baidu.com | awk 'match($0, /time=(.*)ms|timeout/) { print (RLENGTH > 7) ? substr($0, RSTART+5, RLENGTH-8) : 9999; fflush() }'\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("6.243\n9.578\n9.297\n7.441\n8.182\n35.143\n...\n\n")])])]),e("p",[n._v("现在我们已经得到了不断生成的实时数据源，但是我们要怎么将它变成一个我们的数据应用能够使用的数据源呢？我们还需要将其变成一个 Web 服务。")]),n._v(" "),e("h3",{attrs:{id:"_20-1-3-pipe-stdout-to-web-with-node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-1-3-pipe-stdout-to-web-with-node-js"}},[n._v("#")]),n._v(" 20.1.3 Pipe STDOUT to Web with Node.js")]),n._v(" "),e("p",[n._v("我们需要将来自标准输入的内容变成一个 Web 服务以提供给基于 JavaScript 的数据应用使用，而比较可惜的我们目前找不到一个现成的通用工具来实现这个需求。所以我们需要借助 Node.js 的 Web 服务能力来实现这个需求，另外我们还需要使用到 Unix 或 Linux 自带的 "),e("code",[n._v("nc")]),n._v(" 工具。")]),n._v(" "),e("p",[e("code",[n._v("nc")]),n._v(" 工具可以将来自标准输入的数据通过 TCP 连接传递到指定服务上。而我们还需要使用 Node.js 分别构建一个 TCP 服务和 HTTP 服务，分别用于接收来自 "),e("code",[n._v("nc")]),n._v(" 的 TCP 数据流和为 JavaScript 数据应用提供 HTTP 接口。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/24/1687f5b9edd33604?w=711&h=192&f=png&s=14681",alt:""}})]),n._v(" "),e("p",[n._v("具体 Node.js 程序代码如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// shells-web.js\nconst http          = require('http')\nconst net           = require('net')\nconst url           = require('url')\nconst { Transform } = require('stream')\n\nconst streams = {}\n\nconst HTTP_PORT = 8080\nconst NET_PORT  = 1337\n\nconst httpServer = http.createServer((req, res) => {\n  const id = url.parse(req.url).pathname.substr(1)\n\n  if (!streams[id]) {\n    res.writeHead(404)\n    res.end('Stream not found.')\n    return\n  }\n\n  res.writeHead(200, {\n    'Connection': 'keep-alive',\n    'Content-Type': 'text/plain',\n    'Access-Control-Allow-Origin': '*'\n  })\n  res.flushHeaders()\n  streams[id]\n    .on('')\n    .pipe(res)\n})\n\nconst ncServer = net.createServer(connection => {\n  const id = Math.random().toString(32).substr(2)\n\n  const stream = new Transform({\n    transform(chunk, encoding, callback) {\n      callback(null, chunk)\n    }\n  })\n\n  connection.pipe(stream)\n  connection.once('end', () => {\n    stream.destroy()\n    delete streams[id]\n  })\n\n  streams[id] = stream\n\n  connection.write(`Pipeline is served on http://localhost:${HTTP_PORT}/${id}\\n`)\n  connection.write(`Example: curl -v http://localhost:${HTTP_PORT}/${id}`)\n})\n\nncServer.listen(NET_PORT, () => {\n  console.log(`Net Server is binding on localhost:${NET_PORT}`)\n})\nhttpServer.listen(HTTP_PORT, () => {\n  console.log(`HTTP Server is binding on localhost:${HTTP_PORT}`)\n})\n\n")])])]),e("p",[n._v("使用 Node.js 运行这个程序便可以分别在 "),e("code",[n._v("1337")]),n._v(" 端口和 "),e("code",[n._v("8080")]),n._v(" 端口开启 TCP 服务和 HTTP 服务。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$ node shells-web.js\nNet Server is binding on localhost:1337\nHTTP Server is binding on localhost:8080\n\n")])])]),e("h3",{attrs:{id:"_20-1-4-ping-→-web"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-1-4-ping-→-web"}},[n._v("#")]),n._v(" 20.1.4 Ping → Web")]),n._v(" "),e("p",[n._v("当前面的准备工作都完成以后，我们就可以将这些都串联起来，为 JavaScript 服务提供一个基于 Ping 工具的实时数据源了。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$ ping www.baidu.com | awk 'match($0, /time=(.*)ms|timeout/) { print (RLENGTH > 7) ? substr($0, RSTART+5, RLENGTH-8) : 9999; fflush() }' | nc localhost 1337\nPipeline is served on http://localhost:8080/<random id>\nExample: curl -v http://localhost:8080/<random id>\n\n")])])]),e("p",[n._v("现在我们使用 "),e("code",[n._v("curl")]),n._v(" 工具来验证一下我们的转换工具是否生效了。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$ curl -v http://localhost:8080/<random id>\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("*   Trying ::1...\n* TCP_NODELAY set\n* Connected to localhost (::1) port 8080 (#0)\n> GET /lb83qkua0eo HTTP/1.1\n> Host: localhost:8080\n> User-Agent: curl/7.54.0\n> Accept: */*\n>\n< HTTP/1.1 200 OK\n< Connection: keep-alive\n< Content-Type: text/plain\n< Access-Control-Allow-Origin: *\n< Date: Wed, 23 Jan 2019 14:31:28 GMT\n< Transfer-Encoding: chunked\n<\n6.428\n7.196\n7.643\n7.356\n28.557\n7.423\n8.584\n...\n\n")])])]),e("p",[n._v("非常好！值得一提的是，我们使用 Node.js 所创建的 HTTP 服务是以 HTTP 长连接的方式将 "),e("code",[n._v("ping")]),n._v(" 的数据不断输出的，而不是利用普通的 TCP 连接。而这种形式的 HTTP 接口在浏览器端的 JavaScript 中该如何使用呢？")]),n._v(" "),e("h2",{attrs:{id:"_20-2-应用-高大上的动态数据流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-2-应用-高大上的动态数据流"}},[n._v("#")]),n._v(" 20.2 应用“高大上的动态数据流”")]),n._v(" "),e("p",[n._v("得到了真正的动态实时数据流以后，我们就要在我们的 JavaScript 数据应用中进行应用了。但是我们前面使用 Node.js 作为基础平台提供的 HTTP 接口是一个长连接的方式不断提供数据的，那么我们应该如何将长连接中不断出现的新数据获得得到呢？")]),n._v(" "),e("h3",{attrs:{id:"_20-2-1-读取长连接数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-2-1-读取长连接数据"}},[n._v("#")]),n._v(" 20.2.1 读取长连接数据")]),n._v(" "),e("p",[n._v("Fetch API 是浏览器为 JavaScript 提供的一个用于访问 HTTP 接口的 API。但是一般来说我们在使用 "),e("code",[n._v("fetch")]),n._v(" 函数都是用于获取一次性输出完成的 HTTP 接口，其实对于这种长连接接口，我们也使用 "),e("code",[n._v("fetch")]),n._v(" 来获取其中的实时数据。")]),n._v(" "),e("p",[e("code",[n._v("fetch")]),n._v(" 函数执行之后在其返回的 "),e("code",[n._v("Promise")]),n._v(" 对象中会提供一个 "),e("code",[n._v("Response")]),n._v(" 对象，我们可以通过这个对象再取得一个 "),e("code",[n._v("ReadableStreamDefaultReader")]),n._v(" 对象，这个 "),e("code",[n._v("reader")]),n._v(" 对象便是我们读取数据流中的数据的入口。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("fetch('http://localhost:8080/<random id>')\n  .then(res => res.body.getReader())\n  .then(reader => {\n    // ...\n  })\n\n")])])]),e("p",[n._v("我们调用 "),e("code",[n._v("reader")]),n._v(" 对象的 "),e("code",[n._v("read")]),n._v(" 方法，该方法会返回一个 "),e("code",[n._v("Promise")]),n._v(" 对象，该 "),e("code",[n._v("Promise")]),n._v(" 对象的结果是一个包含 "),e("code",[n._v("value")]),n._v(" 和 "),e("code",[n._v("done")]),n._v(" 的对象。"),e("code",[n._v("value")]),n._v(" 是一个 "),e("code",[n._v("Uint8Array")]),n._v(" 数组，我们可以将其理解为二进制数据，我们需要首先将其转换为字符串然后再解析为数字也就是我们需要的网络延迟值。而 "),e("code",[n._v("done")]),n._v(" 则是当前长连接是否已经被关闭，如果还没有被关闭我们则需要继续读取。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('const read = ({ value, done }) => {\n  if (done) return\n  \n  // 解析数据\n  const ping = parseFloat(new TextDecoder("utf-8").decode(value))\n  if (ping > 0) {\n    // 输出获取到的 ping 值\n    console.log(ping)\n  }\n  \n  // 继续读取\n  if (!done) reader.read().then(read)\n}\n\nreader.read().then(read)\n\n')])])]),e("p",[n._v("最后我们把这些都整合到一起，做成一个封装好的数据源对象。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class PingSource {\n\n  constructor(streamUrl, onData) {\n    this.streamUrl = streamUrl\n    this.dataset = []\n    this.onData = onData\n  }\n\n  load(streamUrl) {\n    this.streamUrl = streamUrl\n    this.loadStream()\n  }\n\n  loadStream() {\n    this.controller = new AbortController()\n    const signal = this.controller.signal\n\n    fetch(this.streamUrl, {\n      signal\n    })\n      .then(res => res.body.getReader())\n      .then(reader => {\n        const read = ({ value, done }) => {\n          if (done || signal.aborted) return\n\n          const ping = parseFloat(new TextDecoder(\"utf-8\").decode(value))\n\n          if (ping > 0) {\n            const now = Date.now()\n            if (this.onData) {\n              this.onData(ping, now)\n            }\n\n            this.dataset.push({\n              ping, timestamp: now\n            })\n          }\n\n          if (!done && !signal.aborted) {\n            reader.read()\n              .then(read)\n              .catch(handleError)\n          }\n        }\n\n        reader.read()\n          .then(read)\n          .catch(handleError)\n      })\n  }\n\n  stop() {\n    if (this.controller) {\n      this.controller.abort()\n    }\n  }\n\n}\n\nfunction handleError(err) {\n  return false\n  // console.error(err)\n}\n\n// 创建数据源\nconst pingSource = new PingSource()\n// 加载数据\npingSource.load('http://localhost:8080/<random id>')\n// 验证数据源实时性\nsetInterval(() => {\n  console.log(pingSource.dataset.length)\n}, 1e3)\n//=> 1\n//=> 2\n//=> 3\n// ...\n\n")])])]),e("p",[n._v("这样我们的实时数据源便已经准备好了！接下来我们把他跟我们前面所学过的知识结合起来吧。")]),n._v(" "),e("h3",{attrs:{id:"_20-2-2-展示数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-2-2-展示数据"}},[n._v("#")]),n._v(" 20.2.2 展示数据")]),n._v(" "),e("p",[n._v("我们所得到的实时数据流是一个以数值为内容的时间序列，所以我们可以使用折线图来表达这些数据。我们在 "),e("code",[n._v("PingSource")]),n._v(" 的构建函数中提供了一个 "),e("code",[n._v("onData")]),n._v(" 的回调函数接口，我们可以通过这个回调函数不断地将新数据传递给 ECharts，已达到数据不断出现在图表上的目的。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const chartEl = document.querySelector('#chart')\nconst myChart = echarts.init(chartEl)\n\n// 创建数据源\nconst pingSource = new PingSource('http://localhost:8080/<random id>', () => {\n  myChart.setOption({\n    dataset: {\n      source: pingSource.dataset\n    },\n    xAxis: {\n      type: 'time'\n    },\n    yAxis: {\n      type: 'value'\n    },\n    tooltip: {\n      trigger: 'axis'\n    },\n    series: {\n      type: 'line',\n      name: 'ping',\n      encode: {\n        x: 'timestamp',\n        y: 'ping'\n      }\n    }\n  })\n})\n// 开始加载数据\npingSource.loadStream()\n\n")])])]),e("p",[n._v("DEMO 在线地址（需自行更改数据流地址）："),e("a",{attrs:{href:"https://codepen.io/iwillwen/pen/pGJvNe?editors=0010",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://codepen.io/iwillwen/pen/pGJvNe?editors=0010"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/24/1687f5bd9c690f74?w=596&h=391&f=gif&s=791928",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"_20-3-优化数据源-为实时数据流添加自动过期机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-3-优化数据源-为实时数据流添加自动过期机制"}},[n._v("#")]),n._v(" 20.3 优化数据源——为实时数据流添加自动过期机制")]),n._v(" "),e("p",[n._v("我们已经将我们的实时数据源与我们的图表连接起来，并可以在页面上看到不断生成的实时数据了。但是过不了多久我们就会发现，实时数据不断在图表上堆积但实时数据很多时候是具有较短的时效性的，而我们现在所使用的网络监控数据便是其中的一种。我们并不需要关心 1 分钟甚至 30 秒以前的网络状态，我只需要知道很短的时间内我的网络状况即可。")]),n._v(" "),e("p",[n._v("那么为了避免出现图表上存在过多无用数据，我们需要为我们的实时数据源添加自动过期的机制。一般来说自动过期的实现方法是为数据添加 TTL 参数（Time To Live，存活时间），但是 TTL 的实际实现细节是十分复杂的，在这里我们可以进行取巧。前面说到 Ping 工具我们可以看做是一个每秒钟产生一次数据的数据源，那么加入我们需要为我们的每一个 ping 数据添加一个 30 秒的 TTL 参数，即每一个数据可存活 30 秒。在当前场景中可以近似的看做是我们只存 30 秒的数据，即只存储最近 30 个实时数据，一旦数据集中的数据个数超过 30 便将前面的数据删除。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class PingSource {\n  // ...\n  \n  setTTL(seconds) {\n    this.ttl = seconds\n  }\n\n  loadStream() {\n    // ...\n    const read = ({ value, done }) => {\n      // ...\n      if (ping > 0) {\n        // 检查超时\n        if (this.ttl && this.ttl > 0 && this.dataset.length === this.ttl) {\n          // 到达超时上线，删除第一个数据\n          this.dataset.shift()\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n\n")])])]),e("p",[n._v("我们将这个特性应用到图表上便可以实现这样的效果。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// ...\n\n// 设置超时\npingSource.setTTL(30)\n// 开始加载数据\npingSource.loadStream()\n\n")])])]),e("p",[n._v("DEMO 在线地址："),e("a",{attrs:{href:"https://codepen.io/iwillwen/pen/XObmNd?editors=0010",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://codepen.io/iwillwen/pen/XObmNd?editors=0010"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/24/1687f5bfaf06d77c?w=560&h=351&f=gif&s=220586",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"_20-4-为网络监控应用添加异常检测机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-4-为网络监控应用添加异常检测机制"}},[n._v("#")]),n._v(" 20.4 为网络监控应用添加异常检测机制")]),n._v(" "),e("p",[n._v("一个像是心电图的实时网络状况监控图表已经通过我们的努力展示在了我们的数据应用上，但是一般来说在有监控功能的同时，还需要具有异常检测功能。也就是说我们用于监控网络波动的数据应用，除了让我们知道当前 ping 值情况以外，还需要具有异常检测、报警的功能。")]),n._v(" "),e("p",[n._v("但是我们又如何才能知道当前数据是否异常呢？这里便需要使用到一些统计方法。用于检测某一个数据点是否为一个数据系列中的异常值（统计学中可以称之为离群值，Outlier）的方法有很多，比如均值检验、方差检验等等。但这些对于不熟悉统计学的同学来说还是有一些复杂，所以我们这里会使用一种非常简单、便于计算也便于理解的方法来进行判断。")]),n._v(" "),e("h3",{attrs:{id:"_20-4-1-异常值检测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-4-1-异常值检测"}},[n._v("#")]),n._v(" 20.4.1 异常值检测")]),n._v(" "),e("p",[n._v("还记得我们在第 16 节中曾经学习过一种名为 SPC 控制图的复杂数据图表吗？SPC 控制图引入了一种叫做控制区域的概念，我们便可以借用这个概念来对异常值进行检测。若当前 ping 值超过区域 A 的控制上限（数据均值加 3 倍的标准差）时，便将其判定为异常值。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/24/1687f5cbfa8da122?w=460&h=400&f=png&s=25799",alt:""}})]),n._v(" "),e("p",[n._v("其中我们选用当前值以前的数据作为判定依据，因为假若当前数据为一个非常离谱的异常值（比如前面我们在配置 "),e("code",[n._v("awk")]),n._v(" 工具时便设定了如果 ping 信号超时便返回 9999 毫秒），所计算出来的标准差也会大得离谱，可能导致判定失准。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function sdBy(array, path) {\n  const mean = _.meanBy(array, path)\n  \n  const top = array.map(row => _.get(row, path))\n    .map(function(x) {\n      return Math.pow(x - mean, 2)\n    })\n    .reduce(function(left, right) {\n      return left + right\n    })\n  const bottom = array.length - 1\n  \n  return Math.sqrt(top / bottom)\n}\n\n// 对前面的数据进行计算判断\nconst previousPings = pingSource.dataset.slice(0, pingSource.dataset.length - 1)\nconst meanPing = _.meanBy(previousPings, 'ping')\nconst sigma = sdBy(previousPings, 'ping')\n\nconst isOutlier =\n  !(this.pingSource.dataset.length < 5) &&                            // 数据量判断\n  (this.threshold && this.threshold > 0 && ping > this.threshold) &&  // 阈值判断\n  ping > (meanPing + 3 * sigma)                                       // 均值 + 3 * Sigma 判断\n\n")])])]),e("p",[n._v("当判定一个 ping 值为异常值时，我们便将其记录下来。为了能够方便地对异常值进行管理和展示，我们也同样为异常值准备一个控制单元，并且将其应用到图表上进行展示。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class OutlierSource {\n  constructor(pingSource, onSlow) {\n    this.pingSource = pingSource\n    this.onSlow = onSlow\n    this.dataset = []\n  }\n  \n  setTTL(seconds) {\n    this.ttl = seconds\n  }\n  \n  computeAndAdd(ping, timestamp) {\n    // 对前面的数据进行计算判断\n    const previousPings = this.pingSource.dataset.slice(0, this.pingSource.dataset.length - 1)\n    const meanPing = _.meanBy(previousPings, 'ping')\n    const sigma = sdBy(previousPings, 'ping')\n  \n    const isOutlier = ping > (meanPing + 3 * sigma) // 均值 + 3 * Sigma 判断\n  \n    if (this.ttl && this.ttl > 0 && this.dataset.length === this.ttl) {\n      this.dataset.shift()\n    }\n\n    if (isOutlier) {\n      this.dataset.push({\n        ping, timestamp\n      })\n\n      if (this.onSlow) {\n        try {\n          this.onSlow(ping, timestamp)\n        } catch(err) {\n          handleError(err)\n        }\n      }\n    } else {\n      this.dataset.push({\n        ping: 0, timestamp\n      })\n    }\n  }\n}\n\n")])])]),e("p",[n._v("但这个时候我们又发现在一般情况下网络都是非常好的，只是稍微出现了一些小波动，而这个判定方法依然将其判定为异常值。所以除了通过控制上限进行判定外，我们还需要添加量个阈值控制。两个阈值分别代表不同的程度，一个较低的阈值代表超过该阈值的 ping 才"),e("strong",[n._v("有可能")]),n._v("是异常值，而另外一个较高的阈值代表超过该阈值的 ping "),e("strong",[n._v("一定")]),n._v("是异常值。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class OutlierSource {\n  // ...\n\n  setThreshold(ping) {\n    this.threshold = ping\n  }\n\n  setMaxPing(ping) {\n    this.max = ping\n  }\n  \n  computeAndAdd(ping, timestamp) {\n    // ...\n  \n    const isOutlier =\n      (this.max && this.max > 0 && ping > this.max) ||                    // 接受上限判断\n      (this.threshold && this.threshold > 0 && ping > this.threshold) &&  // 阈值判断\n      ping > (meanPing + 3 * sigma)                                       // 均值 + 3 * Sigma 判断\n      \n    // ...\n  }\n}\n\n// 设置异常阈值\noutlierSource.setThreshold(30)\n// 设置接受上限\noutlierSource.setMaxPing(460)\n\n")])])]),e("h3",{attrs:{id:"_20-4-2-展示异常情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-4-2-展示异常情况"}},[n._v("#")]),n._v(" 20.4.2 展示异常情况")]),n._v(" "),e("p",[n._v("这些都整合起来以后，让我们看一下在图表上表达的效果。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class OutlierSource {\n  constructor(pingSource, onSlow) {\n    this.pingSource = pingSource\n    this.onSlow = onSlow\n    this.dataset = []\n  }\n  \n  setTTL(seconds) {\n    this.ttl = seconds\n  }\n\n  setThreshold(ping) {\n    this.threshold = ping\n  }\n\n  setMaxPing(ping) {\n    this.max = ping\n  }\n  \n  computeAndAdd(ping, timestamp) {\n    // 对前面的数据进行计算判断\n    const previousPings = this.pingSource.dataset.slice(0, this.pingSource.dataset.length - 1)\n    const meanPing = _.meanBy(previousPings, 'ping')\n    const sigma = sdBy(previousPings, 'ping')\n  \n    const isOutlier =\n      (this.max && this.max > 0 && ping > this.max) ||                    // 接受上限判断\n      (this.threshold && this.threshold > 0 && ping > this.threshold) &&  // 阈值判断\n      ping > (meanPing + 3 * sigma)                                       // 均值 + 3 * Sigma 判断\n  \n    if (this.ttl && this.ttl > 0 && this.dataset.length === this.ttl) {\n      this.dataset.shift()\n    }\n\n    if (isOutlier) {\n      this.dataset.push({\n        ping, timestamp\n      })\n\n      if (this.onSlow) {\n        try {\n          this.onSlow(ping, timestamp)\n        } catch(err) {\n          handleError(err)\n        }\n      }\n    } else {\n      this.dataset.push({\n        ping: 0, timestamp\n      })\n    }\n  }\n}\n\nfunction handleError(err) {\n  return false\n  // console.error(err)\n}\n\nfunction sdBy(array, path) {\n  const mean = _.meanBy(array, path)\n  \n  const top = array.map(row => _.get(row, path))\n    .map(function(x) {\n      return Math.pow(x - mean, 2)\n    })\n    .reduce(function(left, right) {\n      return left + right\n    })\n  const bottom = array.length - 1\n  \n  return Math.sqrt(top / bottom)\n}\n\nconst chartEl = document.querySelector('#chart')\nconst myChart = echarts.init(chartEl)\n\nconst outliers = []\n\n// 创建数据源\nconst pingSource = new PingSource()\n// 创建离群值处理实例\nconst outlierSource = new OutlierSource(pingSource, ping => {\n  console.warn(`NETWORK SLOW!! ${ping}ms`)\n})\npingSource.load('http://localhost:8080/77sl06lf3io', (ping, timestamp) => {\n  outlierSource.computeAndAdd(ping, timestamp)\n  myChart.setOption({\n    dataset: [\n      {\n        source: pingSource.dataset\n      },\n      {\n        source: outlierSource.dataset\n      }\n    ],\n    xAxis: {\n      type: 'time'\n    },\n    yAxis: {\n      type: 'value'\n    },\n    tooltip: {\n      trigger: 'axis'\n    },\n    series: [\n      {\n        type: 'line',\n        name: 'ping',\n        encode: {\n          x: 'timestamp',\n          y: 'ping'\n        }\n      },\n      {\n        type: 'bar',\n        name: 'outlier',\n        datasetIndex: 1,\n        encode: {\n          x: 'timestamp',\n          y: 'ping'\n        }\n      }\n    ],\n    animation: false\n  })\n})\n// 设置超时\nconst TTL = 30\npingSource.setTTL(TTL)\noutlierSource.setTTL(TTL)\n// 设置异常阈值\noutlierSource.setThreshold(30)\n// 设置接受上线\noutlierSource.setMaxPing(460)\n\n")])])]),e("p",[n._v("DEMO 在线地址："),e("a",{attrs:{href:"https://codepen.io/iwillwen/pen/bzdKYY?editors=0010",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://codepen.io/iwillwen/pen/bzdKYY?editors=0010"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/24/1687f5c50f57c457?w=576&h=352&f=gif&s=182306",alt:""}})]),n._v(" "),e("h3",{attrs:{id:"_20-4-3-展示异常总体情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-4-3-展示异常总体情况"}},[n._v("#")]),n._v(" 20.4.3 展示异常总体情况")]),n._v(" "),e("p",[n._v("除了可以在图表上展示出每一个异常值情况外，我们还可以用一个"),e("strong",[n._v("仪表盘")]),n._v("图表来展示最近一段时间内的网络情况，比如我们就用异常值的个数占一段时间内的总数据数量的比例作为我们评价网络情况的一个指标。")]),n._v(" "),e("p",[n._v("我们可以在 "),e("code",[n._v("OutlierStore")]),n._v(" 上添加一个 Getter 来取得真实的异常值数量，然后在 ECharts 图表的配置上添加一个仪表盘图表以展示当前整体网络状况。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class OutlierSource {\n  // ...\n  \n  get count() {\n    return this.dataset.filter(({ ping }) => ping > 0).length\n  }\n}\n\n// ...\n\nmyChart.setOption({\n  // ...\n  \n  series: [\n    // ...\n    {\n      name: '异常率',\n      type: 'gauge',\n      center: [ '80%', '55%' ],\n      detail: { formatter:'{value}%' },\n      animation: true,\n      axisLine: {\n        lineStyle: {\n          color: [[0.2, '#91c7ae'], [0.6, '#63869e'], [1, '#c23531']]\n        }\n      },\n      data: [\n        {\n          value: (outlierSource.count / TTL * 100).toFixed(2),\n          name: '异常率'\n        }\n      ]\n    }\n  ]\n})\n\n")])])]),e("p",[n._v("DEMO 在线地址："),e("a",{attrs:{href:"https://codepen.io/iwillwen/pen/OdVddO?editors=0010",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://codepen.io/iwillwen/pen/OdVddO?editors=0010"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/24/1687f5c6f4349677?w=912&h=353&f=gif&s=608366",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),e("p",[n._v("这一节中，我们学习了如何使用一系列简单的工具创造一个真实的实时数据源，并将其应用到了我们的 JavaScript 数据应用中。我们还是用了一些非常简单的统计方法来对我们的数据进行一些检验和判定。")]),n._v(" "),e("p",[n._v("下一节将会是本小册的最后一节，我们会从一个更为实际的场景出发，开发一个具有实际用途的、可交互的数据应用。")]),n._v(" "),e("h3",{attrs:{id:"习题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#习题"}},[n._v("#")]),n._v(" 习题")]),n._v(" "),e("p",[n._v("像笔者一样，从身边的实际体验中寻找灵感，看看有哪些是可以变成我们数据应用的统计、研究对象的，做成一个小 DEMO 跟大家分享一下吧！")])])}),[],!1,null,null,null);t.default=a.exports}}]);