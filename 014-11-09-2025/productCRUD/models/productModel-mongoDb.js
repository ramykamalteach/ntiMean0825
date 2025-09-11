const { MongoClient, ObjectId, mongoConnection } = require('./mongodbConnection');

async function index() {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const products = await db.collection("products").find().toArray();
    client.close();
    return renameProductsID(products);
}

async function myProducts(userId) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const products = await db.collection("products").find({ userId: new ObjectId(String(userId))}).toArray();
    client.close();
    return renameProductsID(products);
}

async function show(id) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const products = await db.collection("products").find({ _id: new ObjectId(String(id))}).toArray();
    client.close();
    return renameProductsID(products);
}

async function store(createFormData) {
    let doc = {};
    doc.productName = createFormData.productName;
    doc.weight = createFormData.weight;
    doc.photo = createFormData.photo;

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    await db.collection("products").insertOne(doc, function(err, res){
        if(err) throw err;
        client.close();
        return {"operation": "success"};
    });
}

async function updateForm(id) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const products = await db.collection("products").find({ _id: new ObjectId(String(id))}).toArray();
    client.close();
    return renameProductsID(products);
}

async function update(updateFormData) {
    const id = updateFormData.id;
    const productName = updateFormData.productName;
    const weight = updateFormData.weight;
    const photo = updateFormData.photo;

    if(photo != "") {
        var updateSQL = { "productName": productName, "weight": weight, "photo": photo };
    }
    else {
        var updateSQL = { "productName": productName, "weight": weight };
    }

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    await db.collection("products").updateOne(
        { _id: new ObjectId(String(id)) },
        { $set : updateSQL },
        function(err, res){
            if(err) throw err;
            client.close();
            return {"operation": "success"};
        }
    );
}

async function destroy(id) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    await db.collection("products").deleteOne(
        { _id: new ObjectId(String(id)) },
        function(err, res){
            if(err) throw err;
            client.close();
            return {"operation": "success"};
        }
    );
}

function renameProductsID(products) {
    return products.map(product => renameID(product));
}

function renameID(product) {
    product.id = product._id;
    delete product._id;
    return product;
}

module.exports = {
    index,
    myProducts,
    show,
    store,
    updateForm,
    update,
    destroy
}