CREATE TABLE `user`
(
 `id`      int NOT NULL auto_increment,
 `name`         varchar(45) NOT NULL ,
 `email`        varchar(45) NOT NULL ,
 `password`     varchar(45) NOT NULL ,
 `user_balance` double NOT NULL ,
 `created_at`   datetime NOT NULL ,

PRIMARY KEY (`id`),
unique key `email` (`email`)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;