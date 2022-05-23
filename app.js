`use strict`


const data = {
    "minus": {
        "Q1": ["Chauffage"],
        "Success": ["minus"]
    },
    "chauffageGazAppartement": {
        "Q1": ["Chauffage"],
        "Q2": ["Appartement"],
        "Q3": ["Logementplus"],
        "Success": ["ChauffageGazAppartement"]
    },
    "chauffageGazMaison": {
        "Q1": ["Chauffage"],
        "Q2": ["Maison"],
        "Q3": ["Logementplus"],
        "Success": ["ChauffageGazMaison"]
    },
    "IsolationGarage": {
        "Q1": ["Isolation"],
        "Q2": ["Maison"],
        "Q3": ["Logementplus"],
        "Q4": ["garage_sous_sol"],
        "Success": ["IsolatonGarage"]
    },
    "IsolationCombles": {
        "Q1": ["Isolation"],
        "Q2": ["Maison"],
        "Q3": ["Logementplus"],
        "Q4": ["Combles"],
        "surfaceLogement": [],
        "revenuFiscal": [],
        "statutPrecarite": [],
        "Success": ["IsolatonCombles"]
    },
    "IsolationMursAppartement": {
        "Q1": ["Isolation"],
        "Q2": ["Appartement"],
        "Q3": ["Logementplus"],
        "Q4": ["Murs"],
        "Success": ["IsolatonMursAppartement"]
    },
    "IsolationMursMaison": {
        "Q1": ["Isolation"],
        "Q2": ["Maison"],
        "Q3": ["Logementplus"],
        "Q4": ["Murs"],
        "Success": ["IsolatonMursMaison"]
    },
    "IsolationMursMaison2": {
        "Q1": ["Isolation"],
        "Q2": ["Maison"],
        "Q3": ["Logementplus"],
        "Q4": ["Murs2"],
        "Success": ["IsolatonMursMaison2"]
    }
}

// Cas 1: afficher success ChauffageGazMaison
let cas1 = {
    "Q1": "Chauffage",
    "Q2": "Appartement",
    "Q3": "Logementplus"
}

// Cas 2: afficher success IsolationMursAppartement
let cas2 = {
    "Q1": "Isolation",
    "Q2": "Appartement",
    "Q3": "Logementplus",
    "Q4": "Murs"
}


// Cas 3: afficher successs IsolationCombles
let cas3 = {
    "Q1": "Isolation",
    "Q2": "Maison",
    "Q3": "Logementplus",
    "Q4": "Combles",
    "surfaceLogement": "120",
    "revenuFiscal": "10000 €",
    "statutPrecarite": "grand-precaire"
}

let cas4 = {
    "Q1": "Isolation",
    "Q2": "Maison",
    "Q3": "Logementplus"
}

let cas5 = {
    "Q1": "Isolation",
    "Q2": "Maison",
    "Q3": "Logementplus",
    "Q4": "Murs",
}

/**
 * recupere les parcours avec les bonnes questions
 */
retrieveCandidatParcours = async(cas, data) => {
    let listQuestions = Object.keys(cas);
    let listParcours = Object.keys(data);
    let returnGoodParcours = {};

    await listParcours.forEach((key) => {
        let goodParcours = true;
        listQuestions.forEach((q) => {
            if (!data[key].hasOwnProperty(q)){
                goodParcours = false;
            }
        })
        if (goodParcours){
            returnGoodParcours[key] = data[key];
        }
        
        //console.log('data ', data[key]);
    });
    return returnGoodParcours;
}

/**
 * find winner
 */
retrieveGoodParcours = async(cas, data) => {
    let listQuestions = Object.keys(cas);
    let listParcours = Object.keys(data);
    let returnsucess = 'No found';

    await listParcours.forEach((key) => {
        let goodParcours = true;
        listQuestions.forEach((q) => {
            //console.log(data[key][q][0]);
            //console.log(cas[q]);
            if (q.startsWith('Q') && data[key][q][0] != cas[q]){
                goodParcours = false;
            }
        })
        if (goodParcours){
            returnsucess = data[key]['Success'];
        }
        
        //console.log('data ', data[key]);
    });
    return returnsucess;
}


startProcess = async(cas) => {
    let candidatParcours = await retrieveCandidatParcours(cas, data);
    let winner = await retrieveGoodParcours(cas, candidatParcours);

    console.log('cas ', cas);
    //console.log('candidatParcours ', candidatParcours);
    console.log('winner ', winner);

}

startProcess(cas1)
    .then(console.log('Finish'))
    .catch(error => {
        console.log('error: ', error);
    });

startProcess(cas2)
.then(console.log('Finish'))
.catch(error => {
    console.log('error: ', error);
});

startProcess(cas3)
.then(console.log('Finish'))
.catch(error => {
    console.log('error: ', error);
});

startProcess(cas4)
.then(console.log('Finish'))
.catch(error => {
    console.log('error: ', error);
});

startProcess(cas5)
.then(console.log('Finish'))
.catch(error => {
    console.log('error: ', error);
});
