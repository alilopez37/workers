let x=0

function count(){
    x = x + 1 
    self.postMessage(x)
}

setInterval(()=> {
    count()
}, 1000)