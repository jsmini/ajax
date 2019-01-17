# 文档
这是一个小型的ajax库，具有简单的发送ajax请求的功能，还包含jsonp跨域。不依赖jQuery，不用负担jQuery复杂的逻辑处理带来的性能消耗。

## 参数表
| 参数 | 默认值 | 描述 | 可选值 |
|:----|:----|:----|:----|
| method | get | 请求的方法 | get,post |
| url | "" | 请求的链接 | string |
| data | null | 请求的数据 | object,string |
| dataType | "" | 请求的类型 | json,jsonp |
| async | true | 是否异步 | blooean |
| error | function(){} | 请求报错执行的函数 | function |
| success | function(){} | 请求成功的回调函数 | function |

举个例子（要包含代码用例）

```js
// 代码
<script src="../dist/index.js"></script>
<script>
  ajax({
    url: './test.json',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log(err);
    }
})
</script>
```

特殊说明，比如特殊情况下会报错等
