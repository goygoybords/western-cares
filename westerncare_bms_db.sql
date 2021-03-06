-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2020 at 08:55 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 7.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `westerncare_bms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `attachment_id` int(11) NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `image_path` varchar(250) NOT NULL,
  `filename` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attachments`
--

INSERT INTO `attachments` (`attachment_id`, `quotation_id`, `image_path`, `filename`) VALUES
(1, 1, 'resources/uploads/ALLAN VISA.pdf', 'ALLANVISA.pdf'),
(2, 1, 'resources/uploads/visa.pdf', 'visa.pdf'),
(3, 2, 'resources/uploads/lot plan tacloban.jpg', 'lot plan tacloban.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `signature_image` text NOT NULL,
  `lash_length` varchar(20) NOT NULL,
  `lash_thickness` varchar(20) NOT NULL,
  `lash_color` varchar(20) NOT NULL,
  `tint_applied` char(1) NOT NULL,
  `tint_date_applied` date NOT NULL,
  `ailment_more_details` text NOT NULL,
  `removed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `address`, `birthdate`, `email`, `password`, `signature_image`, `lash_length`, `lash_thickness`, `lash_color`, `tint_applied`, `tint_date_applied`, `ailment_more_details`, `removed`) VALUES
(18, 'kevindfgd', 'khodfgdfg', 'cebudfgfd', '2019-07-26', 'john.flashpark@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'data:image/jsignature;base30,7O7i35Zeo1V8ca7ijY2e1L1L1Vs1Ac_1QZ2jae1Yc1Nac310034c53120', 'medium', 'average', 'red', 'Y', '2019-07-16', 'okookj', 0),
(21, 'kboe', 'james', 'cebu', '2019-07-18', 'kobejames@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '', 'medium', 'thick', 'black', 'Y', '2019-07-17', 'asdasdasdsa', 0),
(22, 'asdasd', 'asdasd', 'asdasd', '2019-07-17', 'life@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', 'data:image/jsignature;base30,5F591J2G3Tkl7Z23ea1R1z3OdY5m1Ps1upf_1P14dcZ57ipb7Yae3z1PgZe5400003', 'long', 'thick', 'red', 'N', '2019-07-18', 'sdfsdfds', 0),
(23, 'greek', 'freak', 'asdasd', '2019-07-26', 'greak@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', 'data:image/jsignature;base30,1Ebd5z1C80Z1uc1E3AYdT_1zif1DZe7opYa1I3NZ1w', 'medium', 'average', 'red', 'N', '2019-07-16', 'nononono', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customer_ailment`
--

CREATE TABLE `customer_ailment` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `ailment` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_ailment`
--

INSERT INTO `customer_ailment` (`id`, `customer_id`, `ailment`, `status`) VALUES
(21, 18, 'allery_to_latex', 1),
(22, 18, 'conjunctivitis', 1),
(23, 18, 'dry_eye_syndrome', 1),
(24, 18, 'trichotillomanie', 1),
(25, 18, 'glaucoma', 1),
(26, 18, 'sensitive_eyes', 1),
(27, 18, 'Alopecia', 1);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `user_id`, `date`, `message`) VALUES
(1, 2, '2019-03-05 08:34:02', 'charles yu has successfully logged in.'),
(2, 2, '2019-03-05 08:34:13', 'charles yu has added a new Service [Matt Testing].'),
(3, 2, '2019-03-05 08:34:17', 'charles yu has updated a Service [Matt Testing].'),
(4, 2, '2019-03-05 08:34:22', 'charles yu has updated a Service [Matt Testing].'),
(5, 2, '2019-06-26 09:53:00', 'charles yu has successfully logged in.'),
(6, 2, '2019-06-27 09:44:02', 'charles yu has successfully logged in.'),
(7, 2, '2019-06-27 09:59:54', 'charles yu has successfully logged out.'),
(8, 2, '2019-06-27 10:07:13', 'charles yu has successfully logged in.'),
(9, 2, '2019-06-27 10:08:08', 'charles yu has successfully logged out.'),
(10, 2, '2019-06-27 10:09:37', 'charles yu has successfully logged in.'),
(11, 2, '2019-06-29 11:11:53', 'charles yu has successfully logged in.'),
(12, 2, '2019-06-29 11:55:23', 'charles yu has successfully logged in.'),
(13, 2, '2019-06-29 12:38:32', 'charles yu has successfully logged in.'),
(14, 2, '2019-06-30 00:19:04', 'charles yu has successfully logged in.'),
(15, 2, '2019-06-30 00:35:28', 'charles yu has updated a user [test].'),
(16, 2, '2019-06-30 00:35:34', 'charles yu has updated a customer [Kevin  asdasd].'),
(17, 2, '2019-06-30 00:36:15', 'charles yu has updated a customer [Kevin  asdasd].'),
(18, 2, '2019-06-30 00:37:29', 'charles yu has updated a customer [Kevin].'),
(19, 2, '2019-06-30 00:37:35', 'charles yu has updated a customer [Kevin].'),
(20, 2, '2019-06-30 00:37:39', 'charles yu has updated a customer [Kevin].'),
(21, 2, '2019-06-30 00:37:43', 'charles yu has updated a customer [Kevin].'),
(22, 2, '2019-06-30 00:44:18', 'charles yu has updated a customer [Kevin].'),
(23, 2, '2019-06-30 00:44:42', 'charles yu has updated a customer [Kevin].'),
(24, 2, '2019-06-30 00:44:43', 'charles yu has updated a customer [Kevin].'),
(25, 2, '2019-06-30 00:45:32', 'charles yu has updated a customer [Kevin].'),
(26, 2, '2019-06-30 00:45:41', 'charles yu has updated a customer [Kevin].'),
(27, 2, '2019-06-30 03:33:22', 'charles yu has successfully logged in.'),
(28, 2, '2019-06-30 03:39:35', 'charles yu has added a new user [sean].'),
(29, 2, '2019-06-30 03:40:19', 'charles yu has added a new user [sad].'),
(30, 2, '2019-06-30 03:42:48', 'charles yu has added a new user [asd].'),
(31, 2, '2019-06-30 03:43:41', 'charles yu has added a new user [james].'),
(32, 2, '2019-06-30 03:44:07', 'charles yu has added a new user [kobe].'),
(33, 2, '2019-06-30 03:45:43', 'charles yu has added a new user [bron].'),
(34, 2, '2019-07-06 11:55:05', 'charles yu has successfully logged in.'),
(35, 2, '2019-07-06 12:12:18', 'charles yu has added a new Service [test].'),
(36, 2, '2019-07-06 12:15:34', 'charles yu has updated a Service [sdkljaslkdj].'),
(37, 2, '2019-07-06 12:23:49', 'charles yu has successfully logged out.'),
(38, 2, '2019-07-14 00:20:04', 'charles yu has successfully logged in.'),
(39, 2, '2019-07-14 00:20:42', 'charles yu has updated a customer [seand].'),
(40, 2, '2019-07-14 01:39:50', 'charles yu has added a new user [kboe].'),
(41, 2, '2019-07-14 01:42:43', 'charles yu has added a new user [asdasd].'),
(42, 2, '2019-07-14 04:02:59', 'charles yu has added a new user [greek].'),
(43, 2, '2019-07-14 04:42:51', 'charles yu has updated a customer [kevindfgd].'),
(44, 2, '2019-07-14 05:25:52', 'charles yu has successfully logged out.'),
(45, 2, '2019-07-14 12:20:45', 'charles yu has successfully logged in.'),
(46, 1, '2020-04-16 07:08:23', 'test asd user asd has successfully logged in.'),
(47, 2, '2020-04-16 07:23:58', 'admin admin has successfully logged in.'),
(48, 2, '2020-04-16 07:24:15', 'admin admin has successfully logged out.'),
(49, 2, '2020-04-16 08:07:21', 'admin admin has successfully logged in.'),
(50, 2, '2020-04-16 08:07:37', 'admin admin has successfully logged out.'),
(51, 2, '2020-04-16 08:07:43', 'admin admin has successfully logged in.'),
(52, 2, '2020-04-16 08:07:45', 'admin admin has successfully logged out.'),
(53, 2, '2020-04-16 08:08:05', 'admin admin has successfully logged out.'),
(54, 2, '2020-04-16 08:09:19', 'admin admin has successfully logged out.'),
(55, 2, '2020-04-16 08:09:51', 'admin admin has successfully logged out.'),
(56, 2, '2020-04-16 08:10:14', 'admin admin has successfully logged in.'),
(57, 2, '2020-04-16 08:10:37', 'admin admin has successfully logged out.'),
(58, 2, '2020-04-16 08:15:51', 'admin admin has successfully logged in.'),
(59, 2, '2020-04-16 08:42:14', 'admin admin has successfully logged out.'),
(60, 2, '2020-04-17 00:35:07', 'admin admin has successfully logged in.'),
(61, 2, '2020-04-17 00:39:22', 'admin admin has successfully logged out.'),
(62, 1, '2020-04-17 00:39:31', 'Kevin Kho has successfully logged in.'),
(63, 1, '2020-04-17 00:39:34', 'Kevin Kho has successfully logged out.'),
(64, 3, '2020-04-17 00:39:59', 'supplier sup has successfully logged in.'),
(65, 3, '2020-04-17 00:40:01', 'supplier sup has successfully logged out.'),
(66, 2, '2020-04-17 00:40:36', 'admin admin has successfully logged in.'),
(67, 2, '2020-04-17 00:46:05', 'admin admin has successfully logged out.'),
(68, 2, '2020-04-17 01:06:27', 'admin admin has successfully logged in.'),
(69, 2, '2020-04-18 05:32:58', 'admin admin has successfully logged in.'),
(70, 2, '2020-04-18 05:38:00', 'admin admin has added a new user [cmsadmin].'),
(71, 2, '2020-04-18 05:45:42', 'admin admin has added a new user [asdasdasd].'),
(72, 2, '2020-04-18 05:56:16', 'admin admin has updated a user [asdasdasd].'),
(73, 2, '2020-04-18 06:09:30', 'admin admin has successfully logged in.'),
(74, 2, '2020-04-18 07:16:52', 'admin admin has successfully logged out.'),
(75, 1, '2020-04-18 07:35:01', 'kevin sean kobe has successfully logged out.'),
(76, 2, '2020-04-18 07:41:33', 'admin admin has successfully logged in.'),
(77, 2, '2020-04-21 03:23:36', 'admin admin has successfully logged in.'),
(78, 2, '2020-04-21 08:40:15', 'admin admin has successfully logged out.'),
(79, 2, '2020-04-21 08:40:48', 'admin admin has successfully logged in.'),
(80, 2, '2020-04-21 08:41:15', 'admin admin has successfully logged out.'),
(81, 3, '2020-04-21 08:42:18', 'supplier sup has successfully logged in.'),
(82, 3, '2020-04-21 08:51:06', 'supplier sup has successfully logged out.'),
(83, 2, '2020-04-21 08:51:08', 'admin admin has successfully logged in.'),
(84, 2, '2020-04-21 08:51:42', 'admin admin has successfully logged out.'),
(85, 3, '2020-04-21 08:51:48', 'supplier sup has successfully logged in.'),
(86, 3, '2020-04-21 09:09:16', 'supplier sup has successfully logged out.'),
(87, 2, '2020-04-21 09:09:19', 'admin admin has successfully logged in.'),
(88, 2, '2020-04-21 09:10:46', 'admin admin has successfully logged out.'),
(89, 3, '2020-04-21 09:10:49', 'supplier sup has successfully logged in.'),
(90, 3, '2020-04-21 09:17:18', 'supplier sup has successfully logged out.'),
(91, 3, '2020-04-22 00:48:09', 'supplier sup has successfully logged in.'),
(92, 3, '2020-04-22 07:10:03', 'supplier sup has successfully logged out.'),
(93, 3, '2020-04-22 07:45:16', 'supplier sup has successfully logged in.'),
(94, 2, '2020-04-23 04:40:26', 'admin admin has successfully logged in.'),
(95, 2, '2020-04-23 04:40:30', 'admin admin has successfully logged out.'),
(96, 3, '2020-04-23 04:40:34', 'supplier sup has successfully logged in.'),
(97, 3, '2020-04-23 07:16:40', 'supplier sup has successfully logged out.'),
(98, 2, '2020-04-23 07:16:45', 'admin admin has successfully logged in.'),
(99, 2, '2020-04-23 07:27:55', 'admin admin has added a new user [etasd].'),
(100, 2, '2020-04-23 07:30:26', 'admin admin has added a new user [kobe12345].'),
(101, 2, '2020-04-23 07:36:32', 'admin admin has updated a user [supplier].'),
(102, 2, '2020-04-23 07:37:33', 'admin admin has updated a user [supplier].'),
(103, 2, '2020-04-23 07:40:03', 'admin admin has successfully logged out.'),
(104, 3, '2020-04-23 07:40:08', 'supplier sup has successfully logged in.'),
(105, 3, '2020-04-23 08:32:01', 'supplier sup has successfully logged out.'),
(106, 2, '2020-04-23 08:32:04', 'admin admin has successfully logged in.'),
(107, 2, '2020-04-23 08:39:26', 'admin admin has successfully logged out.'),
(108, 3, '2020-04-23 08:39:30', 'supplier sup has successfully logged in.'),
(109, 3, '2020-04-23 08:40:31', 'supplier sup has successfully logged out.'),
(110, 2, '2020-04-23 08:40:34', 'admin admin has successfully logged in.'),
(111, 2, '2020-04-23 08:50:57', 'admin admin has successfully logged out.'),
(112, 3, '2020-04-23 08:51:01', 'supplier sup has successfully logged in.'),
(113, 3, '2020-04-23 08:51:26', 'supplier sup has successfully logged out.'),
(114, 2, '2020-04-23 08:51:30', 'admin admin has successfully logged in.'),
(115, 2, '2020-04-23 08:54:43', 'admin admin has successfully logged out.'),
(116, 3, '2020-04-23 08:54:47', 'supplier sup has successfully logged in.'),
(117, 3, '2020-04-23 08:54:50', 'supplier sup has successfully logged out.'),
(118, 2, '2020-04-24 06:31:23', 'admin admin has successfully logged in.'),
(119, 2, '2020-04-25 02:01:54', 'admin admin has successfully logged in.'),
(120, 2, '2020-04-25 02:07:32', 'admin admin has successfully logged out.'),
(121, 2, '2020-04-26 04:33:28', 'admin admin has successfully logged in.');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `page` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `page`, `date`) VALUES
(1, 'Home', 'home', '2016-06-28 16:00:00'),
(2, 'Products', 'products', '2016-06-28 16:00:00'),
(3, 'About', 'about', '2016-06-28 16:00:00'),
(4, 'Contact', 'contact', '2016-06-28 16:00:00'),
(5, 'Store', 'store-information', '2020-04-15 03:10:30'),
(6, 'Checkout', 'checkout', '2020-04-15 03:39:51'),
(7, 'Detail', 'user-detail', '2020-04-16 05:14:04'),
(8, 'Account', 'account-details', '2020-04-17 01:43:38'),
(9, 'Thank You', 'thank-you', '2020-04-30 02:06:48');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `item_code` varchar(30) NOT NULL,
  `description` varchar(250) NOT NULL,
  `dimension` varchar(250) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `unit_id` int(11) NOT NULL,
  `cost` decimal(8,2) NOT NULL,
  `selling_price` decimal(8,2) NOT NULL,
  `current_quantity` int(11) NOT NULL,
  `image_path` varchar(250) NOT NULL,
  `removed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `item_code`, `description`, `dimension`, `brand`, `category_id`, `unit_id`, `cost`, `selling_price`, `current_quantity`, `image_path`, `removed`) VALUES
(1, 'FFFP2 CE', 'Anti Pollution Face Mask', '190x100x100mm   50 pcs/box  ', 'OEM', 3, 6, '123.00', '900.00', 0, 'resources/img/fffp2.jpg', 0),
(2, 'FFFP3 with Respirator', 'Anti Pollution Face Mask', '190x100x100mm   50 pcs/box  ', 'OEM', 3, 6, '850.00', '950.00', 0, 'resources/img/ffp3.png', 0),
(5, 'FFFP2 without Respirator', 'Anti Pollution Face Mask', '190x100x100mm   50 pcs/box  ', 'OEM', 3, 6, '850.00', '1000.00', 0, 'resources/img/ffp2-without.png', 0),
(9, 'YH-830 Non dependent', 'YH-830 Bi-Level PAP with non dependent humidifier\r\n', '48.5x32.5x21.5', 'OEM', 7, 6, '1500.00', '3500.00', 0, 'resources/img/yh-830.png', 0),
(10, 'YH-830 Bi-Level PAP Ventilator', 'YH-830 Bi-Level PAP Ventilator', '48.5x32.5x21.5', 'OEM', 7, 6, '1500.00', '3500.00', 0, 'resources/img/yh-830 pap ventilator.png', 0),
(11, 'Disposable Shoe Cover', 'Disposable Shoe Cover', '', 'OEM', 4, 26, '650.00', '1000.00', 0, 'resources/img/dispoasble shoe cover 1.png', 0),
(12, 'Disposable Shoe Cover (Boots)', 'Disposable Shoe Cover', '', 'OEM', 4, 26, '650.00', '1000.00', 0, 'resources/img/dispoasble shoe cover 2.png', 0),
(13, 'Thermal Scanner 1', 'Thermal Scanner ', '165x110x45mm', 'Lead', 2, 26, '650.00', '1000.00', 0, 'resources/img/thermal scanner 1.png', 0),
(14, 'Thermal Scanner 2', 'Thermal Scanner ', '165x110x45mm', 'Lead', 2, 26, '650.00', '1000.00', 0, 'resources/img/thermal scanner 2.png', 0),
(15, 'Medical Nitrile Globes ', 'Medical Nitrile Globes ', '23x12.5x5.5', 'Medicom', 5, 26, '650.00', '950.00', 0, 'resources/img/nitrile-gloves.png', 0),
(16, 'Examination Vinyl Gloves', 'Examination Vinyl Gloves', '20x12.5x7', 'Luvas De Vinil', 5, 26, '650.00', '950.00', 0, 'resources/img/vinyl-gloves.png', 0),
(17, 'Sterile Latex Gloves', 'Sterile Latex Gloves', '25.6x13x22.5', 'Medicom', 5, 26, '650.00', '950.00', 0, 'resources/img/sterile-latex.png', 0),
(18, 'Isolation Gown', 'Isolation Gown', '60x40x45', 'OEM', 1, 26, '850.00', '1500.00', 0, 'resources/img/isolation gown.png', 0),
(19, 'Disposable Head Cover', 'Disposable Head Cover', '60x40x45', 'OEM', 1, 26, '850.00', '1500.00', 0, 'resources/img/disposable head cover.png', 0),
(20, 'Disposable PPE Type 1', 'Disposable PPE Type 1', '50x32x2cm', 'OEM', 6, 26, '30.00', '100.00', 0, 'resources/img/disposable-ppe-1.png', 0),
(21, 'Disposable PPE Type 2', 'Disposable PPE Type 2', '50x32x2cm', 'OEM', 6, 26, '1500.00', '2500.00', 0, 'resources/img/disposable-ppe-2.png', 0),
(22, 'Disposable PPE Type 3', 'Disposable PPE Type 3', '50x32x2cm', 'OEM', 6, 26, '1500.00', '2500.00', 0, 'resources/img/disposable-ppe-3.png', 0),
(23, 'Medical Goggles', 'Medical Goggles', '16x9x8cm', 'OEM', 6, 26, '20.00', '350.00', 0, 'resources/img/medical-goggles.png', 0),
(24, 'Face Shield', 'Double Anti Fog \r\nThickness: 0.18mm', '32x19cm\r\n32x22cm\r\n34x26cm', 'OEM', 6, 26, '50.00', '75.00', 0, 'resources/img/face-shield.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `category_id` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`category_id`, `description`) VALUES
(1, 'Surgical Gear'),
(2, 'Scanner'),
(3, 'Respiratory Mask'),
(4, 'Protective Shoes'),
(5, 'Protective Gloves'),
(6, 'PPEs'),
(7, 'Machines');

-- --------------------------------------------------------

--
-- Table structure for table `product_uom`
--

CREATE TABLE `product_uom` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_uom`
--

INSERT INTO `product_uom` (`id`, `description`, `status`) VALUES
(1, 'Bag(s)', 1),
(2, 'Bar(s)', 1),
(3, 'Batch(s)', 1),
(4, 'Bdft', 1),
(5, 'Bot(s)', 1),
(6, 'Box(s)', 1),
(7, 'Bundle(s)', 1),
(8, 'Can(s)', 1),
(9, 'Carton(s)', 1),
(10, 'Case(s)', 1),
(11, 'Container(s)', 1),
(12, 'Cubic', 1),
(13, 'Cup(s)', 1),
(14, 'Dozen', 1),
(15, 'Drum(s)\r\n', 1),
(16, 'Ft', 1),
(17, 'Gallon(s)', 1),
(18, 'Gram(s)', 1),
(19, 'Gross', 1),
(20, 'Hundred(s)', 1),
(21, 'Inch(s)', 1),
(22, 'Kg(s)', 1),
(23, 'Kit(s)', 1),
(24, 'Liter(s)', 1),
(25, 'Mtr(s)', 1),
(26, 'Pc(s)', 1),
(27, 'Roll(s)', 1),
(28, 'Pail(s)', 1),
(29, 'Ton(s)', 1),
(30, 'Set', 1);

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE `quotations` (
  `quotation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quotations`
--

INSERT INTO `quotations` (`quotation_id`, `user_id`, `status`) VALUES
(1, 3, 'APPROVED'),
(2, 3, 'REMOVED');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_detail`
--

CREATE TABLE `quotation_detail` (
  `quotation_detail_id` int(11) NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quoted_cost` double(8,2) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quotation_detail`
--

INSERT INTO `quotation_detail` (`quotation_detail_id`, `quotation_id`, `product_id`, `quoted_cost`, `status`) VALUES
(1, 1, 1, 123.00, 1),
(2, 2, 1, 23.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

CREATE TABLE `routes` (
  `id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `controller` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `routes`
--

INSERT INTO `routes` (`id`, `page_id`, `slug`, `controller`) VALUES
(1, 1, 'home', 'page/home'),
(2, 3, 'about', 'page/about'),
(3, 2, 'products', 'page/products'),
(4, 4, 'contact', 'page/contact'),
(5, 1, 'index', 'page/home'),
(6, 5, 'store-information', 'page/store-information'),
(7, 6, 'checkout', 'page/checkout'),
(9, 7, 'user-detail', 'page/user-detail'),
(10, 8, 'account-details', 'page/account-details'),
(11, 9, 'thank-you', 'page/thank-you');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `supplier_id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `tin_number` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`supplier_id`, `company_name`, `location`, `contact_number`, `tin_number`, `remarks`, `status`) VALUES
(1, 'Cebu Metrotyre Corporation', 'Maguikay Mandaue', '417-3551', '009-411-317-000', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL,
  `transaction_type` varchar(255) NOT NULL,
  `ref_num_1` varchar(255) NOT NULL,
  `ref_num_2` varchar(255) NOT NULL,
  `transaction_date` date NOT NULL,
  `client_id` int(11) NOT NULL,
  `ship_name` varchar(250) DEFAULT NULL,
  `ship_address` varchar(250) DEFAULT NULL,
  `ship_address2` varchar(250) DEFAULT NULL,
  `ship_city` varchar(100) DEFAULT NULL,
  `ship_state` varchar(100) DEFAULT NULL,
  `ship_zip` varchar(100) DEFAULT NULL,
  `ship_country` varchar(100) DEFAULT NULL,
  `ship_countrycode` varchar(5) DEFAULT NULL,
  `ship_contact_number` varchar(20) DEFAULT NULL,
  `total_amount` varchar(255) NOT NULL,
  `vat_amount` float NOT NULL,
  `transacted_amount` float NOT NULL,
  `remarks` text NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `payment_due` date NOT NULL,
  `payment_reference_number` varchar(100) NOT NULL,
  `status` varchar(255) NOT NULL,
  `removed` tinyint(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `transaction_type`, `ref_num_1`, `ref_num_2`, `transaction_date`, `client_id`, `ship_name`, `ship_address`, `ship_address2`, `ship_city`, `ship_state`, `ship_zip`, `ship_country`, `ship_countrycode`, `ship_contact_number`, `total_amount`, `vat_amount`, `transacted_amount`, `remarks`, `payment_method`, `payment_due`, `payment_reference_number`, `status`, `removed`) VALUES
(1, 'Sales', 'ST-0000001', '', '2020-04-30', 1, 'sean ming', '188 cebu city', NULL, NULL, NULL, NULL, NULL, 'PH', '0923232332', '4500.00', 0, 0, 'ASAP', 'COD', '0000-00-00', '', 'POSTED', 0),
(2, 'Sales', 'ST-0000002', '', '2020-04-30', 1, '', '', NULL, NULL, NULL, NULL, NULL, 'PH', '', '1500.00', 0, 0, 'GCASH', 'GCASH', '0000-00-00', '', 'POSTED', 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_items`
--

CREATE TABLE `transaction_items` (
  `transaction_items_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `removed` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction_items`
--

INSERT INTO `transaction_items` (`transaction_items_id`, `transaction_id`, `item_id`, `quantity`, `amount`, `status`, `removed`) VALUES
(1, 1, 18, 1, '1500.00', 'POSTED', 0),
(2, 1, 13, 2, '2000.00', 'POSTED', 0),
(3, 1, 14, 1, '1000.00', 'POSTED', 0),
(4, 2, 19, 1, '1500.00', 'POSTED', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `country_code` varchar(2) DEFAULT NULL,
  `contactnumber` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('Administrator','Moderator','Supplier') NOT NULL,
  `removed` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `company_name`, `address`, `country_code`, `contactnumber`, `email`, `password`, `role`, `removed`) VALUES
(1, 'kevin', 'kevin sean', 'kobe', 'PETRO', '', 'US', '1 232 323 2323', 'kevin@yahoo.com', '$2y$10$nKclJv8peFoZic1WJN5gueRuveyjdQkpWNx2DbOZ9F8Xq/5tLETjC', 'Moderator', 0),
(2, 'admin', 'admin', 'admin', '', '', 'PH', '12345', 'admin@admin.com', '$2y$10$sxGgNUbZHHWShkf2XcnT0.Fupzp0zIY4d36esJqiV3IRueCtj1fsO', 'Administrator', 0),
(3, 'supplier', 'supplier', 'sup', 'cHINA  up', 'CHINA up', 'PH', '12345', 'supplier@admin.com', '$2y$10$sxGgNUbZHHWShkf2XcnT0.Fupzp0zIY4d36esJqiV3IRueCtj1fsO', 'Supplier', 0),
(4, NULL, 'kobe', 'kobe', '', '', 'PH', '12345', 'kobe@lakers.com', '$2y$10$.bwdFTQJyTBfoZNht9RVEeDR.kXUeuwz7Jf2J40O.6fA2kmUXLQ0C', 'Moderator', 0),
(5, NULL, 'Christopher ', 'Chan', '', '', 'PH', '12345', 'christopher@yahoo.com', '$2y$10$eNdZwwqhMB7LttgvcGgWL.ZMHDQGxan4f6jb9eGGLNr76A3KuTQ5u', 'Moderator', 0),
(6, NULL, 'Amy', 'Lao Shi', '', '', 'CH', '00 1 889 123 4178', 'laoshi@gmail.com', '$2y$10$vutg1UTSpztWWixNLWkLOuUObnYNO8THyVE96vKXPz9yGNJPrP72.', 'Moderator', 0),
(7, NULL, 'wing', 'chun', '', '', 'PH', '0923 252 5162', 'wingchun@gmail.com', '$2y$10$Lio3NaboH5sKdXTzZJyacuBNlEtsXpV1fzLX0bzckfUv.04JrOtd2', 'Moderator', 0),
(8, 'cmsadmin', 'cms', 'cms', '', '', NULL, '', 'cmsadmin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'Supplier', 0),
(9, 'asdasdasd', 'asdasd', 'asdasd', '', '', NULL, '88888888888888', 'tessdsdsd@yahoo.com', '$2y$10$c4GvST87iLBgmyhgajZSFexmf4vk58IPAjebwygN6sOm93xPBaB1m', 'Administrator', 0),
(10, 'etasd', 'test', 'test', 'company ', 'add', NULL, '123', 'test@gmail.comasd', '$2y$10$pe6mh4EmrQtitv77TcxDHObRldED1RCVCda6rqXwsogO1UvnufGKq', 'Supplier', 0),
(11, 'kobe12345', 'kobe', 'kobe', '', '', NULL, '12345', 'kobe@gmail.com', '$2y$10$yMfvXSi/n9GXJt071U8aWeT7pcQbyOF6kw3/wa3naXZU3FxnMoYx.', 'Moderator', 0),
(15, NULL, 'sean', 'kingston', 'BDO', 'cebu', 'PH', '0923 252 5162', 'seankingston@gmail.com', '$2y$10$Cj7y9UgSpEoO.vJKNpprXeaqTZZjCocs7a9MVimSz1cYXJrWzHnyW', 'Moderator', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`attachment_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_ailment`
--
ALTER TABLE `customer_ailment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `product_uom`
--
ALTER TABLE `product_uom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `quotation_detail`
--
ALTER TABLE `quotation_detail`
  ADD PRIMARY KEY (`quotation_detail_id`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `slug` (`slug`),
  ADD KEY `page_id` (`page_id`),
  ADD KEY `page_id_2` (`page_id`),
  ADD KEY `page_id_3` (`page_id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `transaction_items`
--
ALTER TABLE `transaction_items`
  ADD PRIMARY KEY (`transaction_items_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `attachment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `customer_ailment`
--
ALTER TABLE `customer_ailment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;
--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `product_uom`
--
ALTER TABLE `product_uom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `quotation_detail`
--
ALTER TABLE `quotation_detail`
  MODIFY `quotation_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `routes`
--
ALTER TABLE `routes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `transaction_items`
--
ALTER TABLE `transaction_items`
  MODIFY `transaction_items_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `routes`
--
ALTER TABLE `routes`
  ADD CONSTRAINT `routes_ibfk_1` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
