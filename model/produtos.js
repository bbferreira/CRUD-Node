var mongoose = require("./database")

var produtos = mongoose.Schema(
    {
        nome:String,
        codigo: {
            type:Number,
            required:true,
        },
        valor:Boolean,
        quantidade:{
            type:Number,
            required:true,
        },
        ativo:{
            type:Boolean,
            default:true
        }
    }
)

const Produtos = mongoose.model('produtos', Produtos)
module.exports = Produtos