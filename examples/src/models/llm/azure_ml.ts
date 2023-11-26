import { AzureMLModel } from "langchain/llms/azure_ml";

const model = new AzureMLModel({
    endpointUrl: "YOUR_ENDPOINT_URL",
    endpointApiKey: "YOUR_ENDPOINT_API_KEY",
    deploymentName: "YOUR_MODEL_DEPLOYMENT_NAME",
});

const res = model.call("Foo");

console.log({ res });