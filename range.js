module.exports = (req, res, next) => {
    res.header("Content-Range", "people 0-10/40")
    next()
}