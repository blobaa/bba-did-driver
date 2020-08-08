# bba-did-driver

Universal Resolver DID Driver for the `bba` DID.

This repository contains a DID driver to resolve [bba](https://github.com/blobaa/bba-did-method-specification) DIDs with the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver).


## Install

Clone repository:

````
git clone https://github.com/blobaa/bba-did-driver.git
````


### Nodejs

Install dependencies:

````
npm install
````


Build and start server:

````
npm run buildStart
````


### Docker

Build docker container:

````
docker build -f ./docker/Dockerfile . -t blobaa/bba-did-driver
````

Start container:

````
docker container run --publish 8080:8080 --detach --name bba-did-driver bba-did-driver:0.1.0
````

This maps your local port 8080 to the docker container.

## Usage

Request a DID resolution:

````
curl -X GET http://localhost:8080/1.0/identifiers/did:bba:t:45e6df15dc0a7d91dcccd24fda3b52c3983a214fb0eed0938321c11ec99403cf
````


### Example DIDs

Testnet:

```
did:bba:t:45e6df15dc0a7d91dcccd24fda3b52c3983a214fb0eed0938321c11ec99403cf
```

Mainnet:

```
did:bba:<tbd>
```
