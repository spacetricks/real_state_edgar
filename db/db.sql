CREATE DATABASE realstate;
USE realstate;

create table properties(
    id INT (11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    property VARCHAR(255) not null,
    location BOOLEAN not null,
    price int(11) not null
);

INSERT INTO properties VALUES("house", true, 30000);
INSERT INTO properties VALUES("apartment", true, 60000);
INSERT INTO properties VALUES("parking", true, 46000);

SELECT * FROM properties;

SHOW DATABASES;