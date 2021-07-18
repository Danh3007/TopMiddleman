const express = require('express')
const router = express.Router()

const Page_Nganh = require("../models/ThemNganh")

router.get('/', (req, res, next) => {
    if (req.cookies.userloginNumber==null || req.cookies.userloginNumber=="") {
        res.render("error")
    } else if (req.cookies.userloginNumber==0) {
        res.render("themNganh/themNganh")
    }
})
router.post("/signUp", (req, res, next) => {
    const themNganh = new Page_Nganh(req.body)
    themNganh.save()
    res.redirect("/")
})

router.get('/:id/edit', (req, res,next) => {
    if (req.cookies.userloginNumber==0) {
        Page_Nganh.findById(req.params.id)
        .then(page => res.render("themNganh/editPage", {page}))
        .catch(next)
    } else {
        res.render("error")
    }
})
router.post('/:id', (req, res, next) => {
    Page_Nganh.updateOne({ _id: req.params.id }, req.body)
        .then(()=>res.redirect("/me"))
        .catch(next)
    
})

router.get('/:id/delete', (req, res,next) => {
    if (req.cookies.userloginNumber==0) {
        Page_Nganh.deleteOne({ _id: req.params.id })
        .then(page => res.redirect("/me"))
        .catch(next)
    } else {
        res.render("error")
    }
})

module.exports = router