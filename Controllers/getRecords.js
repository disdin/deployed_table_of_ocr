import mongoose from "mongoose";
import schema from "../database/schema.js";

const Records = mongoose.model("Records", schema.recordsSchema);

export default function getRecords(req, res) {
    // console.log(Records);
    Records.find({}, function (err, foundRecords) {
        console.log(foundRecords)
        if (!err) {            
            res.send(JSON.stringify(foundRecords.reverse()))
        }
        else {
            res.status(400).send("notfound in getRecords");
        }
    });
}