const IPLib = require('./ip');
const fs = require('fs');
const fetch = require("node-fetch");

class TestRequestsLib {
    static async Test(requests, filepath) {
        var reqt = { headers: { 'Content-Type': 'application/json' }, body: {}, }
        for (const request of requests) {
            reqt.body = request.body;
            const now = new Date(Date.now())
            console.log("testRequest.path:", request.path);
            await fs.appendFile(filepath, + "\n" + now.toISOString() + "\n-->" + request.method + " : " + request.path + "\n", () => { })
            const res = await fetch("http://127.0.0.1:" + IPLib.port + request.path, {
                method: request.method,
                body: JSON.stringify(reqt.body),
                headers: reqt.headers,
            }).catch(async err => {
                console.error(err);
                await fs.appendFileSync(filepath, "ERROR-->" + JSON.stringify(err, null, '\t') + "\n")
            })
            try {
                await fs.appendFileSync(filepath, "MESSAGE:" + JSON.stringify(request.message, null, '\t') + "\n")
                json = await res.json()
                await fs.appendFileSync(filepath, "RESPONSE:" + JSON.stringify(json, null, '\t') + "\n")
            } catch (error) {
                console.error(error);
            }
        }
    }
}
module.exports = TestRequestsLib;