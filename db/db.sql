drop database if exists hackathon_db;

create database hackathon_db;
use hackathon_db;

-- user table
create table user(
    -- id int AUTO_INCREMENT,
    id int ,
    full_name varchar(50),
    email varchar(50),
    password varchar(50),
    phone_no varchar(50),
    created_time date default(CURDATE())
);

-- blogs table
create table blog(
    -- id int AUTO_INCREMENT,
    id int,
    title varchar(50),
    content varchar(50),
    created_time date default(CURDATE()),
    user_id int,
    category_id int
);

-- categories table
create table category(
    -- id int AUTO_INCREMENT,
    id int,
    title varchar(30),
    description varchar(50)
);









