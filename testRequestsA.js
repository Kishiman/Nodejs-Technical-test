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
        }
    },
    {
        message: "Create the Address for John Doe",
        method: "post",
        path: "/api/Address/Create",
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
        }
    },
    {
        message: "Create the Address for Outer Heaven",
        method: "post",
        path: "/api/Address/Create",
        body: {
            "fullAddress": "Silent Hill's amusement park",
            "state": "New England",
            "country": "U.S.A",
            "zipCode": "3013",
            "companyId": 1,
        }
    },
    {
        message: "View the Company of id 1, Outer Heaven",
        method: "post",
        path: "/api/Company",
        body: {
            "id": 1,
        }
    },
    {
        message: "Create the first Staff User, Kaz Miller",
        method: "post",
        path: "/api/User/Create",
        body: {
            "firstname": "Kaz",
            "lastname": "Miller",
            "email": "kaz.miller@yopmail.com",
            "type": "Staff",
            "parentCompanyId": 1,
        }
    },
    {
        message: "Create the second Staff User, Paz Ortega Andrade",
        method: "post",
        path: "/api/User/Create",
        body: {
            "firstname": "Paz",
            "lastname": "Ortega Andrade",
            "email": "paz.ortegaandrade@yopmail.com",
            "type": "Staff",
            "parentCompanyId": 1,
        }
    },
    {
        message: "Create the first Mission, Kaz needs Paz",
        method: "post",
        path: "/api/Mission/Create",
        body: {
            "title": "Kaz needs Paz",
            "description": "Kaz, your mission is to escort Paz back to Mother Bade",
            "companyId": 1,
            "staffsId":[2,3]
        }
    },
    {
        message: "Create the second Mission, Staff recruitement",
        method: "post",
        path: "/api/Mission/Create",
        body: {
            "title": "Staff recruitement",
            "description": "Kaz, you are need to recruit two more staff members",
            "companyId": 1,
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
        message: "View the Staff User of id 3, Paz Ortega Andrade",
        method: "post",
        path: "/api/User",
        body: {
            "id": 3,
        }
    },

]