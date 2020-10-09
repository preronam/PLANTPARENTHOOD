CREATE DATABASE Plants_db;
USE Plants_db;

CREATE TABLE users
(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(320) NOT NULL,
  password varchar(255) NOT NULL,
  favorites varchar (255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE plants
(
  id int NOT NULL,
  Common_Name varchar(255) NOT NULL,
  Scientific_Name varchar(255) NOT NULL,
  Sunlight_Needs varchar (255) NOT NULL,
  Water_Needs varchar (255) NOT NULL,
  Moisture_Levels varchar (255) NOT NULL,
  Toxic BOOLEAN default false, 
  Maintenance_Level varchar (255) NOT NULL,
  Affordability varchar (255) NOT NULL,
  Special varcar (255),
  img_path varchar (1024),
  PRIMARY KEY (id)
);

