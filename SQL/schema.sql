CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
username VARCHAR(30),
msg VARCHAR(150),
createdAt DATETIME
);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
