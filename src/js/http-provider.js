const jokeUrl = 'https://api.chucknorris.io/jokes/random';

export const getJoke = async () => {

    try{
        const response = await fetch( jokeUrl );
        if( !response.ok ) return alert('No se pudo realizar la peticion');  
        const { icon_url, id, value } = await response.json();
        return { icon_url, id, value };
    }catch( err ){
        throw err;
    }
}