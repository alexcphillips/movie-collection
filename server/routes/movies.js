const { mongo } = require("../../database");

exports.insertMany = async (req, res) => {
    try {
        console.log(req.body);
        const result = await mongo.db
            .collection("movies")
            .insertMany([req.body]);
        return result
            ? res.status(201).send({
                  data: `A document was inserted with the _id(s): ${result.insertedCount}`,
              })
            : res.status(400).send(result);
    } catch (err) {
        console.error(err.stack);
    }
};

exports.deleteById = async (req, res) => {
    try {
        console.log(req.params.id);
        const result = await mongo.db
            .collection("movies")
            .deleteOne({ _id: req.params.id });
        return result
            ? res.status(200).send({
                  data: `A document was deleted with the _id: ${JSON.stringify(
                      result
                  )}`,
              })
            : res.status(400).send(result);
    } catch (err) {
        console.error(err.stack);
    }
};
