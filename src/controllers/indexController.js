const indexController = {
    showHome: (req, res) => {
        res.render("index",{title:"express"})
}


}

module.exports = indexController