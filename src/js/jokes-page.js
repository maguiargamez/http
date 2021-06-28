import { getJoke } from "./http-provider";

const body = document.body;
let btnJoke, olList;

const createJokeHtml = () =>{
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group">        
    </ol>
    `;

    const divJokes = document.createElement( 'div' );
    divJokes.innerHTML = html;

    body.append( divJokes );
}


const events = () => {

    olList = document.querySelector( 'ol' );
    btnJoke = document.querySelector( 'button' );

    btnJoke.addEventListener( 'click', async () => {    
        
        btnJoke.disabled = true;
        printJoke( await getJoke() );
        btnJoke.disabled = false;

    } );

}



// Joke id, value
const printJoke = ( joke ) => {
    const olItem =  document.createElement( 'li' );
    let olItems = olList.getElementsByTagName('li');
    
    olItem.innerHTML = `
        ${  (olItems.length + 1 ) }. <b>${ joke.id }</b>: ${ joke.value }
    `;
    olItem.classList.add( 'list-group-item' );
    olList.append( olItem );

}

export const init = () => {
    createJokeHtml();
    events();
}