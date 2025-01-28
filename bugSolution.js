```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('your_database'); // Replace with your database name
    const collection = db.collection('users');
    const query = { name: 'John Doe' };

    const doc = await collection.findOne(query);

    if (!doc) {
      console.log('Document not found');
    } else {
      console.log(doc.age || 'Age not available'); //Handle missing field gracefully
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```