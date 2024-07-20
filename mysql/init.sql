CREATE DATABASE IF NOT EXISTS `tsdb`;
USE `tsdb`;
CREATE TABLE IF NOT EXISTS `tsdb`.`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `state` boolean default false NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
)