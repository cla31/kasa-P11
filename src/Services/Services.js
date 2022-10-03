import logements from "../Data/logements.json";


// Fonction pour récupérer les données via le fetch
//  async function getDatas() {
//     try {
//         const fetchJson = await fetch(logements);
//         const backFetch = await fetchJson.json();
//         console.log("réponse de backFetch", backFetch);
//         return backFetch;
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }


export function getDatasLogements() {
    return logements.map((logement) => {
        return {
            cover: logement.cover,
            title: logement.title,
            id: logement.id
        }
    })
}

//Find récupère un élément dans le tableau et retourne un élément (l'élément trouvé) du tableau
//Je récupère le logement qui correspond à l'id
export function getLogementById(id) {
    return logements.find((logement) => logement.id === id);
}