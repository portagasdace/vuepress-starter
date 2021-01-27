const fs = require('fs')
const path = require('path')

const __PWD__ = process.cwd()
const __DIR__ = path.join(__PWD__, '../../aa')

// fs.readdir(__DIR__, (err, files) => {
//   const sidebarChildren = []
//   if (err) {
//     return console.log('目录不存在')
//   }
//   for (let item of files) {
//     const fileName = item.split('.md')[0]
//     sidebarChildren.push(`/node-wxapp/${fileName}`)
//   }
//   console.log(sidebarChildren, 'sidebarChildren')
// })

fs.readdir(__DIR__, (err, files) => {
  const sidebar = []
  if (err) {
    return console.log('目录不存在')
  }
  for (let item of files) {
    const fileName = item.split('.md')[0]
    if (fileName !== '.DS_Store') {
      let obj = {
        title: fileName,
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,
        children: [],
      }
      fs.readdir(`${__DIR__}/${fileName}`, (err, filesChild) => {
        if (err) {
          return console.log('目录不存在')
        }
        for (let item of filesChild) {
          const _fileName = item.split('.md')[0]
          obj.children.push(`/${fileName}/${_fileName}`)
        }
        console.log(obj)

        sidebar.push(obj)
      })
    }
  }

})
