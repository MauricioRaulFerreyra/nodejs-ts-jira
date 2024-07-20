CREATE DATABASE IF NOT EXISTS `fernandoherrera`;
USE `fernandoherrera`;
CREATE TABLE IF NOT EXISTS `fernandoherrera`.`users` (
  `id` integer NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `state` boolean default false NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
)