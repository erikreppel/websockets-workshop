Websockets and Webapps Summary
===

Webapps
---
Consist typically of:
- Frontend (code sent to client browser)
	- Common Javascript frameworks: Jquery, ReactJS, AngularJS, Backbone, Ember
	- Common CSS frameworks: Bootstrap, Skeleton, Pure
- Backend (server that handles client requests and returns content)
	- Common frameworks: Express (NodeJS), Flask (Python), Django (Python), Ruby on Rails, Play (Java), .Net (C#)
	- Common generic servers (used to just serve static pages or load balance typically): Apache, NGINX
- Data store
	- Common databases and data stores: SQL family (MSSQL, MYSQL, Oracle), MongoDB, CouchDB, Elasticsearch, Cassandra

- Common stacks:
	- MEAN - Mongo, Express, AngularJS, NodeJS
	- LAMP - Linux, Apache, MYSQL, PHP

Networking
---

- Most of the internet as you think of it runs of TCP/IP
- TCP is just a connection bytes go through
- HTTP and Websockets are just agreements on how to use TCP

#### HTTP
	- Hypertext Transfer Protocol
	- How your browser accesses websites
	- Allows specific things to be done in predictable ways
	- Most common functions: GET, POST
	- Opens connection, sends data, closes connection

[More Info if you really want it](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

#### Websockets
	- Starts as an HTTP connection then gets upgraded
	- Keeps connection open after upgrade occurs
	- Allows for data transfer between client and server without having to create a new request
