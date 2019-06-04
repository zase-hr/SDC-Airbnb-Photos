# Project Name

> Project description

## Related Projects

  - https://github.com/hacker-home/Airbnb-info
  - https://github.com/hacker-home/Airbnb-booking
  - https://github.com/hacker-home/Airbnb-reviews
  - https://github.com/hacker-home/Airbnb-more-homes

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

# Development

# API 
Route to an existing photo carousel \s\s\  
http://localhost:3001/?id=2

The port number for this app: 3001 

### Get Request 
Purpose: To send a request for all the data needed to run the Module.

Endpoint: '/photos/:listingID'

Response objects return as the following example:\s\   
&nbsp;&nbsp;response.data = [ {\s\
&nbsp;&nbsp;&nbsp;&nbsp;_id: 5cf6da9baf4cc362df864cca,\s\
&nbsp;&nbsp;&nbsp;&nbsp;listingID: 2,\s\
&nbsp;&nbsp;&nbsp;&nbsp;listingDesc: 'Aut est velit architecto.',\s\
&nbsp;&nbsp;&nbsp;&nbsp;isSaved: true,\s\
&nbsp;&nbsp;&nbsp;&nbsp;listingPhotos: [ [Object], [Object], [Object], [Object], [Object] ],\s\
&nbsp;&nbsp;__v: 0\s\
     } ]

### POST Request
Purpose: To add a new photo to the database.

Endpoint: '/add-photos'

Post Request object: \s\
&nbsp;&nbsp;{\s\
&nbsp;&nbsp;&nbsp;&nbsp;"id" : 2,\s\
&nbsp;&nbsp;&nbsp;&nbsp;"photo": {\s\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://images.app.goo.gl/5fCMN61y6zZEH5NUA",\s\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"desc": "hello my name is Zach pierce",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isVerified": true
	}
}

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
### CRUD operations 
  The URL for this project will be 
  
  http://localhost:3001/(Endpoint)

     Endpoints 

 ~ Update/Post ~ 
   '/add-photos'
   
 

