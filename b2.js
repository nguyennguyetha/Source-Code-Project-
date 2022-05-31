function numberOneTriangle(n) {
    for (let i = 0; i < n; i++) {
        let l = ''
        for (let j = 0; j <= i; j++) {
            l += ' * '
        }
        console.log(l);
    }
}

numberOneTriangle(8);