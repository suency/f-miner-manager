let origin = "Public address: /ip4/12.22.31.31/tcp/9895"

let target = "lotus-miner actor set-addrs /ip4/1.2.3.4/tcp/47094"

let ip = origin.match(/(\d+\.){3}\d+/)[0]
let port = origin.match(/\d+$/)[0]

let result = `lotus-miner actor set-addrs /ip4/${ip}/tcp/${port}`
console.log(result)