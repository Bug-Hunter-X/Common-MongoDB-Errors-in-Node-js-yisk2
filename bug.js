```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, (err, doc) => {
  if (err) throw err; // Handle error properly
  if (!doc) {
    console.log('Document not found'); //Avoid implicit null checks
  } else {
    console.log(doc.age); // Accessing properties that may not exist
  }
});
```