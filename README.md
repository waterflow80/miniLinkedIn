# miniLinkedIn
The MiniLinkedIn project aims at providing a web based user interface that allows users to instantly create a custom resume by providing their information, post job offers by providing the job description (requirements, responsibilities, salary, etc..) and also try to find a job or match that best fits the user’s resume (created on the platform).

![Mini2](https://github.com/waterflow80/miniLinkedIn/assets/82417779/f839de9f-f67a-47cb-a821-ed2472526daf)

## Technology Set
- ExpressJs
- ECMAScript
- EJS - Embedded JavaScript templates
- [Vitest](https://vitest.dev/)
- HTML 5
- Bootsrap 5

## Run Locally
1. `$ git clone https://github.com/waterflow80/miniLinkedIn.git` (clone the repository)
2. `$ npm install` (install the required modules)
3. `$ npm test` (Optional: to run the tests)
4. `$ npm start` (Start the application)

## Database Setup
We're using a docker image of **MongoDB** to store our data.
Here are the steps to setup the database image locally:

1. `$ docker pull mongodb/mongodb-community-server`
2. `$ docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:latest` (**Note** the `-p` port forwarding is important)
3. `$ docker exec -it mongo mongosh` This would generate the following output at connection time: 
```bash
Current Mongosh Log ID:	658f1d3e............
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1
Using MongoDB:		x.x.x
Using Mongosh:		x.x.x

For mongosh info see: https://docs.mongodb.com/mongodb-shell/
```
The `Connecting to` uri will be used in **NodeJs** to connect to Mongo.


