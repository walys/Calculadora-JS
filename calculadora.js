function calcular(tipo, valor){
    //console.log(tipo, valor);
    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){

            document.getElementById('resultado').value += valor;

        }

        if(valor === '='){

            var valor_total_resultado = eval(document.getElementById('resultado').value); 
            //console.log(eval(valor_total_resultado));
            document.getElementById('resultado').value = valor_total_resultado;

        }

    }else if(tipo ==='valor'){
        
        //var valor_campo = document.getElementById('resultado').value;
        //document.getElementById('resultado').value = valor_campo + valor;
        //OU
        document.getElementById('resultado').value += valor;
    }
}