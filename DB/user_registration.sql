-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 16, 2024 at 05:33 PM
-- Server version: 10.4.32-MariaDB-1:10.4.32+maria~ubu2004
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imageFile` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `imageFile`) VALUES
(8, 'madhankumarpdckap@gmail.com', '$2y$10$/9ki6bhuyl6nHkKn0pAZ9eE0rBdB0IpTxKg19ioAtADzdSleDTkWW', '../uploads/osman-rana-h8ZvH1Nf7Bk-unsplash.jpg'),
(9, 'paco@gamil.com', '$2y$10$Hg6U7Jf/oGcN0bZil9w0ROo4E5WR4pjCVD05af72cmq6Mqw1ZgoR.', '../uploads/dmitry-ratushny-MdkTDbZhgn4-unsplash.jpg'),
(10, 'vicky@gmail.com', '$2y$10$E5qmjAMBDm8G23H4J40Aq.zuu7kxZGL0WCpkTZLdQqFj11ZmvBa8W', '../uploads/sunset-horizon-standing-alone-mountains-scenery-ai-art-hd-wallpaper-uhdpaper.com-715@1@l.jpg'),
(11, 'poomikakdckap@gmail.com', '$2y$10$6wgjtwHH4Ncee0U2vRbnfuSS.NHG0xU4hOb93anLFKnvxTXEQjmym', '../uploads/road-2508733_1280.jpg'),
(13, 'gunsri@gmail.com', '$2y$10$L1ouVKXQ2FlqQyn7XouJ2unSndtm8vltNSYUji7b6kC/BDBT.N7uy', '../uploads/osman-rana-h8ZvH1Nf7Bk-unsplash.jpg'),
(14, 'godofwar@gmail.com', '$2y$10$WkxPYUOzpg8WoUmWoBLhu.UzX5a04pW0JsYJR092Fx2NNiPv1yTZi', '../uploads/bg.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
