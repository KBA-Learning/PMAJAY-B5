Install Mongodb  ( open a terminal and follow instructions in the following link)

https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

After Installation do following commands

`` sudo systemctl start mongod``

``sudo systemctl status mongod``

To enter into the mongodb shell (Press ctl+c and  type the following commands)

``mongosh``


``show databases``

``show collections``

``use sample``

Perform CRUD Operations

``db.myCollection.insertOne({ name: "John Doe", age: 29, city: "New York" })``

``db.myCollection.insertMany([{ name: "Jane Doe", age: 25, city: "Los Angeles" },{ name: "Mike Smith", age: 32, city: "Chicago" }])``

``db.myCollection.findOne({ name: "John Doe" })``

``db.myCollection.find({ age: { $gt: 25 } })``

``db.myCollection.updateOne({ name: "John Doe" },{ $set: { city: "San Francisco" } })``

`` db.myCollection.updateMany({ age: { $lt: 30 } },{ $set: { status: "young" } })``

``
db.userdetails.updateMany({userName:"Anu"},{$set:{age:"30",empid:"emp_08"}})
``

``db.myCollection.deleteOne({ name: "Mike Smith" })``

``db.myCollection.deleteMany({ age: { $gt: 30 } })``


To stop Mongodb

``sudo systemctl stop mongod``








