
import { MongoClient, ObjectId } from 'mongodb'; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from '$env/static/private';

console.log("hallo " + DB_URI);
const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db('Makeup') // select database

//////////////////////////////////////////
// Artists
//////////////////////////////////////////

// Get all artists
async function getProducts() {
    let products = [];
    try {
        const collection = db.collection('products');

        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
        const query = {};

        // Get all objects that match the query
        products = await collection.find(query).toArray();
        products.forEach(product => {
            product._id = product._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return products;
}

// Get all artists
async function getProductsFiltered(producttypefilter) {
    let products = [];
    try {
        const collection = db.collection('products');

        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
        
        //get all
        let query = {};

        if(producttypefilter != "all") {
            //get by filter
            query = {producttype: producttypefilter};
        }

        // Get all objects that match the query
        products = await collection.find(query).toArray();
        products.forEach(product => {
            product._id = product._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    console.log(products);
    return products;
}

// Get artist by id
async function getProduct(id) {
    let product = null;
    try {
        const collection = db.collection('products');
        const query = { _id: new ObjectId(id) }; // filter by id
        product = await collection.findOne(query);

        if (!product) {
            console.log("No product with id " + id);
            // TODO: errorhandling
        } else {
            product._id = product._id.toString(); // convert ObjectId to String
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return product;
}

// create an artist
async function createProduct(product) {
    try {
        const collection = db.collection('products');
        const result = await collection.insertOne(product);
        return result.insertedId.toString(); // convert ObjectId to String
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return null;
}

// update artist
// returns: id of the updated artist or null, if artist could not be updated
async function updateProduct(product) {

    try {
        let id = product._id;
        delete product._id; // delete the _id from the object, because the _id cannot be updated
        const collection = db.collection('products');
        const query = { _id: new ObjectId(id) }; // filter by id
        const result = await collection.updateOne(query, { $set: product });

        if (result.matchedCount === 0) {
            console.log("No product with id " + id);
            // TODO: errorhandling
        }
        else {
            console.log("Product with id " + id + " has been updated.");
            return id;
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return null;
}

// delete artist by id
// returns: id of the deleted artist or null, if artist could not be deleted
async function deleteProduct(id) {

    try {
        const collection = db.collection('products');
        const query = { _id: new ObjectId(id) }; // filter by id
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 0) {
            console.log("No object with id " + id)
        }
        else {
            console.log("Object with id " + id + " has been successfully deleted.")
            return id;
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return null;
}

//////////////////////////////////////////
// Skintypes
//////////////////////////////////////////

// Get all skintypes
async function getSkintypes() {
    let skintypes = [];
    try {
        const collection = db.collection('skintypes');

        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
        const query = {};

        // Get all objects that match the query
        skintypes = await collection.find(query).toArray();
        skintypes.forEach(skintypes => {
            skintypes._id = skintypes._id.toString(); // convert ObjectId to String
        });
        //console.log(albums)

    } catch (error) {
        // TODO: errorhandling
    }
    return skintypes;
}

// Get album by id
async function getSkintype(id) {
    let skintype = null;
    try {
        const collection = db.collection('skintypes');
        const query = { _id: new ObjectId(id) }; // filter by id
        skintype = await collection.findOne(query);

        if (!skintype) {
            console.log("No skintype with id " + id);
            // TODO: errorhandling
        } else {
            skintype._id = skintype._id.toString();  // convert ObjectId to String
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return skintype
    ;
}




// export all functions so that they can be used in other files
export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getSkintypes,
    getSkintype,
    getProductsFiltered 

}
