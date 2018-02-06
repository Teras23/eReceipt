'use strict';

module.exports = class Receipt {
    constructor(db) {
        this.db = db;
        const that = this;
        this.db(function(error, database) {
            if(error) {
                throw error;
            }
            else {
                that.database = database;
            }
        });
    }

    get(req, res) {
        console.log(req.query);
        this.database.collection('test').find().toArray(function(err, docs) {
            res.json(docs);
        });
    }

    post(req, res) {
        res.json({});
    }
};