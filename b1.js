const a = document.querySelector('.a')
const b = document.querySelector('.b')
const btn = document.querySelector('.btn')
const danhsach = document.querySelector('.danhsach')
let m
let n
a.addEventListener('change', (e) => {
    m = parseInt(e.target.value)

})
b.addEventListener('change', (e) => {
    n = parseInt(e.target.value)

})
btn.addEventListener('click', () => {
    let x = []
    let y = []
    let v = true
    for (i = m; i <= n; i++) {
        x.push(i)
    }

    for (let i of x) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                v = false;
            }
        }
        if (i < 2) {
            v = false
        }
        if (v == true) {
            y.push(i)
        }
        v = true

    }
    console.log(y.length)
    if (y.length == 0) {
        danhsach.innerText = "khong co so nguyen to"
    } else {
        y.join('')


        danhsach.innerText = `${y}`
    }

})