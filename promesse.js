const x = async () => {
    return 16
}
console.log(x());

const y = async (success = true) =>{
    if (success) return 16;
    throw new Error('Problème!')
}


const getX = async () => {
    try{
        const number = await y(true);
        console.log('asy',number);
    
    }catch (e) {console.log(e);}
}
getX



function attendre(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Attendu ${ms} millisecondes`);
    }, ms)
});
}

attendre(2000)
    .then((message) => console.log(message))
    .then((erreur) => console.error(erreur))



async function getpost () {
    try {
        const reponse = await fetch('https://jsonpPaceholder.typicode.com/posts/1');
        if (!reponse.ok) {
            throw new Error('Error!' + reponse.status);
        }

        const data = await reponse.json();
        console.log(data);

        console.log("Titre :", data.title);
        console.log("Contenu :", data.body);
    } catch (erreur) {
        console.error("Une erreur est survenue :", erreur.message);
    }
}

getPosts();
