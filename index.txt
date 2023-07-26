var express = require("express")

var app = express()

app.use(express.json());


var Produtos = require("./model/produtos")

app.get("/produtos", async function(req, res) {
    var produtos = await Produtos.find()
    res.send( Produtos )
})

    app.get("/produtos/:id", async function(req, res) {

        var id = req.params.id

        var produtos = await Produtos.findById( id )

        res.send( produtos)
    })

    app.post("/produtos", async function(req, res) {


    var { nome, codigo,  valor, quantidade, ativo } = req.body
    
    if(quantidade == undefined)
    res.send({error:"quantidade é obrigatorio"})
    else{
        var retorno = await Produtos.create({nome, codigo,  valor, quantidade, ativo })
        res.send({ msg: "Sucesso" })
    }

})

app.put("/produtos",  async function(req, res) {
    
    var { _id, nome, codigo,  valor, quantidade, ativo } = req.body
    
    var dados = await Produtos.findById( _id )

    dados.nome = nome

    if (dados.quantidade != quantidade && quantidade != undefined) 
    dados.quantidade = quantidade

    dados.valor= valor

    var retorno = await dados.save()

    console.log( retorno )

    
    res.send("Alteracao de produto")
})
app.delete("/produtos/:id", async function(req, res) {
    var _id = req.params.id
    console.log( _id )
    
    var dados = await Produtos.findById( _id )
    console.log(dados)

    if ( dados != null) {
        //dados.ativo = false
        dados.ativo = !dados.ativo
        
        var retorno = await dados.save()

        res.send( retorno )
    }
    else {
        res.send({ error: "Id não encontrado!!!!" })
    }
})

app.listen(80, function(req, res) {
    console.log("Servidor Online")
})

