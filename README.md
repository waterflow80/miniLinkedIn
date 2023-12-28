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
We're using a docker image of **cassandra db** to store our data.
Here are the steps to setup the database image locally:

1. `$ docker pull cassandra:latest`
2. `$ docker run -d --name cassandra-docker -p 9042:9042 cassandra`
3. `$ sudo docker exec -it cassandra-docker cqlsh`
4. `$ CREATE KEYSPACE if NOT EXISTS mini_linked_in WITH replication = {'class': 'SimpleStrategy', 'replication_factor':1};`
5. `$ use mini_linked_in ;`
6. `$ CREATE TABLE user (id UUID PRIMARY KEY, email text, firstname text, lastname text, birthdate date, education text, experience text, projects text, skills text);`