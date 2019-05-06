const axios = require('axios');

const authObject = {
    token: '',
    from: '',
    url: '',
    send: async function(to, text) {
        axios.get(this.url, {
                params: {
                    token: this.token,
                    from: this.from,
                    to: to,
                    text: text
                }
            }
        )
        .then(response => console.log(response.data))
        .catch(err => console.log(err.response.data));
    }
};

module.exports = sms = function(config) {
    authObject.token = config.token;
    authObject.from = config.from;
    authObject.url = config.url;
    return authObject;
}