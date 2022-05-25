
$('.carousel').carousel({
    interval: 3000
})

const categorias = [
    {
        imagem: "Imagens/cat1.png",
        nome: "Lâmpadas"
    },
    {
        imagem: "Imagens/cat2.png",
        nome: "Fios",
    },
    {
        imagem: "Imagens/cat3.png",
        nome: "Disjuntores",
    },
    {
        imagem: "Imagens/cat4.png",
        nome: "Contactores",
    },
    {
        imagem: "Imagens/cat5.png",
        nome: "Capacitores",
    },
];

function mostra_cat(inicial) {
    document.getElementById('img_cat1').src=categorias[inicial].imagem;
    document.getElementById('txt_cat1').innerText=categorias[inicial].nome;
    
    document.getElementById('img_cat2').src=categorias[inicial+1].imagem;
    document.getElementById('txt_cat2').innerText=categorias[inicial+1].nome;
    
    document.getElementById('img_cat3').src=categorias[inicial+2].imagem;
    document.getElementById('txt_cat3').innerText=categorias[inicial+2].nome;

    document.getElementById('img_cat4').src=categorias[inicial+3].imagem;
    document.getElementById('txt_cat4').innerText=categorias[inicial+3].nome;
}

let indice = 0;

function direita(){
    if(indice<categorias.length-4){
        indice++;
    }else{
        indice=0;
    }
    
    mostra_cat(indice);
}

function esquerda(){
    if(indice<=0){
        indice=categorias.length-4;
    }else{
        indice--;
    }
    
    console.log("indice: " + indice + "\ncategoria:" + categorias.length)

    mostra_cat(indice);
}