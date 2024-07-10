CREATE DATABASE realstate;
USE realstate;

create table properties(
    id INT (11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    availeble BOOLEAN NOT NULL DEFAULT TRUE,
    property VARCHAR(255) not null,
    location BOOLEAN not null,
    price int(11) not null
);

INSERT INTO properties VALUES(NULL,true,"house", true, 30000);
INSERT INTO properties VALUES(NULL,true,"apartment", true, 60000);
INSERT INTO properties VALUES(NULL,true,"parking", true, 46000);

SELECT * FROM properties;

SHOW DATABASES;
DROP TABLE properties;