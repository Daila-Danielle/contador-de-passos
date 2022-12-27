function contar(){

    //variaveis que esão pegando pelo id o valor digitado no input pelo usuario
    let inicio = document.getElementById('txtinicio')
    let fim    = document.getElementById('txtfim')
    let passo  = document.getElementById('txtpasso')

    //div onde irá aparecer a resposta
    let res    = document.getElementById('res') 


    //Verificando se algum input não foi preenchido
    if (inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value) //Transformando a variavel inicio em numero
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo invalido, CONSIDERADO PASSO COMO 1 ')
            p = 1
        }
        if (i<f){
            //contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `  ${c} \u{1F449} `
            }
            res.innerHTML += ` \u{1F3C1} `
        } else{
             //contagem regressiva
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `  ${c} \u{1F449} `
            }
            res.innerHTML += ` \u{1F3C1} `
        }

    }

}
