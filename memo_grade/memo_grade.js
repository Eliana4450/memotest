const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []
/* 这是memo.js 的优化版。一是因为有重复的代码(之前memo.js 重复写了两次页面渲染，这次用rander()函数封装，就避免再重复写这段代码)；
二是因为push 和pop一般把最近添加的信息显示在最前面，
unshift 表示从前面加东西进去，即最新的消息会显示在最前面。
shift表示删除最新添加的信息 */
function rander() {
    let htmlStr = ''
    listContent.forEach(function (item) {
        // console.log('item', item);
        htmlStr = htmlStr + `
        <div class="item">
        <div>
            <p>内容：${item.content}</p>
            <p>时间：${item.date} ${item.time} </p>
        </div>

    </div>
        `
    })
    list.innerHTML = htmlStr

}
addedBtn.addEventListener('click',function(){
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    rander()
  
})
deletedBtn.addEventListener('click',function () {
    listContent.shift()

    rander()
})