var Produtos = require("./model/produtos")

Alterar = async () => {

    var prod = { 
        _id: ObjectId("sfdsdfsdf786er8236823sjdgjsdgfjsdf"),
        nome: "Computador",
        codigo: 
            "17470039",
            valor:"5000.00",
            quantidade:"5",
            
}

    var retorno = await Produtos.updateOne({ _id: prod._id }, { nome: prod.nome })


}

AlterarAlternativo = async () => {

    var prod = { 
        _id: ObjectId("sfdsdfsdf786er8236823sjdgjsdgfjsdf"),
        nome: "Computador",
        codigo: 
            "17470039",
            valor:"5000.00",
            quantidade:"5",
            
}
    var retorno = await Produtos.findById( prod._id )

    if (retorno.nome != prod.nome)
        retorno.nome = prod.nome

    if (retorno.codigo!= prod.codigo)
        retorno.codigo = clie.codigo

    if (retorno.quantidade[0].quantidade != prod.quantidade[0].quantidade )


    retorno.valor.push(prod.valor)

    retorno.save()

}