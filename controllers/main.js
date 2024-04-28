const staticFile = require('../appModules/http-utils/static-file');
const {getData, endpoints} = require("../appModules/api");
const {makeRatingFile} = require("../appModules/rating");
const {PATH_TO_RATING_FILE} = require("../appModules/rating/config");


async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.game);
    console.log(data);
    await makeRatingFile(PATH_TO_RATING_FILE, data);

    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
};

module.exports = mainRouteController;