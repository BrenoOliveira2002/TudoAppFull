module.export = function (req, res, next) {

    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-H0eaders', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}