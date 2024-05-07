CREATE TABLE `trade`
(
 `trade_id`        int NOT NULL auto_increment,
 `date`            datetime NOT NULL ,
 `supplier`        varchar(45) NOT NULL ,
 `status`          enum("purchased","sold") NOT NULL ,
 `quantity`        double NOT NULL ,
 `value`           double NOT NULL ,
 `coin_id`         int NOT NULL ,
 `delivery_fee`    double NOT NULL ,
 `deposited_to`    varchar(45) NOT NULL ,
 `transaction_fee` double NOT NULL ,
 `total_amount`    double NOT NULL ,
 `payment_method`  varchar(45) NOT NULL ,
 `user_id`         int NOT NULL ,
  `transaction_status`      enum("Success","Pending","Warning","Error") NOT NULL ,

PRIMARY KEY (`trade_id`),
KEY `FK_1` (`coin_id`),
CONSTRAINT `FK_8` FOREIGN KEY `FK_1` (`coin_id`) REFERENCES `crypto_coin` (`coin_id`),
KEY `FK_2` (`user_id`),
CONSTRAINT `FK_11` FOREIGN KEY `FK_2` (`user_id`) REFERENCES `user` (`user_id`)
)engine=InnoDB auto_increment=1 DEFAULT CHARSET=latin1;