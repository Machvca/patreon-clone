'use server'

import { currentUser } from "@clerk/nextjs/server";
//initialize schematuc SDK

import { SchematicClient } from "@schematichq/schematic-typescript-node"
const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({apiKey}); 


//get temporary access token

export async function getTemporaryToken() {
const user = await currentUser();
if (!user) {
    console.log("No user found, returning null");
    return null;
}

const response = await client.accesstokens.issueTemporaryAccessToken({
    resourceType: "company",
    lookup: {id: user.id}, //the lookup will vary depending on how you have configured your company keys
})

console.log(
    "token response received:",
    response.data ? "Token received" : "No token in response"
)
return response.data.token
}