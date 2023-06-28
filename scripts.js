function contador() {
    const ini = document.getElementById('txti')
    const fim = document.getElementById('txtf')
    
     const passo = document.querySelector('p.txtp')

     const res = document.getElementById('res')


    if (ini.value.length == 1 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO verifique os dados e tente novamente!')
    } else {
        res.innerHTML = `contando, aguarde !!!`
    }

    return contador
}