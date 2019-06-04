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
Route to an existing photo carousel  
http://localhost:3001/?id=2

The port number for this app: 3001 

# Get Request 
Purpose: To send a request for all the data needed to run the Module.

Endpoint: '/photos/:listingID'

## GET Response ( To Client )
&nbsp;&nbsp;response.data = [ {  
&nbsp;&nbsp;&nbsp;&nbsp;_id: 5cf6da9baf4cc362df864cca,  
&nbsp;&nbsp;&nbsp;&nbsp;listingID: 2,  
&nbsp;&nbsp;&nbsp;&nbsp;listingDesc: 'Aut est velit architecto.',  
&nbsp;&nbsp;&nbsp;&nbsp;isSaved: true,  
&nbsp;&nbsp;&nbsp;&nbsp;listingPhotos: [ [Object], [Object], [Object], [Object], [Object] ],  
&nbsp;&nbsp;__v: 0  
     } ]

# POST Request
Purpose: To add a new photo to a listing in the current database

Endpoint: '/add-photos'


## Post Request( From Client )   
&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;"id" : 2,  
&nbsp;&nbsp;&nbsp;&nbsp;"photo": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://images.app.goo.gl/5fCMN61y6zZEH5NUA",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"desc": "hello my name is Zach pierce",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isVerified": true  
	}
}

## POST  Response( To Client )
    Status code: 200

# Update Request
Purpose: To update a specific photo inside of a listing in the current database.

Endpoint: '/updatePhoto'

## Update Request( From Client )
&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;"id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;"photo": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://images.app.goo.gl/5fCMN61y6zZEH5NUA",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"desc": "hello my name is Zach pierce",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isVerified": true  
	}
}

## Update Response( To Client )
    Status Code : 200

### Delete Request
Purpose: To delete a pre-existing photo from a listing

Endpoint: '/deletePhoto'

## Delete Request Object( From Client )  
&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;"id": 2  
&nbsp;&nbsp;&nbsp;&nbsp;"photo": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3  
}

## Delete Response ( To Client )
      Status Code : 200
### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
