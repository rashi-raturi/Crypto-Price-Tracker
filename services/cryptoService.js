const axios = require('axios');

const getPrice = async (cryptoId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
        console.log(response.data);

    } catch (error) {
        console.log(error);
    }
};

module.exports = getPrice;