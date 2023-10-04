function vereficar(){
    var data = new Date();
    var ano = data.getFullYear();

    var nome = document.getElementById("nome");
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fAno.value.length == 0 || fAno.value > ano || nome.value == ""){
        alert("[ERROR]: verefique os dados e tente novamente!");
    }else{
       var fsex = document.getElementsByName('radsex');
       var idade = ano - Number(fAno.value);
       var genero = ""
       var img = document.createElement("img");
       img.setAttribute("id", "foto");
       if(fsex[0].checked){
        genero = "masculino"
        if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute("src", "fotoCriancaMas.png");
            res.innerHTML = `Olá, ${nome.value}, você é um garoto do gênero ${genero}, de ${idade} anos.<br>`;
        } else if(idade < 21){
            //Jovem
            img.setAttribute("src", "fotoJovemMas.png");
            res.innerHTML = `Olá, ${nome.value}, você é um Jovem do gênero ${genero}, de ${idade} anos.<br>`;
        } else if(idade < 60){
            //Adulto
            img.setAttribute("src", "fotoAdultoMas.png");
            res.innerHTML = `Olá, ${nome.value}, você é um Adulto do gênero ${genero}, de ${idade} anos.<br>`;
        } else if (idade < 100){
            //idoso
            img.setAttribute("src", "fotoIdosoMas.png");
            res.innerHTML = `Olá, ${nome.value}, você é um Idoso do gênero ${genero}, de ${idade} anos.<br>`;
        } else{
            //Caveira
            img.setAttribute("src", "fotoCaveira.png");
            res.innerHTML = `Olá, ${nome.value}, espera... ${idade} anos!? Você realmente está vivo? Caramba! você deve ser o terror do INSS! <br>`;
        }


       } else {
        genero = "feminino";
        var body = document.querySelector("body");
        body.style.backgroundColor = " rgb(255, 81, 110)"
        if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute("src", "fotoCriancaFem.png");
            res.innerHTML = `Olá, ${nome.value}, você é uma garota do gênero ${genero}, de ${idade} anos. <br>`;
        } else if(idade < 21){
            //Jovem
            img.setAttribute("src", "fotoJovemFem.png");
            res.innerHTML = `Olá, ${nome.value}, você é uma jovem do gênero ${genero}, de ${idade} anos. <br>`;
        } else if(idade < 60){
            //Adulto
            img.setAttribute("src", "fotoAdultaFem.png");
            res.innerHTML = `Olá, ${nome.value}, você é uma adulta do gênero ${genero}, de ${idade} anos. <br>`;
        } else if (idade < 100){
            //idoso
            img.setAttribute("src", "fotoIdosaFem.png");
            res.innerHTML = `Olá, ${nome.value}, você é uma senhora do gênero ${genero}, de ${idade} anos. <br>`;
        } else{
            //Caveira
            res.innerHTML = `Olá, ${nome.value}, espera... ${idade} anos!? Você realmente está vivo? Caramba! você deve ser o terror do INSS! <br>`;
            img.setAttribute("src", "fotoCaveira.png");
        }

       }
       res.style.textAlign = "center";
       res.appendChild(img);
    }
}