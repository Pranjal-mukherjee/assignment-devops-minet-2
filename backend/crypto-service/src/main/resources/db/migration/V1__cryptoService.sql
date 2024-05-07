CREATE TABLE `crypto_coin`
(
 `id`            int NOT NULL auto_increment,
 `name`               varchar(45) NOT NULL ,
 `price`              int NOT NULL ,
 `market_cap`         int NOT NULL ,
 `change_data`        varchar(45) NOT NULL ,
 `src`                varchar(45) NOT NULL ,
 `symbol`             varchar(45) NOT NULL ,
 `description`        varchar(45) NOT NULL ,
 `circulating_supply` double NOT NULL ,
 `volume`             double NOT NULL ,

PRIMARY KEY (`id`)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;

CREATE TABLE `watchlist`
(
 `id` int NOT NULL auto_increment,
 `user_id`      int NOT NULL ,
 `coin_id`      int NOT NULL ,

PRIMARY KEY (`id`),
KEY `FK_1` (`user_id`),
CONSTRAINT `FK_5` FOREIGN KEY `FK_1` (`user_id`) REFERENCES `user` (`user_id`),
KEY `FK_2` (`coin_id`),
CONSTRAINT `FK_6` FOREIGN KEY `FK_2` (`coin_id`) REFERENCES `crypto_coin` (`coin_id`)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;
