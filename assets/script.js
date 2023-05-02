// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)



//create array

const arrTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
]

//console.log for all the array's elements

for (let i = 0; i < arrTeam.length; i++){
    const objTeam = arrTeam[i];
    console.log(objTeam);
};


//print in DOM

const eleTeamMember = document.querySelector('.grid');

for (let eleMember of arrTeam){
    console.log(eleMember);

    eleTeamMember.innerHTML +=
    `<div>${eleMember.photo}<div>
     <div>${eleMember.name}<div>
     <div>${eleMember.role}<div>`
};


// bonus 1 Doesn't work - fix

// eleTeamMember.innerHTML += `
//                         <li>
//                             <img src="img/${objTeam.photo}">
//                         </li>`

//Alternative solution (IT DOESN'T WORK - prints [object Object])

// function printMembers(arg){
//     let members = "";
//     for(let i = 0; i < arg.lenght; i++){
//         members += `<li>${arg[i]}</li>`;
//     }
//     return members
// }

// document.querySelector('.grid').innerHTML = arrTeam;
