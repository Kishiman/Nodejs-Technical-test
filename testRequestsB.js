module.exports = testRequest = [
    /// Level 1
    {
        message: "View all Users",
        method: "post",
        path: "/api/User/all",
        body: {
        }
    },
    {
        message: "View all Companies",
        method: "post",
        path: "/api/Company/all",
        body: {
        }
    },
    {
        message: "View all Missions",
        method: "post",
        path: "/api/Mission/all",
        body: {
        }
    },
    {
        message: "View all Staff Users",
        method: "post",
        path: "/api/User/all",
        body: {
            "where": {
                "type": "Staff",
            }
        }
    },
    {
        message: "View Staff Users associated to Company of id 1, Outer Heaven",
        method: "post",

        path: "/api/Company/get/staffs",
        body: {
            "id": 1,
        }
        // You can use the following alternative:
        // path: "/api/User/all",
        // body: {
        //     "where": {
        //         "companyId": 1,
        //     }
        // }
    },
    {
        message: "View Missions associated to Staff User of id 3, Paz Ortega Andrade",
        method: "post",
        path: "/api/User/get/missions",
        body: {
            "id": 3,
        }
        // You can use the following alternative:
        // path: "/api/Mission/all",
        // body: {
        //     "where": {
        //         "staffId": 1,
        //     }
        // }
    },

]