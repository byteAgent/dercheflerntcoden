const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

class TodoService {
    async getTodos() {
        const client = await new MongoClient(url, {useUnifiedTopology: true}).connect();
        const db = client.db('dclc');
        const result = await db.collection('todos').find({}, { projection: { _id: 0, name: 1} }).toArray();
        return result;
    }
}
module.exports=TodoService;