class IPLib {
    static get publicIPAddress() {
        return (process.env.ISLOCAL) ? IPLib.localIPAddress : IPLib.domainIPAddress;
    }
    static get port() {
        return (process.env.ISLOCAL) ? process.env.PORT : process.env.DOMAIN_PORT;
    }
    static get localIPAddress() {
        return process.env.PROTOCOL + process.env.IP + ':' + process.env.PORT;
    }
    static get domainIPAddress() {
        return process.env.DOMAIN_PROTOCOL + process.env.DOMAIN + ':' + process.env.DOMAIN_PORT;
    }

}
module.exports = IPLib;