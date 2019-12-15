# Description :

This project has been developed for academic purpose (engineering school : [CPE](https://www.cpe.fr/en/)) and is not meant to be reused or sold in it's current state.
But feel free to reuse code samples.

The purpose of this project is to learn how to design and develop an SOA architecture including :

* a front app (React)
* some REST APIs (Java Spring boot) to manage data (from a DB)
* a comm bus (ActivMq) for intern communication
* a realtime server (NodeJS with socket.io)

The developped app is supposed to be an online card-game.

Please mind that this project has been left in an unfinished state due to deadline.


# Requirements :
* you must install [**docker**](https://docs.docker.com/install/) (and docker-compose) on you computer
* you must install **NodeJS** > 10
* (not mandatory, but we used **yarn**, so you might also use yarn instead of npm to avoid any problem)
* you must have you ports **80** and **3000** available. *(for dev apps, you should also have the ports 8081 and 8161 free)*


# First installation :
* clone this repo (and move inside)
* build the front app : `$ cd app-front && yarn build && cd ..`
* build the docker stack : `$ docker-compose build --parallel` (will take a lot of time the first time)
* run the stack : `$ docker-compose up` (might also take a bit of time the first time)

# Commands :
* start environment : `$ docker-compose up` (you can add -d to detach, and Ctrl+C to stop)
* stop environment : `$ docker-compose stop`
* stop and kill all containers/networks : `$ docker-compose down` (/!\ will delete your database data)
* rm environment : `$ docker-compose rm` (/!\ like down command, but also remove stopped stuff)

# Url and Entrypoints :

## Main app :
* When the project is running, you have access to your app on `localhost` wether in `http` or `https`. *(keep in mind that we use a self signed sertificate that our browser mught not like)*

## APIs :
* You can acces to the services REST APIs, using the port **3000** : `localhost:3000` (wether in `http` or `https`).

## Tools (dev) :
* **PhpMyAdmin** to manage the MySql database on port **8081** : `localhost:8081`
    * **user**: `admin`
    * **password**: `admin`
* **ActiveMq** to manage ActiveMq server, using the port **8161** : `localhost:8161`
    * **user**: `admin`
    * **password**: `admin`

> **/!\\** If you try to run this project on **Windows < 10 Pro**, *(using docker toolbox)* everytime It's written `localhost` here, you have to see it as your locale docker ip that is `192.168.99.100` by default. *(if it's not this IP, look at the docker terminal when it starts)*

# Project structure :
* **/app-front** : the **React** app
* **/database** : the files needed to init the **MySql** database (for docker)
* **/game-server** : the **NodeJS** app for the realtime server (socket.io)
* **/log-service** : containt a **Springboot** service used to centralize log processing
* **/monolithic** : the monolithic **Springboot** app version of the 3 services : card / user / store
* **/reverse-proxy** : the files needed to init the **NGINX** reverse-proxy (for docker)
* **/springboot-services** : **NOT USED** contains the **SOA** version of the **Springboot** monolith app 
* **/static-server** : the files needed to init the **NGINX** static-server (for docker) to serve the react app 
* **docker-compose.yml** is our dev docker config file

# Features :

## DONE :
This project covers the following features. Most of the time we developped only one usecase that exploit a feature, to show that we know how to do it, but it's not implemented everywhere :
* Docker :
    * Fully dockerized architecture (but not so complex, and not yet scalable)
    * Use of env variables to setup every conf data inside our apps that can be managed all from the docker-compose file (not possible for enginx that doesn't give access to ENV in conf file)
    * Java build dockerized
* React app :
    * Redux 
    * Reusable components / multiview component
    * API calls **(comm with REST services)**
    * Socket.io comm **(comm with NodeJS socket.io server)**
* Node socket.io server :
    * Socket.io
    * Logger lib that could be shared, to build and send logs
    * Brocker lib to handle and abstract ActiveMq connection/comm **(comm with ActiveMq to services)**
* Log service (Springboot)
    * Isolated service to centralize all logs
    * Listen to messages from ActiveMQ at a specific log topic **(comm with ActiveMq)**
    * Process incomming logs, add timestamp, and store in database **(comm with MySql)**
* Monolith
    * Logger lib that could be shared, to build and send logs **(comm with ActiveMq)**
    * ... (the rest is unchanged and was already given)
* Reverse-Proxy
    * Route incomming request from our only entrypoint to whatever service/app that need to receive it
    * Handle ssl (with self signed certificate)

## WIP :
Here is the list of the work we've done but has not been safe/finidhed enough to be integrated to our stack. So for these, you'll have to ckeck the code to know how we made it :
* Springboot SOA :
    * Maven project structure :
        * common bundle, with abstract and entry point
        * all 3 services devided in two maven project : the lib (to be required by any other service) and the service iself, that is meant to be run.
    * ActiveMq comm between services
        * Use DTO for request structure between services
        * Comm between services through activeMq only
        * Asyn workflow handled (look at store service) to save context before sending request, to be able to resume the process when response is received.
        * Envelope inplementation to send messages between services

## TODO :
Here is the list of what we planned to do but we did not had enough time.
* Springboot SOA :
    * Handle response to REST request after having done a subrequest to another service via ActiveMq (would have required the use of Threads)
* Docker :
    * Be able to handle the sevice build and deploy of the Springboot SOA, with maven local dependencies (It never worked smoothly when we tested)
* Other :
    * Add a real user Auth (jwt, salt, hash)
    * Finish the project :^)



# Team (group n°4) :
* Antoine PEROT
* Clément GILLET
* Paul SENON
* Pierre DUCROZET