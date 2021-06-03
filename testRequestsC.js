module.exports = testRequest = [
    /// Level 1
    {
        message: "Create the first CEO User, John Doe",
        method: "post",
        path: "/api/User/Create",
        body: {
            "firstname": "John",
            "lastname": "Doe",
            "email": "john.doe@yopmail.com",
            "phoneNumber": "+21622446688",
            "type": "CEO",
            "address": {
                "fullAddress": "13 Walter Street,Silent Hill ",
                "state": "New England",
                "country": "U.S.A",
                "zipCode": "204863",
            }
        }
    },
    {
        message: "View the User of id 1, John Doe",
        method: "post",
        path: "/api/User",
        body: {
            "id": 1,
        }
    },
    {
        message: "Create the first Company, Outer Heaven",
        method: "post",
        path: "/api/Company/Create",
        body: {
            "name": "Outer Heaven",
            "ceoId": 1,
            "address": {
                "fullAddress": "Silent Hill's amusement park",
                "state": "New England",
                "country": "U.S.A",
                "zipCode": "3013",
            },
            "staffs": [
                {
                    "firstname": "Kaz",
                    "lastname": "Miller",
                    "email": "kaz.miller@yopmail.com",
                    "type": "Staff",
                },
                {
                    "firstname": "Paz",
                    "lastname": "Ortega Andrade",
                    "email": "paz.ortegaandrade@yopmail.com",
                    "type": "Staff",
                }
            ],
            "missions": [
                {
                    "title": "Kaz needs Paz",
                    "description": "Kaz, your mission is to escort Paz back to Mother Bade",
                },
                {
                    "title": "Staff recruitement",
                    "description": "Kaz, you are need to recruit two more staff members",
                }
            ]
        }
    },
    {
        message: "Assign Mission of id 1, Kaz needs Paz,  to Staff Users, Kaz Miller & Paz Ortega Andrade",
        method: "post",
        path: "/api/Mission/Update",
        body: {
            "id": 1,
            "staffsId":[2,3]
        }
    },
    {
        message: "Assign Mission of id 2, Staff recruitement,  to Staff Users, Kaz Miller",
        method: "post",
        path: "/api/Mission/Update",
        body: {
            "id": 2,
            "staffsId":[2]
        }
    },
    {
        message: "View the Mission of id 1, Kaz needs Paz",
        method: "post",
        path: "/api/Mission",
        body: {
            "id": 1,
        }
    },
    {
        message: "View the Staff User of id 2, Kaz Miller",
        method: "post",
        path: "/api/User",
        body: {
            "id": 2,
        }
    },

]