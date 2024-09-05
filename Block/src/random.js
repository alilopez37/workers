
self.addEventListener("message", (e)=>{
    let TAM = e.data
    let x,y
    let flag = true
    while (flag){
        x = Math.floor (Math.random() * TAM + 1)
        y = Math.floor (Math.random() * TAM + 1)
        if ( x === y)
            flag = false
    }
    self.postMessage([x,y])
})

