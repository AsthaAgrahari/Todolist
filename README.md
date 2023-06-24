use testschemas;

CREATE TABLE Todo_LIST ( id int(11) AUTO_INCREMENT, subject varchar(45) , chapter_no int(11), ranking int(11), PRIMARY KEY(id) ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

use testschemas;

SELECT * FROM todo_list ORDER BY ranking ASC;
