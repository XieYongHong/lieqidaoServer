var ex = require('express')
var app = ex();

app.get('/', (req, res) => {
    res.send('欢迎访问猎奇岛网站，网页正在开发中，敬请期待。');
})

app.listen(8082, () => {
    console.log('开启8082  ');
})
