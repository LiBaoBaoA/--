const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(parent, opt) {
        this.parent = parent,
            this.opt = opt,
            this.Event();
    }
    Event() {
        let {
            color,
        } = this.opt;

        staticBtn.onclick = function() {
            console.log(this.opt)
            let val = numInput.value;

            let div1 = document.createElement('div');
            div1.className = 'list'
            div1.innerHTML += val;
            div1.style.background = 'red';
            this.parent.appendChild(div1);


        }
    }
}

new StaticNumBlock(oBox, {
    color: 'red',
})


class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(parent, opt) {
        super(parent, opt);
        this.Events();
    }
    Events() {
        let {
            color,
        } = this.opt;
        let page = 10;
        staticBtn.onclick = () => {
            let val = numInput.value;
            let div1 = document.createElement('div');
            div1.innerHTML += val;
            div1.style.background = color;
            if (val++) {
                page++;
                div1.style.height = 100 + page + 'px';
            }
            this.parent.appendChild(div1);
            let divs = document.querySelectorAll('#oBox div');
            console.log(divs)
        }

    }
}
new MoveNumBlock(oBox, {
    color: 'pink',
})

// 分别给按钮添加点击事件，实现所要求的的效果