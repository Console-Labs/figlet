const figlet = require('figlet');


const figletify = async  (text) => {
    return new Promise((resolve, reject) => {
        figlet(text, (err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data);
        })
    })

};

module.exports = {
    figletify
}
