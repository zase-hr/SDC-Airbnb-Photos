CREATE TABLE User (
  ID INT PRIMARY KEY NOT NULL,
  username VARCHAR( 50 ),
)

CREATE TABLE location (
  ID INT PRIMARY KEY NOT NULL,
  location_id INT NOT NULL,
  location_name VARCHAR( 50 ),
)

CREATE TABLE listings (
  ID INT PRIMARY KEY NOT NULL,
  Listing INT NOT NULL,
  Description VARCHAR( 500 ),
  IsSaved BOOLEAN NOT NULL,
  Host INT NOT NULL,
  host_name VARCHAR(50),
  location INT NOT NULL,
  FOREIGN KEY ( Host ) REFERENCES User ( ID ),
  FOREIGN KEY ( location ) REFERENCES host ( ID ),
  FOREIGN KEY ( host_name ) REFERENCES User ( username )
)

CREATE TABLE photos (
  ID INT PRIMARY KEY,
  Listing_ID INT NOT NULL,
  url VARCHAR( 200 ) NOT NULL,
  Description VARCHAR( 500 ),
  isVerified BOOLEAN NOT NULL,
  FOREIGN KEY ( Listing_ID ) REFERENCES listings ( ID )
)