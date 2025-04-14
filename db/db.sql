drop database if exit hackathon_db;

create database hackathon_db;
use hackathon_db;

create table user(
    id int auto_increment,
    full_name varchar(50),
    email varchar(50),
    password varchar(50),
    phone_no varchar(50),
    created_time date(Date)
)








