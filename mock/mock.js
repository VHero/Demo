// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random
Random.email()
// => "n.clark@miller.io"
Mock.mock('@email')
// => "y.lee@lewis.org"
var date=Mock.mock({ 'list|1-10':[{ email: '@email' }] })

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'email|+1':'@email'
    }]
})
// 输出结果
console.log(JSON.stringify(date,null,4));