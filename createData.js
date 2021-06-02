module.exports = createData = [
    {
        modelName: "LeadCampaign",
        body: [
            { name: "page facebook" },
            { name: "compte Twitter" },
        ]
    },
    {
        modelName: "LeadFlags",
        body: [
            {
                "name": "A faire",
                "icon_name": "alert-circle",
                "color": "rgb(47,255,0)"
            },
            {
                "name": "Nouveau",
                "icon_name": "codesandbox",
                "color": "rgb(0,255,227)"
            },
            {
                "name": "testing",
                "icon_name": "airplay",
                "color": "rgb(212,27,27)"
            }
        ],
    },
    {
        modelName: "LeadStatus",
        body: [
            { name: "Nouveau" },
            { name: "A rappeler" },
            { name: "Convention a signer" },
            { name: "Convention signée" },
            { name: "Convention annulée" },
            { name: "Edof a signer" },
            { name: "Edof signée" },
            { name: "Edof annulée" },
            { name: "Annulée" },
        ],
    },
    {
        modelName: "LeadProfessionalStatus",
        body: [
            { name: "etudiant" },
        ],
    },
    {
        modelName: "LeadRDVStatus",
        body: [
            { name: "Nouveau" },
            { name: "SIGNE" },
            { name: "NRP" },
            { name: "INJOIGNABLE" },
            { name: "A RETRAITER" },
            { name: "A RAPPELER" },
            { name: "ANNULE" },
            { name: "PROGRAMME" },
            { name: "PLACE" },
            { name: "CONFIRME" },
        ],
    },
    {
        modelName: "TrainingStatus",
        body: [
            { name: "Nouveau" },
            { name: "Confirme" },
            { name: "Annulee" },
        ],
    },
    //1
    {
        modelName: "User",
        body: {
            "email": "formacrm.admin@yopmail.com",
            "username": "admin",
            "nom": "admin",
            "prenom": "kun",
            "role": "Admin",

        },
    },
    //2
    {
        modelName: "User",
        userid: 1,
        body: {
            "email": "fares.manai@etudiant-enit.utm.tn",
            "username": "FaresManai",
            "nom": "Manai",
            "prenom": "Fares",
            "phone": "+21694619022",
            "role": "Confirmateur",
            "super": true,
        },
    },
    //3
    {
        modelName: "User",
        body: {
            "email": "john.doe@yopmail.com",
            "username": "JohnDoe",
            "nom": "Doe",
            "prenom": "John",
            "role": "Centre d'appel",
            //
            "callcentername": "The Does",
            "confirmatorid": 2,
        },
    },
    //4
    {
        modelName: "User",
        body: {
            "email": "jane.doe@yopmail.com",
            "username": "JaneDoe",
            "nom": "Doe",
            "prenom": "Jane",
            "role": "Téléprospecteur",
            //
            "callcenterid": 3,
        },
    },
    //5
    {
        modelName: "User",
        body: {
            "email": "jin.doe@yopmail.com",
            "username": "JinDoe",
            "nom": "Doe",
            "prenom": "Jin",
            "role": "Téléprospecteur",
            "callcenterid": 3,
        },
    },
    //6
    {
        modelName: "User",
        body: {
            "email": "troy.miklson@yopmail.com",
            "username": "TroyMiklson",
            "nom": "Miklson",
            "prenom": "Troy",
            "role": "Confirmateur",
        },
    },
    //7
    {
        modelName: "User",
        body: {
            "email": "mister.black@yopmail.com",
            "username": "MisterBlack",
            "nom": "Black",
            "prenom": "Mister",
            "role": "Régie",
            "isInternal": false,
            "preferences": {
                "accountSid": process.env.TWILIO_ACCOUNT_SID,
                "authToken": process.env.TWILIO_AUTH_TOKEN,
                "applicationSid": process.env.TWILIO_TWIML_APP_SID,
                "callerId": process.env.TWILIO_PHONE_NUMBER,
            },
            //
            "controlusername": "The Black Organization",
            "externalConfirmatorsid": [2, 6],
        },
    },
    //8
    {
        modelName: "User",
        body: {
            "email": "mike.black@yopmail.com",
            "username": "MikeBlack",
            "nom": "Black",
            "prenom": "Mike",
            "role": "Confirmateur",
            "controlUserid": 7,
        },
    },
    //9
    {
        modelName: "User",
        body: {
            "email": "freiza.vonkarma@yopmail.com",
            "username": "FreizaVonKarma",
            "nom": "Von Karma",
            "prenom": "Freiza",
            "role": "Centre d'appel",
            "callcentername": "Sie Von Karma",
            "controlUserid": 7,
            "confirmatorid": 8,
        },
    },
    //10
    {
        modelName: "User",
        body: {
            "email": "freya.vonkarma@yopmail.com",
            "username": "FreyaVonKarma",
            "nom": "Von Karma",
            "prenom": "Freya",
            "role": "Téléprospecteur",
            "callcenterid": 9,
        },
    },
    //11
    {
        modelName: "User",
        body: {
            "email": "john.porter@yopmail.com",
            "username": "JohnPorter",
            "nom": "Porter",
            "prenom": "John",
            "role": "Commercial",
        },
    },
    //12
    {
        modelName: "User",
        body: {
            "email": "george.mate@yopmail.com",
            "username": "GeorgeMate",
            "nom": "Mate",
            "prenom": "George",
            "role": "Formateur",
            //
            "subjectsid": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        },
    },
    //13
    {
        modelName: "User",
        body: {
            "email": "plain.doll@yopmail.com",
            "username": "PlainDoll",
            "nom": "Doll",
            "phone": "+21627118809",
            "prenom": "Plain",
            "role": "Secretaire",
        },
    },
    //14
    {
        modelName: "User",
        body: {
            "email": "kishi.man@yopmail.com",
            "username": "KishiMan",
            "nom": "Man",
            "prenom": "Kishi",
            "role": "Stagiaire",
            "trainings": [
                {
                    "typedeformation": "Type1",
                    "support": true,
                    "debut_formation": new Date(Date.now() + 5 * 60000),
                    "fin_formation": new Date(Date.now() + 10 * 60000),
                    "date_rappel": new Date(Date.now() + 7 * 60000),
                    "statutformationid": 1,
                    "formationid": 14,
                }
            ],
        }
    },
    //15
    {
        modelName: "User",
        body: {
            "email": "gherman.Hunter@yopmail.com",
            "username": "ghermanHunter",
            "nom": "Hunter",
            "prenom": "gherman",
            "role": "Régie",
            "isInternal": true,
            "preferences": {
                "accountSid": process.env.TWILIO_ACCOUNT_SID,
                "authToken": process.env.TWILIO_AUTH_TOKEN,
                "applicationSid": process.env.TWILIO_TWIML_APP_SID,
                "callerId": process.env.TWILIO_PHONE_NUMBER,
            },
            //
            "controlusername": "The Hunters",
            // "commercialid":11,
            "externalConfirmatorsid": [],
        },
    },
    //16
    {
        modelName: "User",
        body: {
            "email": "lady.maria@yopmail.com",
            "username": "LadyMaria",
            "nom": "Maria",
            "prenom": "Lady",
            "role": "Confirmateur",
            "controlUserid": 15,
        },
    },
    //17
    {
        modelName: "User",
        body: {
            "email": "holyblade.ludwig@yopmail.com",
            "username": "HolyBladeLudwig",
            "nom": "Ludwig",
            "prenom": "Holy Blade",
            "role": "Centre d'appel",
            "callcentername": "Ludwig's Dream",
            "controlUserid": 15,
            "confirmatorid": 16,
            "defaultCommercialid":11,
        },
    },
    //18
    {
        modelName: "User",
        body: {
            "email": "cursed.ludwig@yopmail.com",
            "username": "CursedLudwig",
            "nom": "Ludwig",
            "prenom": "Cursed",
            "role": "Téléprospecteur",
            "callcenterid": 17,
        },
    },
    {
        modelName: "Training",
        body: {
            "class": "Real",
            "typedeformation": "Type1",
            "support": true,
            "debut_formation": "2021-04-27T13:21:27.000Z",
            "fin_formation": "2021-04-27T13:26:27.000Z",
            "date_rappel": "2021-04-27T13:23:27.000Z",
            "elearning_access": null,
            "statutformation": {
                "id": 1,
                "name": "Nouveau"
            },
            "formationid": 14,
            "formators": [12],
            "tokensid": [1]
        }
    },
    {
        modelName: "TrainingSession",
        body: {
            "trainingid": 2,
            "formators": [12],
            "start_date": new Date(Date.now() - 24 * 60 * 60 * 1000),
            "end_date": new Date(Date.now() - 23 * 60 * 60 * 1000),
        }
    },

    {
        modelName: "Group",
        body: [
            // {
            //     "nom": "Group of Secretaries",
            //     "role": "Secretaire",
            //     "adminid": 13,
            // },
            {
                "nom": "Group of Confirmators",
                "role": "Confirmateur",
                "adminid": 2,
                "membersid": [6, 8],
            },
        ],
    },
    {
        modelName: "Lead",
        userid: 10,
        body: [
            // 1
            {
                "datecall": new Date(Date.now()),
                "prenom": "Fares",
                "nom": "Manai",
                "email": "fares.manaisademx@gmail.com",//is email
                "phone": "+21694619022",
                "mobile": "+21694619022",
                "comment": "Lead for Fares Manai",
                "company": "ENIT",//auto if companyLead exist
                "typeentreprise": "something",
                "budget": 2500,
                "educational_level": "BAC+6",
                "social_security_number": "1..15",
                // "ref_client": "fc4831c6-f559-4393-9ef7-4b9ef4b857c9",autogen
                "statutcallid": 1,//reference LeadStatus
                "campaignid": 1,//reference LeadCampaign
                "professionalStatusid": 1,
                "flagsid": [1, 2],//reference LeadFlags
                "confirmatorid": 2,//required, reference User
                "commercialid": 11,//reference User
                //convention
                "lieu": "lieu de convention",
                //address
                "ville": "Val-de-Marne",
                "address_1": "2 rue Pablo Picasso, Creteil",
                "zip_code": "94000",
                //edof
                "edof_id": "4085923381",//unique
                //session_formation
                "session_formation": {
                    "typedeformation": "Type1",//enum
                    "support": true,//default: false
                    "debut_formation": new Date(Date.now() + 5 * 60000),
                    "fin_formation": new Date(Date.now() + 10 * 60000),
                    "date_rappel": new Date(Date.now() + 7 * 60000),
                    "statutformationid": 1,//reference TrainingStatus
                    "formationid": 110,//required
                },
                //RDVs
                "RDVs": [
                    {
                        // "date_prise_rdv":DATE,autogen
                        "rdv": new Date(Date.now() + (24 * 60 * 60 * 1000)),//required
                        "infosrdv": "large text",
                        "rapport_confirmation": "raport confirmation",
                        "rapport_annulation": "raport annulation",
                        "statutRDVid": 1,//reference LeadRDVStatus
                    },
                ],
            },
        ],
    },
]