// const {MongoClient} = require('mongodb');

// async function main()
//     {
//         uri="mongodb://0.0.0.0:27017/";
//         const client = new MongoClient(uri);
//         try {
//             await client.connect();
//             await listDatabases(client);
//         } catch (e) {
//             console.error(e);
//         }
//         finally {
//             await client.close();
//         }
//     }
// main();


// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
    }
);


//Once retrieved, how do we access the 'product_id' value of row1?
//A. result[0].product_id
//B. fields[0].product_id
//C. result.row1.product_id
//D. result[1].product_id

//The find method also includes the callback function. True or false?
//A. True
//B. False
//a