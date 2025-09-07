const { MongoClient, ObjectId, mongoConnection } = require('../mongodbConnection.js');

async function userAddNewMovie(userId, userFullName, movieData) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    const movie = {
        title: movieData.title,
        year: parseInt(movieData.year),
        genres: movieData.genres,
        cast: movieData.actors,
        createdBy: {
            userId: new ObjectId(String(userId)),
            fullname: userFullName
        },
        createdAt: new Date(),
        status: "underReview"
    };

    const result = await db.collection("arMovies").insertOne(movie);
    client.close();

    return result;
}


async function suggestedMovies(req) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const movies = await db.collection("arMovies").find({ "status" : "underReview"}).toArray();
    client.close();
    return movies;
}

async function viewMovieDetails(req) {
    const movieID = req.query.movieID;
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const movie = await db.collection("arMovies").find({ _id: new ObjectId(String(movieID)) }).limit(1).toArray();
    client.close();
    return movie;
}

async function reviewMovieDecision(req) {
    const movieID = req.body.movieID;

    if (!movieID || !ObjectId.isValid(movieID)) {
        throw new Error("Invalid or missing movieID");
    }

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    let status = "underReview";
    if(req.body.decision === "approve") {
        status = "approved";
    }
    else {
        status = "rejected";
    }

    const movie = await db.collection("arMovies").findOneAndUpdate(
        { _id: new ObjectId(String(movieID)) },
        { $set: { status: status } },
        { returnDocument: 'after' }
    );
    
    client.close();
    return movie;
}

module.exports = {
    userAddNewMovie,
    suggestedMovies,
    viewMovieDetails,
    reviewMovieDecision,
}