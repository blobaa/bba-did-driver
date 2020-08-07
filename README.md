# bba-did-driver

Universal Resolver DID Driver for the `bba` DID.

This repository contains a DID driver to resolve [bba](https://github.com/blobaa/bba-did-method-specification) DIDs with the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver).


## Usage

Clone repository

````
git clone https://github.com/blobaa/bba-did-driver.git
````


### Nodejs

Install dependencies

````
npm install
````


Build and start server

````
npm run buildStart
````


### Docker

Build docker container

````
docker build -f ./docker/Dockerfile . -t blobaa/bba-did-driver
````

Start container

````
docker container run --publish 8000:8080 --detach --name bba-did-driver bba-did-driver:0.1.0
````


### Test

```curl
curl -X GET http://localhost:8080/1.0/identifiers/did:sirius:2VhYrbauc2cCx9ZpCp5wrDtK7HKf7jrsvgoKBD4KgK
```




# tsjs-did-siriusid-driver

Universal Resolver DID Driver for the `did:sirius` identity

## Example DID

```ts
did:sirius:2VhYrbauc2cCx9ZpCp5wrDtK7HKf7jrsvgoKBD4KgK
```

## Example request

```curl
curl -X GET http://localhost:8080/1.0/identifiers/did:sirius:2VhYrbauc2cCx9ZpCp5wrDtK7HKf7jrsvgoKBD4KgK
```

## Get Started

Clone this repository

```git
git clone https://gitlab.com/proximax-enterprise/siriusid/tsjs-did-sirius-id-driver
```

Install all packages

```yarn
yarn install
```

Run server locally

```yarn
yarn server
```

Test

```curl
curl -X GET http://localhost:8080/1.0/identifiers/did:sirius:2VhYrbauc2cCx9ZpCp5wrDtK7HKf7jrsvgoKBD4KgK
```

## Docker

Build docker

```docker
docker build -f ./docker/Dockerfile . -t proximax/tsjs-did-sirius-id-driver
```

Run the docker container

```docker
docker run -it --rm --name tsjs-did-sirius-id-driver -p 8080:8080 proximax/tsjs-did-sirius-id-driver
```

Get the image

```docker
docker pull proximax/tsjs-did-sirius-id-driver
```