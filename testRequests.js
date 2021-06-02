module.exports = testRequest = [
    // {
    //     userid: 2,
    //     path: "/api/Lead/Update",
    //     method: "post",
    //     body: {
    //         "id": [1],
    //         "prenom": "Kishi",
    //         "nom": "Man",
    //         "flagsid": [1, 3],
    //     }
    // },
    // {
    //     userid: 2,
    //     path: "/api/Lead/Create",
    //     method: "post",
    //     body: {
    //         "email": "kishi.man@yopmail.com",
    //         "nom": "Man",
    //         "prenom": "Kishi",
    //         "session_formation":
    //         {
    //             "typedeformation": "Type1",
    //             "support": true,
    //             "statutformationid": 1,
    //             "formationid": 100,
    //         },


    //         "datecall": new Date(Date.now()),
    //         "phone": "+21694619022",
    //         "statutcallid": 1,//reference LeadStatus
    //         "campaignid": 1,//reference LeadCampaign
    //         "professionalStatusid": 1,
    //         "flagsid": [1, 2],//reference LeadFlags
    //         "confirmatorid": 2,//required, reference User
    //         "commercialid": 11,//reference User
    //     },
    // },
    {
        userid: 2,
        path: "/api/Lead/MigrateToTrainee",
        method: "post",
        body: {
            "id": 2

        }
    },
    //15
    {
        userid: 2,
        path: "/api/User/Create",
        method: "post",
        body: {
            "email": "kei.ku@yopmail.com",
            "username": "KeiKu",
            "nom": "Ku",
            "prenom": "Kei",
            "role": "Stagiaire",
        }
    },

    // {
    //     userid: 4,
    //     path: "/api/User/get/createdLeads/view/pure",
    //     method: "post",
    //     body: {
    //         id: 4,
    //     }
    // },
    // {
    //     userid: 2,
    //     path: "/api/Confirmator/get/leads/view/pure",
    //     method: "post",
    //     body: {
    //         "id": 2
    //     }
    // },
    // {
    //     userid: 7,
    //     path: "/api/Lead/Create",
    //     method: "post",
    //     body: {
    //         "prenom": "Jimbo",
    //         "nom": "John",
    //         "email": "Dean1@hotmail.com",
    //         "phone": "971-614-0531",
    //         "ville": "Missouri",
    //         "zip_code": "58323-9529",
    //         "commercialid": 13,
    //         "session_formation": {
    //             "formationid": 100
    //         }
    //     }
    // },
    // {
    //     userid: 2,
    //     path: "/api/Confirmator/get/leads/view/pure",
    //     method: "post",
    //     body: {
    //         "id": 2
    //     }
    // },
    // {
    //     userid: 2,
    //     path: "/api/Confirmator/set/leads",
    //     method: "post",
    //     body: {
    //         "id": 2,
    //         "target": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    //     }
    // },
    // {
    //     userid: 2,
    //     path: "/api/Confirmator/add/leads",
    //     method: "post",
    //     body: {
    //         "id": 2,
    //         "target": [1, 2, 3,]
    //     }
    // },
    // {
    //     userid: 2,
    //     path: "/api/Confirmator/remove/leads",
    //     method: "post",
    //     body: {
    //         "id": 2,
    //         "target": [1, 2, 3,]
    //     }
    // },
    // {
    //     userid: 12,
    //     path: "/api/Formator/get/subjects/view/id",
    //     method: "post",
    //     body: {
    //         "id": 12,
    //     }
    // },

    // {
    //     userid: 12,
    //     path: "/api/Formator/set/subjects",
    //     method: "post",
    //     body: {
    //         "id": 12,
    //         "target": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 101, 102,]
    //     }
    // },
    // {
    //     userid: 12,
    //     path: "/api/Formator/get/subjects/view/id",
    //     method: "post",
    //     body: {
    //         "id": 12,
    //     }
    // },
    //filter test
    // {
    //     userid: 1,
    //     path: "/api/EdofMail/all/view/pure",
    //     method: "post",
    //     body: {
    //         "where": {
    //             "status": ["Non traité", "trait"],
    //             "from": "fares.manai@etudiant-enit.utm.tn",
    //             "date": {
    //                 "from": "2021-03-03T15:00:00.000Z",
    //                 "to": "2021-03-03T16:00:00.000Z"
    //             },
    //         }
    //     }
    // },
    // {
    //     userid: 1,
    //     path: "/api/User/all/view/pure",
    //     method: "post",
    // },
    // {
    //     userid: 2,
    //     path: "/api/User/all/view/pure",
    //     method: "post",
    // },
    // {
    //     userid: 3,
    //     path: "/api/User/all/view/pure",
    //     method: "post",
    // },
    // {
    //     userid: 4,
    //     path: "/api/User/all/view/pure",
    //     method: "post",
    // },
    // {
    //     userid: 6,
    //     path: "/api/User/all/view/pure",
    //     method: "post",
    // },
    // {
    //     userid: 7,
    //     path: "/api/User/all/view/pure",
    //     method: "post",
    // },
    {
        userid: 3,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 4,
        }
    },
    {
        userid: 3,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 6,
        }
    },
    {
        userid: 7,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 9,
        }
    },
    {
        userid: 7,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 10,
        }
    },
    {
        userid: 7,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 11,
        }
    },
    {
        userid: 1,
        path: "/api/User/Desactivate",
        method: "post",
        body: {
            "id": 2,
        }
    },
    {
        userid: 1,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 2,
        }
    },
    {
        userid: 1,
        path: "/api/User/Desactivate",
        method: "post",
        body: {
            "id": 1,
        }
    },
    {
        userid: 1,
        path: "/api/User/Activate",
        method: "post",
        body: {
            "id": 1,
        }
    },
    // {
    //     userid: 1,
    //     path: "/api/Lead/all",
    //     method: "post",
    //     body: {
    //         "perPage": 5,
    //         "pageIndex": 1,
    //         "keywords": "",
    //         "where": {
    //             "zip_code": "",
    //             "ref_client": "",
    //             "datecall": {
    //                 "from": "",
    //                 "to": ""
    //             },
    //             "budget": {
    //                 "from": "",
    //                 "to": ""
    //             },
    //             "date_creation": {
    //                 "from": "",
    //                 "to": ""
    //             },
    //             "campaign": {
    //                 "id": []
    //             },
    //             "statutcall": {
    //                 "id": []
    //             },
    //             "confirmator": {
    //                 "user_id": []
    //             },
    //             "commercial": {
    //                 "user_id": []
    //             },
    //             "createdBy": {
    //                 "id": []
    //             },
    //             "flags": {
    //                 "id": 2
    //             },
    //             "RDVs": {
    //                 "rdv": {
    //                     "from": "",
    //                     "to": ""
    //                 },
    //                 "status_id": []
    //             },
    //             "commercial": {
    //                 "user_id": []
    //             },
    //             "callCenterAgent": {
    //                 "user_id": []
    //             },
    //             "callCenter": {
    //                 "user_id": [],
    //                 "callcentername": []
    //             },
    //             "controlUser": {
    //                 "user_id": [],
    //                 "controlusername": []
    //             },
    //             "edof_status": [],
    //             "session_formation": {
    //                 "debut_formation": {
    //                     "from": "",
    //                     "to": ""
    //                 },
    //                 "fin_formation": {
    //                     "from": "",
    //                     "to": ""
    //                 },
    //                 "date_rappel": {
    //                     "from": "",
    //                     "to": ""
    //                 },
    //                 "formation": {
    //                     "id": [112],
    //                     "price": {
    //                         "from": "",
    //                         "to": ""
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },
    // {
    //     userid: 10,
    //     path: "/api/Lead/Create",
    //     method: "post",
    //     body: {
    //         "prenom": "Goerge",
    //         "nom": "Wilis",
    //         "email": "Dean1@hotmail.com",
    //         "phone": "971-614-0531",
    //         "professionalStatusid": 1,
    //         "flagsid": [2, 3],
    //         "ville": "Missouri",
    //         "zip_code": "58323-9529",
    //         "confirmatorid": 2,
    //         "commercialid": 13,
    //         "session_formation": {
    //             "formationid": 114
    //         }
    //     }
    // },

]