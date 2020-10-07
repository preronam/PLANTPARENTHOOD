CREATE DATABASE Plants_db;
USE Plants_db;

CREATE TABLE users
(
  memberid int NOT NULL,
  username varchar(255) NOT NULL,
  email varchar(320) NOT NULL,
  password varchar(255) NOT NULL,
  favorites varchar (255) NOT NULL,
  PRIMARY KEY (memberid)
);

CREATE TABLE plants
(
  id int NOT NULL,
  Common_Name varchar(255) NOT NULL,
  Scientific_Name varchar(255) NOT NULL,
  Sunlight_Needs varchar (255) NOT NULL,
  Water_Needs varchar (255) NOT NULL,
  Moisture_Levels varchar (255) NOT NULL,
  Poisonous BOOLEAN default false, 
  Maintenance_Level varchar (255) NOT NULL,
  Affordability varchar (255) NOT NULL,
  img_path varchar (1024),
  PRIMARY KEY (id)
);

