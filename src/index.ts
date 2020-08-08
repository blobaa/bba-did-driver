import { bbaMethodHandler, Error, ErrorCode } from "@blobaa/bba-did-method-handler-ts";
import express from "express";
import dotenv from "dotenv";


dotenv.config();
const mainnetUrl = process.env.MAINNET_ADDRESS || "";
const testnetUrl = process.env.TESTNET_ADDRESS || "";
const PORT = process.env.PORT || 8080;


const app = express();
app.get("/1.0/identifiers/:did", async (req, res) => {
    let url = "";

    if (req.params.did.startsWith("did:bba:t:")) {
        url = testnetUrl;
    } else {
        url = mainnetUrl;
    }
    

    try {
        
        const response = await bbaMethodHandler.resolveDID(url, { did: req.params.did });
        res.setHeader('Content-Type', 'application/json');
        res.send(response.didDocument);

    } catch (e) {

        console.log(e);
        const error = e as Error;
        if (isInvalidInput(error)) {
            res.status(400).send("invalid input!");
        } else if (isResolutionError(error)) {
            res.status(404).send("not found");
        } else {
            res.status(500).send("error!");
        }

    }

});

const isInvalidInput = (error : Error): boolean => {
    return error.code === ErrorCode.INVALID_DID_NETWORK_TYPE || error.code === ErrorCode.INVALID_DID_IDENTIFIER ||
           error.code === ErrorCode.INVALID_DID_METHOD || error.code === ErrorCode.INVALID_DID_METHOD_SPECIFIC_IDENTIFIER
}

const isResolutionError = (error: Error): boolean => {
    return error.code === ErrorCode.DID_RESOLUTION_ERROR || error.code === ErrorCode.DIDDOC_NOT_FOUND ||
           error.code === ErrorCode.DID_NOT_FOUND
}



app.listen(PORT, () => {
  console.log(`bba driver running on port ${ PORT }.`);
});