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
npm run build-start
````


### Docker

Build docker container:

````
docker build -f ./docker/Dockerfile . -t blobaa/bba-did-driver
````

Start container:

````
docker container run --publish 8080:8080 --detach --name bba-did-driver blobaa/bba-did-driver
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
did:bba:47ef0798566073ea302b8178943aaa83f227614d6f36a4d2bcd92993bbed6044
```

## Trouble Shooting

If you run into problems while resolving DIDs or creating / running the Docker image / container, use the Node.js way to run and debug the driver.


## Driver Update

The process of updating the driver involves following steps:

1. Update the driver code / dependencies
2. Test the driver locally (Node.js and Docker way)
3. Commit and push changes
4. There is a Docker pipeline that automatically pulls the newest code and updates the image accordingly on [Docker Hub](https://hub.docker.com/repository/docker/blobaa/bba-did-driver/general)
5. Create a new GitHub release
6. Sync Docker tag with GitHub tag

TODO: automate step 5 and 6 with GitHub Actions


## Contributing

PRs accepted.

If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.


## License

[MIT](./LICENSE) © Attila Aldemir