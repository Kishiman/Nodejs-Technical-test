module.exports = testRequest = [
    /// Level 1
    {
        message: "Create the first CEO User, John Doe",
        path: "/api/User/Create",
        method: "post",
        body: {
            "firstname": "John",
            "lastname": "Doe",
            "email": "john.doe@yopmail.com",
            "phoneNumber": "+21622446688",
            "type": "CEO",
        }
    },
    {
        message: "Create the Address for John Doe",
        path: "/api/Address/Create",
        method: "post",
        body: {
            "fullAddress": "13 Walter Street,Silent Hill ",
            "state": "New England",
            "country": "U.S.A",
            "zipCode": "204863",
            "userId": 1,
        }
    },
    {
        message: "View the User of id 1, John Doe",
        path: "/api/User",
        method: "post",
        body: {
            "id": 1,
        }
    },
    {
        message: "Create the first Company, Outer Heaven",
        path: "/api/Company/Create",
        method: "post",
        body: {
            "name": "Outer Heaven",
            "ceoId": 1,
        }
    },
    {
        message: "Create the Address for Outer Heaven",
        path: "/api/Address/Create",
        method: "post",
        body: {
            "fullAddress": "Silent Hill's amusement park",
            "state": "New England",
            "country": "Zanzibar",
            "zipCode": "3013",
            "companyId": 1,
        }
    },
    {
        message: "View the Company of id 1, Outer Heaven",
        path: "/api/Company",
        method: "post",
        body: {
            "id": 1,
        }
    },
    {
        message: "Create the first Staff User, Kaz Miller",
        path: "/api/User/Create",
        method: "post",
        body: {
            "firstname": "Kaz",
            "lastname": "Miller",
            "email": "kaz.miller@yopmail.com",
            "type": "Staff",
            "companyId": 1,
        }
    },
    {
        message: "Create the second Staff User, Paz Ortega Andrade",
        path: "/api/User/Create",
        method: "post",
        body: {
            "firstname": "Paz",
            "lastname": "Ortega Andrade",
            "email": "paz.ortegaandrade@yopmail.com",
            "type": "Staff",
            "companyId": 1,
        }
    },
    {
        message: "Create the first Mission",
        path: "/api/Mission/Create",
        method: "post",
        body: {
            "title": "Kaz needs Paz",
            "description": "Kaz, your mission is to escort Paz back to Mother Bade",
            "companyId": 1,
            "staffsId":[2,3]
        }
    },
    {
        message: "View the Mission of id 1, Kaz needs Paz",
        path: "/api/Mission",
        method: "post",
        body: {
            "id": 1,
        }
    },

]