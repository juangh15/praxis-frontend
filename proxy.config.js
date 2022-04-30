const PROXY_CONFIG = {
  "/api/": {
    "target" :"http://"+process.env.API_URL+":8080",
    "secure": false,
    "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG;
