import { baaMethodHandler } from "@blobaa/baa-did-method-handler-ts";
import express from "express";


const mainnetUrl = "https://ardor.jelurida.com";
const testnetUrl = "https://testardor.jelurida.com";

const PORT = 8080;


const app = express();
app.get("/1.0/identifiers/:did", async (req, res) => {
    let url = "";


    if (req.params.did.startsWith("did:baa:t:")) {
        url = testnetUrl;
    } else {
        url = mainnetUrl;
    }


    try {
        const response = await baaMethodHandler.resolveDID(url, { did: req.params.did });
        res.send(response.didDocument);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.description);
    }

});


app.listen(PORT, () => {
  console.log(`baa Resolver driver running on port ${ PORT }...`);
});