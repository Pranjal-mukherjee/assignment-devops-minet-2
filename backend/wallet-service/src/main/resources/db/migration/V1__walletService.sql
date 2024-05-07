CREATE TABLE `wallet`
(
 `id`  int NOT NULL auto_increment,
 `balance`   double NOT NULL ,
 `user_id`   int NOT NULL ,
 `coin_id`   int NOT NULL ,

PRIMARY KEY (`id`),
KEY `FK_2` (`user_id`),
CONSTRAINT `FK_9` FOREIGN KEY `FK_2` (`user_id`) REFERENCES `user` (`user_id`),
KEY `FK_3` (`coin_id`),
CONSTRAINT `FK_17` FOREIGN KEY `FK_3` (`coin_id`) REFERENCES `crypto_coin` (`coin_id`)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;