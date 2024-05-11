-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 03, 2024 at 07:38 AM
-- Server version: 8.0.31
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_ca`
--

-- --------------------------------------------------------

--
-- Table structure for table `aeroport`
--

DROP TABLE IF EXISTS `aeroport`;
CREATE TABLE IF NOT EXISTS `aeroport` (
  `num` int NOT NULL AUTO_INCREMENT,
  `nom_aeroport` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `avion`
--

DROP TABLE IF EXISTS `avion`;
CREATE TABLE IF NOT EXISTS `avion` (
  `num` int NOT NULL AUTO_INCREMENT,
  `capacite` int DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `passagers`
--

DROP TABLE IF EXISTS `passagers`;
CREATE TABLE IF NOT EXISTS `passagers` (
  `cin` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `matricule` int NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nbr_place_res` int DEFAULT NULL,
  `prix_reservation` double DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `passager` varchar(255) DEFAULT NULL,
  `vol` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr5hqid4m6kldamsfs1kj7mk77` (`passager`),
  KEY `FKla7hmeycxpldfbyfq1w5os0w0` (`vol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `num` int NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) DEFAULT NULL,
  `pays` int DEFAULT NULL,
  PRIMARY KEY (`num`),
  KEY `FKak9ie48cys2iu74xk09k7mi23` (`pays`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vol`
--

DROP TABLE IF EXISTS `vol`;
CREATE TABLE IF NOT EXISTS `vol` (
  `num` int NOT NULL AUTO_INCREMENT,
  `aller_retour` tinyint(1) DEFAULT '0',
  `date_arrive` datetime(6) DEFAULT NULL,
  `date_depart` datetime(6) DEFAULT NULL,
  `escal_date` datetime(6) DEFAULT NULL,
  `id_aeroport_escal` int DEFAULT NULL,
  `prix` double DEFAULT NULL,
  `type_classe` varchar(255) DEFAULT NULL,
  `aero_arv` int DEFAULT NULL,
  `aero_dept` int DEFAULT NULL,
  `avion` int DEFAULT NULL,
  PRIMARY KEY (`num`),
  KEY `FKq2gw7p9d21hfc0i28tm4g3dti` (`aero_arv`),
  KEY `FKn4tpv9mqju5adncrx8f4ywxg6` (`aero_dept`),
  KEY `FKmfj2sdseymlfhkh9qt4mwvc6x` (`avion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FKla7hmeycxpldfbyfq1w5os0w0` FOREIGN KEY (`vol`) REFERENCES `vol` (`num`),
  ADD CONSTRAINT `FKr5hqid4m6kldamsfs1kj7mk77` FOREIGN KEY (`passager`) REFERENCES `passagers` (`cin`);

--
-- Constraints for table `ville`
--
ALTER TABLE `ville`
  ADD CONSTRAINT `FKak9ie48cys2iu74xk09k7mi23` FOREIGN KEY (`pays`) REFERENCES `pays` (`matricule`);

--
-- Constraints for table `vol`
--
ALTER TABLE `vol`
  ADD CONSTRAINT `FKmfj2sdseymlfhkh9qt4mwvc6x` FOREIGN KEY (`avion`) REFERENCES `avion` (`num`),
  ADD CONSTRAINT `FKn4tpv9mqju5adncrx8f4ywxg6` FOREIGN KEY (`aero_dept`) REFERENCES `aeroport` (`num`),
  ADD CONSTRAINT `FKq2gw7p9d21hfc0i28tm4g3dti` FOREIGN KEY (`aero_arv`) REFERENCES `aeroport` (`num`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
