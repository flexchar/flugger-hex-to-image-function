# Hex to PNG Azure Function

This repository contains an Azure Function that generates a PNG image with the given hex code as the background color.

## Getting Started

To get started, you will need to have Node.js 18 and npm 8 installed on your machine.

1.  Clone the repository and navigate to the directory:

```bash
git clone https://github.com/your-username/hex-to-png.git
cd hex-to-png
```

2.  Install the required dependencies:

```bash
npm install
```

3.  Initialize the Azure Function project:

```bash
npm func init
```

4.  In one terminal, run the TypeScript compiler in watch mode:

```bash
npm run watch
```

5.  In another terminal, run the function locally:

```bash
npm run serve
```

The function should now be running locally on your machine. You can use an HTTP trigger to send a request to the function and receive a response with the generated PNG image.

## Usage

To use the function, send a GET request to the following URL, where `c0ffee` is the hex code without a hash tag and `500x600` are the width and height of the image in pixels:

http://localhost:7071/api/hex-to-png/c0ffee/500x600.png

The response will be a PNG image with the specified hex code as the background color and the specified dimensions.

## Deployment

To deploy the function to Azure, you will need to have an Azure account and create a new Function App. For more information on how to do this, see the Azure Functions documentation.

Once you have a Function App set up, you can deploy the function to Azure using the Azure Functions Core Tools.

1. In the terminal, navigate to the directory containing the function code.
2. Run the following command to login to your Azure account:

```bash
az login
```

3. Run the following command to deploy the function to your Function App:

```bash
func azure functionapp publish [your-function-app-name]
```

> Replace [your-function-app-name] with the name of your Function App. For Flugger staff, find existing deployment in the color resource group.

The function should now be deployed and available at the following URL, where c0ffee is the hex code without a hash tag and 500x600 are the width and height of the image in pixels:

```
https://your-function-app-name.azurewebsites.net/api/hex-to-png/c0ffee/500x600.png
```

The response will be a PNG image with the specified hex code as the background color and the specified dimensions.

Developed by [Luke](https://github.com/flexchar/) with 🎨.
