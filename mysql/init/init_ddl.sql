create database if not exists sample_db;

use sample_db;

create user if not exists ojisan identified by 'password';

grant all on *.* to ojisan;
