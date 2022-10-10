const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://mongo:27017/movie-collection");
exports.mongo = { db: null };
exports.connect = async () => {
    try {
        await client.connect();
        exports.mongo.db = client.db();
        console.log("Connected to db");
        // process.on("SIGINT", async () => {
        //     console.log("Closing db connection due to error or program end");
        //     await client.close();
        //     process.exit();
        // });
    } catch (err) {
        console.log("Caught error in mongo connect");
        console.error(err.stack);
    }
};
