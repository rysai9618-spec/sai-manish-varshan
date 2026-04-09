
CREATE DATABASE schoolDB;


USE schoolDB;


CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);


INSERT INTO students (id,name,age,grade) VALUES
(1,'Arun',15,'10th'),
(2,'Priya',14,'9th'),
(3,'Rahul',16,'11th'),
(4,'Sneha',15,'10th'),
(5,'Kiran',14,'9th');


SELECT * FROM students;


DROP DATABASE schoolDB;
