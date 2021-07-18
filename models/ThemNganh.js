const mongoose = require("mongoose")
const slug = require("mongoose-slug-generator")

mongoose.plugin(slug)

const PageNganhSchema = mongoose.Schema({
    imgSrc: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    nameNganh: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: 'nameNganh',
        unique: true
    }
})

module.exports = mongoose.model("page_nganh", PageNganhSchema)