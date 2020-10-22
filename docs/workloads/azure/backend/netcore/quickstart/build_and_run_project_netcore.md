---
id: build_and_run_project_netcore
title: Build & Run
sidebar_label: Build & Run the Project
---

## Build locally

Move to the `<PROJECT-NAME>/src/api` folder, then

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  groupId="operating-systems"
  defaultValue="windows"
  values={[
  {label: 'Windows', value: 'windows'},
  {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="windows">
      dotnet restore
      <br />
      dotnet clean
      <br />
      dotnet build
      <br />
      dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj
  </TabItem>

  <TabItem value="linux">
      export COSMOSDB_KEY=&#36;&#123;COSMOSDB_KEY&#125;
      <br />
      <br />
      dotnet restore
      <br />
      dotnet clean
      <br />
      dotnet build
      <br />
      dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj
  </TabItem>
</Tabs>

<br />

### Verify that the application has started

Browse to [http://localhost:5000/v1/menu](http://localhost:5000/v1/menu). This should return a valid JSON response.

The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your
browser to [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html).


## Build using docker container

From the `<PROJECT-NAME>/src/api` folder, build a Docker image using e.g. the command below:

```bash title="Build docker image"
docker build -t dotnet-api .
```

This uses the **Dockerfile** in this folder to generate the Docker image.

After the creation of the Docker image, the Docker container can be run using the command below:

```bash title="Run docker container"
docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json -e COSMOSDB_KEY=your-key dotnet-api:latest`
```

:::note
The **COSMOSDB_KEY** described in the command above has to be passed when running the container. Note that the **appsettings.json** value is mounted here for running locally,
but not if the full project is deployed to Azure, where the build process will perform the substitution.
:::
