You have to run the GildedRose API before starting the project, follow the steps found in:
https://hub.docker.com/r/juangh15/gildedrose-api

## Steps for BUILD the Dockerfile:

#### 1 - Clone this present repository in a directory:
#### 2 - Change your directory to the root folder of the repository, to locate the Dockerfile:

	cd /YOUR_USER_PATH_TO_DIRECTORY/.../praxis-frontend/

#### 3 - Execute the build command with the required parameters:
IMPORTANT: in "API_URL_ARG=api-container" the parameter "api-container" refers to the IP of the API running, you must change it before building.

	docker build --no-cache --build-arg API_URL_ARG=api-container -t gildedfront .

#### 4 - Check if the image was created:
Check that the image with the name "gildedfront" is present when running:

	docker images

## Steps for RUN the gildedfront image builded:
#### 1 - Start up the API:
(Skip this step if it has already been done during the build process).
Follow the steps found in the readme of:
https://hub.docker.com/r/juangh15/gildedrose-api

#### 2 - Run the container:
To run the container it is necessary to define the parameters with which the connection to the API will be made. This only requires the command:

```
docker run --name front-container --network backend_net --env API_URL=api-container -p 4200:4200 -d gildedfront
```
##### EXPLANATION OF THE PARAMETERS:
* "--name front-container": The name by which the container will be identified in this case will be "front-container".
* "--network backend_net": With this parameter, the container will connect to the "backend_net" created in the step 1.
* "-p 4200:4200": The same port 4200 of the host will be mapped to the container.
* "gildedfront: The name of the image builded.

##### EXPLANATION OF THE "--env" (environment variables):
* "API_URL=api-container" : IP of the API to which the frontend will connect, in this case "api-container" is used because it is the name of the API container within the "backend_net" network.

#### 3 - Verify that the container is running:
Wait a few minutes and the API will be exposed to the web address: 

http://localhost:4200

If it is working correctly, when entering the previous address from a browser the gildedrose front will load.
