const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2';

const getJoke = async () => {

    try{
        const response = await fetch( jokeUrl );
        if( !response.ok ) return alert('No se pudo realizar la peticion');  
        const { icon_url, id, value } = await response.json();
        return { icon_url, id, value };
    }catch( err ){
        throw err;
    }
}

const getUsers = async () => {
    try{
        const response = await fetch( usersUrl );
        if( !response.ok ) return alert('No se pudo realizar la peticion');  
        const { data: users } = await response.json();
        return users;

    }catch( err ){
        throw err;
    }
}

export{
    getJoke,
    getUsers

}