const { MongoClient, ObjectId, mongoConnection } = require('./mongodbConnection');

/* async function index() {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const movies = await db.collection("movies").find().sort("year" , -1).limit(20).toArray();
    client.close();
    return renameMoviesID(movies);
} */

async function index(req) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    const { actor, year } = req.query; // const acror = req.query.actor; const year = req.query.year;

    let query = {};

    if (actor) {
        query.cast = { $regex: actor, $options: 'i' };
    }
    if (year) {
        query.year = parseInt(year);
    }

    let movies = [];
    if(!actor && !year){
        movies = await db.collection("movies").find().sort({ year: -1 }).limit(20).toArray();
    }
    else{
        movies = await db.collection("movies").find({$and : [query]}).sort({ year: -1 }).limit(19).toArray();
    }
    
    client.close();
    return renameMoviesID(movies);
}

async function show(id) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const movies = await db.collection("movies").find({ _id: new ObjectId(String(id))}).toArray();
    client.close();
    return renameMoviesID(movies);
}


async function searchMovie(searchForm) {

    const searchText = searchForm.searchText;
    const searchType = searchForm.searchType;

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    let movies = [];

    if (searchType === "title") {
        movies = await db.collection("movies").find({ title: { $regex: searchText, $options: 'i' } }).sort({ year: -1 }).limit(20).toArray();
    }
    if (searchType === "actor") {
        movies = await db.collection("movies").find({ cast: { $regex: searchText, $options: 'i' } }).sort({ year: -1 }).limit(20).toArray();
    }

    client.close();
    return renameMoviesID(movies);
}


async function searchMovieGenres(movieGenres) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const movies = await db.collection("movies").find({ genres: { $regex: movieGenres, $options: 'i' } }).sort({ year: -1 }).limit(20).toArray();
    client.close();
    return renameMoviesID(movies);
}

function renameMoviesID(movies) {
    return movies.map(movie => renameID(movie));
}

function renameID(movie) {
    movie.id = movie._id;
    delete movie._id;
    return movie;
}

module.exports = {
    index,
    show,
    searchMovie,
    searchMovieGenres,
}