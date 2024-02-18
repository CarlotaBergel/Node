function getPokemon(){
    var namePokemon = document.getElementById("namePokemon").value;
    var xhhtp = new XMLHttpRequest();

    xhhtp.onreadystatechange = () => {
        if(xhhtp.readyState == 4 && xhhtp.status == 200) {
            if(this.responseText == "[]"){
                //Poner una respuesta en un elemento del html
                console.log(xhhtp.responseText);
            }else{
                //Ponemos la respuesta correcta xhhtp.responseText;
                //console.log(xhhtp.responseText);
                let responseAPI = xhhtp.responseText;
                let pokemon = JSON.parse(responseAPI);
                // let nombrePokemon = pokemon.name;
                // let imgPokemon = pokemon.sprites;
                // let habilidadesPokemon = pokemon.abilities;
                // let datosPokemon = [nombrePokemon, imgPokemon, habilidadesPokemon];
                
                let cardHtml = `
                                <div class="namePokemon">
                                    <span class="col-2 imgPokemon"><img class="img-pokemon row-2" src="${pokemon.sprites.front_default}" width="70px"></span>
                                    <span>Nombre: ${pokemon.name}</span>
                                    <span>Habilidades: ${pokemon.abilities[0].ability.name}</span>
                                </div>`;
                
                document.getElementById("div-pokemon").innerHTML = cardHtml;
                // console.log(datosPokemon);
            }
        }
    };

    xhhtp.open("GET",`https://pokeapi.co/api/v2/pokemon/${namePokemon}`,true);
    xhhtp.send();
}