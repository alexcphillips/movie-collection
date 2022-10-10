const mongo = require("../database");
// const redis = require("../redis");
const app = require("./app");

(async () => {
    await mongo.connect();
    // await redis.connect();
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server started successfully");
    });
})();
