# uni-resolver-driver-did-bba

A bba DID driver for the Universal Resolver.

This repository contains a DID driver to resolve [bba](https://github.com/blobaa/bba-did-method-specification) DIDs with the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver).


## Install


Build docker container
````
docker build -f ./docker/Dockerfile . -t universalresolver/driver-did-bba
````


run
````
docker container run --publish 8000:8080 --detach --name bba-did-driver bba-did-driver:0.1.0
````