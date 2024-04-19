import ballerina/http;
import ballerinax/mongodb;
// import ballerina/uuid;
// import ballerina/log;
// import ballerina/log;

type userData record {|
    string firstName;
    string lastName;
    string email;
    // string 

|};
configurable string host = "localhost";
configurable int port = 27017;


configurable string database = "OnlineShoppingPortal";
configurable string username = "nirasha";
configurable string password = "4Qh3lrdm8STII2Ov";
// mongodb +srv: //nirasha:<password>@cluster0.ugsiwjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//SETUP mongoDB Connection
// mongodb:Client c = new()
// string mongoConfig1 =  string `mongodb+srv://${username}:${password}@cluster0.ugsiwjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// //Create a client
// mongodb:Client|mongodb:DatabaseError|mongodb:ApplicationError|error mongoClient = new ({connection: string `mongodb+srv://${username}:${password}@cluster0.ugsiwjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`});



final mongodb:Client mongoDb = check new ({
    //mongodb+srv://nirasha:<password>@cluster0.ugsiwjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    connection: string `mongodb+srv://nirasha:4Qh3lrdm8STII2Ov@cluster0.ugsiwjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`    
});

service on new http:Listener(9091) {
    private final mongodb:Database moviesDb;

    function init() returns error? {
        self.moviesDb = check mongoDb->getDatabase("OnlineShoppingPortal");
    }

    resource function get Users() returns User[]|error {
        mongodb:Collection collection = check   self.moviesDb->getCollection("Users");
        
        stream<User, error?> resultStream  = check collection->find();
        
        return from User m in resultStream select m;
        
        
    }
    resource function post newUser(User newUser) returns string|error {
        mongodb:Collection collection = check   self.moviesDb->getCollection("Users");
        // User newUser = {
        //     username: "Sewwandi",
        //     email: "test@gmail.com",
        //     password: "xyz"
        // };
        mongodb:Error? response = check collection->insertOne(newUser);
        
        if response is (){
            return "success";
        }
        else{
            return "failed to add user" + response.toString();
        }
        
        
    }

    // resource function get movies/[string id]() returns User|error {
    //     return check getMovie(self.moviesDb, id);
    // }

    // resource function post movies(MovieInput input) returns Movie|error {
    //     string id = uuid:createType1AsString();
    //     Movie movie = {id, ...input};
    //     mongodb:Collection movies = check self.moviesDb->getCollection("movies");
    //     check movies->insertOne(movie);
    //     return movie;
    // }

    // resource function put movies/[string id](MovieUpdate update) returns User|error {
    //     mongodb:Collection movies = check self.moviesDb->getCollection("movies");
    //     mongodb:UpdateResult updateResult = check movies->updateOne({id}, {set: update});
    //     if updateResult.modifiedCount != 1 {
    //         return error(string `Failed to update the movie with id ${id}`);
    //     }
    //     return getMovie(self.moviesDb, id);
    // }

    // resource function delete movies/[string id]() returns string|error {
    //     mongodb:Collection movies = check self.moviesDb->getCollection("movies");
    //     mongodb:DeleteResult deleteResult = check movies->deleteOne({id});
    //     if deleteResult.deletedCount != 1 {
    //         return error(string `Failed to delete the movie ${id}`);
    //     }
    //     return id;
    // }
}

// isolated function getMovie(mongodb:Database moviesDb, string id) returns User|error {
//     mongodb:Collection movies = check moviesDb->getCollection("movies");
//     stream<User, error?> findResult = check movies->find({_id});
//     User[] result = check from Movie m in findResult
//         select m;
//     if result.length() != 1 {
//         return error(string `Failed to find a movie with id ${id}`);
//     }
//     return result[0];
// }

public type MovieInput record {|
    string title;
    int year;
    string directorId;
|};

public type MovieUpdate record {|
    string title?;
    int year?;
    string directorId?;
|};

public type User record {|
    // readonly string _id;
    // readonly _id;
    string email;
    string username;
    string password;
|};