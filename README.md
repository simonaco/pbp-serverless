# CRUD Serverless API

This project represents a fully serverless implementation for a CRUD (Create, Retrieve, Update, Delete) API implemented with [Azure Functions](https://aka.ms/azure-functions) and [Azure Cosmos DB](https://aka.ms/azure-cosmosdb).

For the purpose of this demo we are going to use an Angular application built by [John Papa](https://twitter.com/John_Papa). The code for this application is available on Github at [Angular Cosmos DB](https://github.com/johnpapa/angular-cosmosdb).

You can watch John Papa and I talk about this project in this [Pluralsight course](https://aka.ms/pbp). 

## Requirements

1.  Install the [Azure Functions for Visual Studio Code](https://aka.ms/vscode-azure-functions) extension

## Getting Started

1.  Clone this repository

    ```bash
    git clone https://github.com/simonaco/pbp-serverless.git
    cd pbp-serverless
    ```

1.  Install the npm packages

    ```bash
    npm i
    ```

1.  Configure Cosmos DB server settings

    Go to `local.settings.json` in the project root and update it with your Cosmos DB settings. If the file doesn't exist, make sure to create it. Replace the database name, password and port with your specific configuration.

    ```javascript
    // local.settings.json
    {
    "IsEncrypted": false,
        "Values": {
            "AzureWebJobsStorage": "",
            "CosmosDBURL": "mongodb://<your-HOST-goes-here>:<your-PORT-goes-here>/?ssl=true",
            "CosmosDBUser": "<your-USERNAME-goes-here>",
            "CosmosDBPass": "<your-PASSWORD-goes-here>",
            "CosmosDB": "<your-cosmos-db-name-goes-here>"
        },
        "Host": {
            "LocalHttpPort": 7071,
            "CORS": "*"
        }
    }
    ```

1.  Go to [Angular Cosmos DB](https://github.com/johnpapa/angular-cosmosdb) and follow steps to get started and run the app there

## Running the application locally

1.  Open the application in VS Code and run application

    ![Run Azure Functions locally in VS Code](https://i.imgur.com/GfjuEKD.gif)

1.  Assuming you went through the steps of installing and running your Angular application locally now open the app in VS Code and go to `hero.service.ts` and configure your endpoint to be the newly created functions:

    ```javascript
    const api = 'http://localhost:7071/api';
    ```

## Publish your API to the cloud

1.  In VS Code go to Azure Functions extension and follow steps in this [video](https://youtu.be/8GAO3obgEzc)

1.  In the Azure portal go to your newly published function app and copy URL

    ![Get Function URL from the Azure portal](https://i.imgur.com/LCl1kNN.gif)

1.  In your Angular app go to `hero.service.ts` and configure your endpoint to point to the newly deployed function:

    ```javascript
    const api = 'https://sicotin-serverless.azurewebsites.net/api';
    ```

---

If you're looking for more use cases on what you can build with serverless make sure to checkout [An open source set of common use cases for Azure Functions](https://aka.ms/serverless-demos)

## Problems or Suggestions

[Open an issue here](https://github.com/simonaco/pbp-serverless/issues)
