# 安装 dva-cli
```
$ npm install dva-cli -g
$ dva -v
dva-cli version 0.9.1
```

- 可以通过 dva new 创建新应用。
$ dva new gy
$ cd gy
$ npm start



# 用scss编译样式
```
$ npm install node-sass sass-loader --save
```



# 使用antd UI
```
$ yarn add antd
```
# 使用antd样式
- index.js
```js
//全局引用antd样式
import 'antd/dist/antd.css';
```


 # Table.jsx 请求 egg 数据
 ```js
http://localhost:7001/find
[{"_id":"5c6e05a4a5bb989212d58ca7","name":"lemon","age":"18","skill":"css"},{"_id":"5c6e05e2a5bb989212d58cb9","name":"laoxie","age":"32","skill":"all"}]
 ```

 ```js
 //引入request模块
 import request from '../utils/request.js'

async componentWillMount(){
    const data = await request('http://localhost:7001/find')
    console.log(data)
}
```

