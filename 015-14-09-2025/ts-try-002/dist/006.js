"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MySQLDatabase {
    connect() {
        console.log("Connected to MySQL");
    }
}
class MongoDBDatabase {
    connect() {
        console.log("Connected to MongoDB");
    }
}
class UserService {
    db;
    constructor(db) {
        this.db = db;
    }
    getUser() {
        this.db.connect();
        console.log("Fetching user...");
    }
}
// Inject MySQL
const mysqlService = new UserService(new MySQLDatabase());
mysqlService.getUser();
// Inject MongoDB
const mongoService = new UserService(new MongoDBDatabase());
mongoService.getUser();
/* class MySQLDatabase {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  private db: MySQLDatabase;

  constructor() {
    this.db = new MySQLDatabase();
  }

  getUser() {
    this.db.connect();
    console.log("Fetching user...");
  }
}

const service = new UserService();
service.getUser(); */ 
//# sourceMappingURL=006.js.map