-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2024 at 11:21 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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

CREATE TABLE `aeroport` (
  `num` int(11) NOT NULL,
  `nom_aeroport` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aeroport`
--

INSERT INTO `aeroport` (`num`, `nom_aeroport`, `pays`, `ville`) VALUES
(1, 'Heathrow Airport', 'United Kingdom', 'London'),
(2, 'Charles de Gaulle Airport', 'France', 'Paris'),
(3, 'Los Angeles International Airport', 'United States', 'Los Angeles'),
(5, 'Dubai International Airport', 'United Arab Emirates', 'Dubai'),
(6, 'Singapore Changi Airport', 'Singapore', 'Singapore'),
(7, 'Tokyo Haneda Airport', 'Japan', 'Tokyo'),
(8, 'Sydney Kingsford Smith Airport', 'Australia', 'Sydney'),
(9, 'Hamad International Airport', 'Qatar', 'Doha'),
(10, 'Denver International Airport', 'United States', 'Denver');

-- --------------------------------------------------------

--
-- Table structure for table `avion`
--

CREATE TABLE `avion` (
  `num` int(11) NOT NULL,
  `capacite` int(11) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `avion`
--

INSERT INTO `avion` (`num`, `capacite`, `nom`) VALUES
(4, 500, 'Boeing 777'),
(13, 150, 'Airbus A320'),
(14, 200, 'Boeing 737'),
(15, 300, 'Airbus A330'),
(16, 250, 'Boeing 777'),
(17, 350, 'Airbus A350'),
(18, 180, 'Boeing 757'),
(19, 280, 'Airbus A380'),
(20, 220, 'Boeing 747'),
(21, 320, 'Airbus A340'),
(22, 210, 'Boeing 767');

-- --------------------------------------------------------

--
-- Table structure for table `passagers`
--

CREATE TABLE `passagers` (
  `cin` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passagers`
--

INSERT INTO `passagers` (`cin`, `adresse`, `email`, `nom`, `prenom`, `telephone`) VALUES
('AB123', '123 Street Name, City', 'john@example.com', 'Dexter', 'John', '123456789'),
('CD456', '456 Avenue Name, Town', 'jane@example.com', 'Smith', 'Jane', '987654321'),
('EF789', '789 Road Name, Village', 'bob@example.com', 'Johnson', 'Bob', '456123789'),
('GH012', '012 Lane Name, City', 'alice@example.com', 'Brown', 'Alice', '789456123'),
('IJ345', '345 Boulevard Name, Town', 'david@example.com', 'Taylor', 'David', '321654987'),
('KL678', '678 Square Name, Village', 'susan@example.com', 'Anderson', 'Susan', '654987321'),
('MN901', '901 Circle Name, City', 'michael@example.com', 'Wilson', 'Michael', '987321654'),
('OP234', '234 Avenue Road, Town', 'emily@example.com', 'Martinez', 'Emily', '147258369'),
('QR567', '567 Drive Name, Village', 'chris@example.com', 'Roberts', 'Chris', '369147258');

-- --------------------------------------------------------

--
-- Table structure for table `pays`
--

CREATE TABLE `pays` (
  `matricule` int(11) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pays`
--

INSERT INTO `pays` (`matricule`, `libelle`) VALUES
(1, 'United States'),
(2, 'Canada'),
(3, 'United Kingdom'),
(4, 'France'),
(5, 'Germany'),
(6, 'Australia'),
(7, 'Japan'),
(8, 'China'),
(9, 'Brazil'),
(10, 'India');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `nbr_place_res` int(11) DEFAULT NULL,
  `prix_reservation` double DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `passager` varchar(255) DEFAULT NULL,
  `vol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `nbr_place_res`, `prix_reservation`, `statut`, `passager`, `vol`) VALUES
(1, 1, 400, 'confirmer', 'CD456', 1),
(2, 2, 500, 'confirmer', 'AB123', 1),
(3, 1, 450, 'confirmer', 'AB123', 1),
(4, 3, 600, 'confirmer', 'AB123', 1),
(5, 2, 550, 'confirmer', 'EF789', 1),
(6, 1, 400, 'confirmer', 'GH012', 1),
(7, 2, 500, 'confirmer', 'GH012', 1),
(8, 1, 450, 'confirmer', 'GH012', 1),
(9, 3, 600, 'confirmer', 'GH012', 1),
(10, 2, 550, 'confirmer', 'GH012', 1),
(11, 2, 6000, 'Annuler', 'OP234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ville`
--

CREATE TABLE `ville` (
  `num` int(11) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `pays` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ville`
--

INSERT INTO `ville` (`num`, `libelle`, `pays`) VALUES
(1, 'New York', 1),
(2, 'Toronto', 2),
(3, 'London', 3),
(4, 'Paris', 4),
(5, 'Berlin', 5),
(6, 'Sydney', 6),
(7, 'Tokyo', 7),
(8, 'Beijing', 8),
(9, 'São Paulo', 9),
(10, 'Mumbai', 10);

-- --------------------------------------------------------

--
-- Table structure for table `vol`
--

CREATE TABLE `vol` (
  `num` int(11) NOT NULL,
  `aller_retour` tinyint(1) DEFAULT 0,
  `date_arrive` datetime(6) DEFAULT NULL,
  `date_depart` datetime(6) DEFAULT NULL,
  `escal_date` datetime(6) DEFAULT NULL,
  `id_aeroport_escal` int(11) DEFAULT NULL,
  `prix` double DEFAULT NULL,
  `type_classe` varchar(255) DEFAULT NULL,
  `aero_arv` int(11) DEFAULT NULL,
  `aero_dept` int(11) DEFAULT NULL,
  `avion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vol`
--

INSERT INTO `vol` (`num`, `aller_retour`, `date_arrive`, `date_depart`, `escal_date`, `id_aeroport_escal`, `prix`, `type_classe`, `aero_arv`, `aero_dept`, `avion`) VALUES
(1, 1, '2024-05-29 12:00:00.000000', '2024-05-29 14:31:00.000000', '2024-05-29 14:31:00.000000', 1, 450, '1er', 10, 6, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aeroport`
--
ALTER TABLE `aeroport`
  ADD PRIMARY KEY (`num`);

--
-- Indexes for table `avion`
--
ALTER TABLE `avion`
  ADD PRIMARY KEY (`num`);

--
-- Indexes for table `passagers`
--
ALTER TABLE `passagers`
  ADD PRIMARY KEY (`cin`);

--
-- Indexes for table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`matricule`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKr5hqid4m6kldamsfs1kj7mk77` (`passager`),
  ADD KEY `FKla7hmeycxpldfbyfq1w5os0w0` (`vol`);

--
-- Indexes for table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`num`),
  ADD KEY `FKak9ie48cys2iu74xk09k7mi23` (`pays`);

--
-- Indexes for table `vol`
--
ALTER TABLE `vol`
  ADD PRIMARY KEY (`num`),
  ADD KEY `FKq2gw7p9d21hfc0i28tm4g3dti` (`aero_arv`),
  ADD KEY `FKn4tpv9mqju5adncrx8f4ywxg6` (`aero_dept`),
  ADD KEY `FKmfj2sdseymlfhkh9qt4mwvc6x` (`avion`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aeroport`
--
ALTER TABLE `aeroport`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `avion`
--
ALTER TABLE `avion`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `pays`
--
ALTER TABLE `pays`
  MODIFY `matricule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `ville`
--
ALTER TABLE `ville`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vol`
--
ALTER TABLE `vol`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
