/*
Navicat MySQL Data Transfer

Source Server         : CoreTea-Solution
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : dbbohde

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2013-01-21 00:56:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `acceptence_order`
-- ----------------------------
DROP TABLE IF EXISTS `acceptence_order`;
CREATE TABLE `acceptence_order` (
  `id_AO` varchar(20) NOT NULL,
  `id_customer` varchar(20) NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id_AO`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of acceptence_order
-- ----------------------------
INSERT INTO `acceptence_order` VALUES ('AO00001', 'CS00001', '2013-01-20');

-- ----------------------------
-- Table structure for `acceptence_order_detail`
-- ----------------------------
DROP TABLE IF EXISTS `acceptence_order_detail`;
CREATE TABLE `acceptence_order_detail` (
  `id_AO` varchar(20) NOT NULL,
  `id_item` varchar(20) NOT NULL,
  `jenis_item` varchar(20) NOT NULL,
  `qty` int(11) NOT NULL,
  `harga_total` double NOT NULL,
  `total_kubikasi` float NOT NULL,
  `total_kebutuhan_material` varchar(200) NOT NULL,
  `total_kebutuhan_accesories` varchar(200) NOT NULL,
  `total_kebutuhan_pipa` varchar(200) NOT NULL,
  `total_kebutuhan_cushion` varchar(200) NOT NULL,
  `total_kebutuhan_packing` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL,
  UNIQUE KEY `id_item` (`id_item`),
  CONSTRAINT `acceptence_order_detail_ibfk_1` FOREIGN KEY (`id_item`) REFERENCES `item` (`id_item`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of acceptence_order_detail
-- ----------------------------
INSERT INTO `acceptence_order_detail` VALUES ('AO00001', 'ITM00001', 'Test', '20', '200000', '200', '200', '200', '200', '200', '200', 'aktif');

-- ----------------------------
-- Table structure for `accesories`
-- ----------------------------
DROP TABLE IF EXISTS `accesories`;
CREATE TABLE `accesories` (
  `id_acc` varchar(20) NOT NULL,
  `nama_acc` varchar(50) NOT NULL,
  `id_kategori_acc` varchar(20) NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `ukuran` varchar(20) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `harga_jual` float NOT NULL,
  `harga_beli` float NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_acc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accesories
-- ----------------------------
INSERT INTO `accesories` VALUES ('ACC0001', 'Aksesories', 'KACC0001', '12', '12', '12', 'VEN00001', '12', '12', '12', '121');

-- ----------------------------
-- Table structure for `bahan_mentah_cushion`
-- ----------------------------
DROP TABLE IF EXISTS `bahan_mentah_cushion`;
CREATE TABLE `bahan_mentah_cushion` (
  `id_bahan_mentah` varchar(20) NOT NULL,
  `nama_bahan_mentah` varchar(50) NOT NULL,
  `id_jenis_bahan_mentah` varchar(20) NOT NULL,
  `ukuran` varchar(20) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_bahan_mentah`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bahan_mentah_cushion
-- ----------------------------
INSERT INTO `bahan_mentah_cushion` VALUES ('BM0001', 'Test', 'JBM0002', '87', 'Lusin', '78988', 'VEN00001', 'test');

-- ----------------------------
-- Table structure for `busa`
-- ----------------------------
DROP TABLE IF EXISTS `busa`;
CREATE TABLE `busa` (
  `id_busa` varchar(20) NOT NULL,
  `nama_busa` varchar(50) NOT NULL,
  `warna` varchar(20) NOT NULL,
  `dimensi` varchar(20) NOT NULL,
  `satuan_dimensi` varchar(20) NOT NULL,
  `density` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_busa`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of busa
-- ----------------------------
INSERT INTO `busa` VALUES ('BSA0001', 'A', 'Merah', 'A', 'A', 'A', '0', 'VEN00002', 'A');

-- ----------------------------
-- Table structure for `cushion`
-- ----------------------------
DROP TABLE IF EXISTS `cushion`;
CREATE TABLE `cushion` (
  `id_cushion` varchar(20) NOT NULL,
  `nama_cushion` varchar(50) NOT NULL,
  `id_jenis_cushion` varchar(20) NOT NULL,
  `id_bahan_mentah` varchar(200) NOT NULL,
  `kebutuhan_bahan_mentah` varchar(200) NOT NULL,
  `id_busa` varchar(20) NOT NULL,
  `kebutuhan_busa` float NOT NULL,
  `id_kain` varchar(20) NOT NULL,
  `kebutuhan_kain` float NOT NULL,
  `harga_jual` double NOT NULL,
  PRIMARY KEY (`id_cushion`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cushion
-- ----------------------------
INSERT INTO `cushion` VALUES ('CC0001BSA0001', 'Test Aja', 'JC0001', '', '', 'BSA0001', '0', 'CC0001', '0', '0');

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id_customer` varchar(20) NOT NULL,
  `nama_customer` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `Hp` varchar(20) NOT NULL,
  `No_rek` varchar(50) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_customer`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('CS00001', 'Daeng Deni Mardaeni', 'CoreTea-Solution', 'Kuningan', 'Kuningan', 'ddeni05@gmail.com', '085724433420', '085724433420', '12345678', 'New Member');

-- ----------------------------
-- Table structure for `epoxy`
-- ----------------------------
DROP TABLE IF EXISTS `epoxy`;
CREATE TABLE `epoxy` (
  `id_epoxy` varchar(20) NOT NULL,
  `nama_epoxy` varchar(50) NOT NULL,
  `id_jenis_epoxy` varchar(20) NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `id_tinner` varchar(20) NOT NULL,
  `warna` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `harga` double NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_epoxy`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of epoxy
-- ----------------------------
INSERT INTO `epoxy` VALUES ('EPX0001', 'Nama EPoxy', 'JEPX0001', 'WRN0001', '', '', '677', '7576', 'VEN00001', '786786', '687678');

-- ----------------------------
-- Table structure for `index_item`
-- ----------------------------
DROP TABLE IF EXISTS `index_item`;
CREATE TABLE `index_item` (
  `id_index` int(11) NOT NULL,
  `id_epoxy` varchar(20) NOT NULL,
  `id_anyam` varchar(200) NOT NULL,
  `kebutuhan_anyam` varchar(200) NOT NULL,
  `id_acc` varchar(200) NOT NULL,
  `kebutuhan_acc` varchar(200) NOT NULL,
  `id_pipa` varchar(200) NOT NULL,
  `kebutuhan_pipa` varchar(200) NOT NULL,
  PRIMARY KEY (`id_index`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of index_item
-- ----------------------------

-- ----------------------------
-- Table structure for `item`
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id_item` varchar(20) NOT NULL,
  `nama_item` varchar(50) NOT NULL,
  `id_index` int(11) NOT NULL,
  `id_kategori` varchar(20) NOT NULL,
  `id_cushion` varchar(20) NOT NULL,
  `id_packing` varchar(20) NOT NULL,
  `kebutuhan_cushion` varchar(200) NOT NULL,
  `kebutuhan_packing` float NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `url_warna_anyam` varchar(200) NOT NULL,
  `url_gambar` varchar(200) NOT NULL,
  `dimensi` varchar(20) NOT NULL,
  `seatwidth` float NOT NULL,
  `seatheight` float NOT NULL,
  `seatdept` float NOT NULL,
  `armheight` float NOT NULL,
  `satuan_dimensi` varchar(20) NOT NULL,
  `kubikasi` float NOT NULL,
  `id_jenis_anyam` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `harga_jasa_anyam` double NOT NULL,
  `harga_jasa_rangka_bending` double NOT NULL,
  `harga_jasa_rangka_las` double NOT NULL,
  `harga_jasa_cushion` double NOT NULL,
  `harga_jasa_packing` double NOT NULL,
  `harga_item` double NOT NULL,
  PRIMARY KEY (`id_item`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('ITM00001', 'Test Item', '0', 'KI01', '', '', '', '0', '', '', '', '56', '565', '56', '565', '65', '', '6756', '2', '565', '65675', '675', '67565', '65', '6756', '75765');

-- ----------------------------
-- Table structure for `jenis_anyam`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_anyam`;
CREATE TABLE `jenis_anyam` (
  `id_jenis_anyam` varchar(20) NOT NULL,
  `nama_jenis_anyam` varchar(30) NOT NULL,
  PRIMARY KEY (`id_jenis_anyam`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_anyam
-- ----------------------------
INSERT INTO `jenis_anyam` VALUES ('JA001', 'Anyam 1');

-- ----------------------------
-- Table structure for `jenis_bahan_mentah_cushion`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_bahan_mentah_cushion`;
CREATE TABLE `jenis_bahan_mentah_cushion` (
  `id_jenis_bahan_mentah` varchar(20) NOT NULL,
  `nama_jenis_bahan_mentah` varchar(50) NOT NULL,
  PRIMARY KEY (`id_jenis_bahan_mentah`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_bahan_mentah_cushion
-- ----------------------------
INSERT INTO `jenis_bahan_mentah_cushion` VALUES ('JBM0002', 'BAHAN 4');

-- ----------------------------
-- Table structure for `jenis_bahan_plastik`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_bahan_plastik`;
CREATE TABLE `jenis_bahan_plastik` (
  `id_jenis_bahan_plastik` varchar(20) NOT NULL,
  `nama_jenis_bahan_plastik` varchar(30) NOT NULL,
  PRIMARY KEY (`id_jenis_bahan_plastik`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_bahan_plastik
-- ----------------------------
INSERT INTO `jenis_bahan_plastik` VALUES ('JBAN0001', 'Jenis Anyam');

-- ----------------------------
-- Table structure for `jenis_cushion`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_cushion`;
CREATE TABLE `jenis_cushion` (
  `id_jenis_cushion` varchar(20) NOT NULL,
  `nama_jenis_cushion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_jenis_cushion`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_cushion
-- ----------------------------
INSERT INTO `jenis_cushion` VALUES ('1', 'Jenis Cushion 1');
INSERT INTO `jenis_cushion` VALUES ('2', 'Jenis Cushion 2');
INSERT INTO `jenis_cushion` VALUES ('JC0001', 'Jenis Cushion 3');

-- ----------------------------
-- Table structure for `jenis_epoxy`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_epoxy`;
CREATE TABLE `jenis_epoxy` (
  `id_jenis_epoxy` varchar(20) NOT NULL,
  `nama_jenis_epoxy` varchar(30) NOT NULL,
  PRIMARY KEY (`id_jenis_epoxy`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_epoxy
-- ----------------------------
INSERT INTO `jenis_epoxy` VALUES ('JEPX0001', 'Jenis EPoxy');
INSERT INTO `jenis_epoxy` VALUES ('JEPX0002', 'Jenis EPoxy 2');

-- ----------------------------
-- Table structure for `jenis_kain`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_kain`;
CREATE TABLE `jenis_kain` (
  `id_jenis_kain` varchar(20) NOT NULL,
  `nama_jenis_kain` varchar(50) NOT NULL,
  PRIMARY KEY (`id_jenis_kain`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_kain
-- ----------------------------
INSERT INTO `jenis_kain` VALUES ('JK0001', 'Jenis 1');
INSERT INTO `jenis_kain` VALUES ('JK0002', 'Jenis 2');

-- ----------------------------
-- Table structure for `jenis_packing`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_packing`;
CREATE TABLE `jenis_packing` (
  `id_jenis_packing` varchar(20) NOT NULL,
  `nama_jenis_packing` varchar(30) NOT NULL,
  PRIMARY KEY (`id_jenis_packing`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_packing
-- ----------------------------
INSERT INTO `jenis_packing` VALUES ('JPCK0001', 'Jenis Packing');

-- ----------------------------
-- Table structure for `jenis_pengesub`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_pengesub`;
CREATE TABLE `jenis_pengesub` (
  `id_jenis_sub` varchar(20) NOT NULL,
  `nama_jenis_sub` varchar(50) NOT NULL,
  PRIMARY KEY (`id_jenis_sub`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_pengesub
-- ----------------------------
INSERT INTO `jenis_pengesub` VALUES ('JPGS0001', 'Kategori 1');

-- ----------------------------
-- Table structure for `jenis_pipa`
-- ----------------------------
DROP TABLE IF EXISTS `jenis_pipa`;
CREATE TABLE `jenis_pipa` (
  `id_jenis_pipa` varchar(20) NOT NULL,
  `bahan` varchar(30) NOT NULL,
  PRIMARY KEY (`id_jenis_pipa`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jenis_pipa
-- ----------------------------
INSERT INTO `jenis_pipa` VALUES ('JPP0001', 'Jenis Pipa');

-- ----------------------------
-- Table structure for `kain`
-- ----------------------------
DROP TABLE IF EXISTS `kain`;
CREATE TABLE `kain` (
  `id_kain` varchar(20) NOT NULL,
  `nama_kain` varchar(50) NOT NULL,
  `id_jenis_kain` varchar(20) NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kain`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kain
-- ----------------------------
INSERT INTO `kain` VALUES ('CC0001', 'DOuble', 'JK0002', '1', '1000', '12', 'VEN00003', '1');

-- ----------------------------
-- Table structure for `kategori_acc`
-- ----------------------------
DROP TABLE IF EXISTS `kategori_acc`;
CREATE TABLE `kategori_acc` (
  `id_kategori_acc` varchar(20) NOT NULL,
  `nama_kategori` varchar(30) NOT NULL,
  PRIMARY KEY (`id_kategori_acc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kategori_acc
-- ----------------------------
INSERT INTO `kategori_acc` VALUES ('KACC0001', 'Warna Baru');

-- ----------------------------
-- Table structure for `kategori_item`
-- ----------------------------
DROP TABLE IF EXISTS `kategori_item`;
CREATE TABLE `kategori_item` (
  `id_kategori` varchar(20) NOT NULL,
  `nama_kategori` varchar(30) NOT NULL,
  PRIMARY KEY (`id_kategori`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kategori_item
-- ----------------------------
INSERT INTO `kategori_item` VALUES ('KI01', 'Test');

-- ----------------------------
-- Table structure for `kategori_supplier`
-- ----------------------------
DROP TABLE IF EXISTS `kategori_supplier`;
CREATE TABLE `kategori_supplier` (
  `id_kategori_supplier` varchar(12) NOT NULL,
  `nama_kategori_supplier` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kategori_supplier`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kategori_supplier
-- ----------------------------
INSERT INTO `kategori_supplier` VALUES ('KSP00001', 'Batu Bata');

-- ----------------------------
-- Table structure for `kategori_warna`
-- ----------------------------
DROP TABLE IF EXISTS `kategori_warna`;
CREATE TABLE `kategori_warna` (
  `id_kategori_warna` varchar(20) NOT NULL,
  `nama_kategori_warna` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kategori_warna`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kategori_warna
-- ----------------------------
INSERT INTO `kategori_warna` VALUES ('KWRN0001', 'Biru');

-- ----------------------------
-- Table structure for `lolos_qc`
-- ----------------------------
DROP TABLE IF EXISTS `lolos_qc`;
CREATE TABLE `lolos_qc` (
  `id_lolos_qc` varchar(50) NOT NULL,
  `id_spk` varchar(50) NOT NULL,
  `tanggal_QC` date NOT NULL,
  PRIMARY KEY (`id_lolos_qc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lolos_qc
-- ----------------------------
INSERT INTO `lolos_qc` VALUES ('LQC0001', 'SPK0001', '0000-00-00');
INSERT INTO `lolos_qc` VALUES ('LQC0002', 'SPK0001', '0000-00-00');
INSERT INTO `lolos_qc` VALUES ('LQC0003', 'SPK0001', '2013-01-20');

-- ----------------------------
-- Table structure for `lolos_qc_detail`
-- ----------------------------
DROP TABLE IF EXISTS `lolos_qc_detail`;
CREATE TABLE `lolos_qc_detail` (
  `id_lolos_qc` varchar(50) NOT NULL,
  `id_item` varchar(20) NOT NULL,
  `tanggal_lolos` date NOT NULL,
  `qty` int(11) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lolos_qc_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `order_confirmation`
-- ----------------------------
DROP TABLE IF EXISTS `order_confirmation`;
CREATE TABLE `order_confirmation` (
  `id_oc` varchar(50) NOT NULL,
  `id_pi` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id_oc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_confirmation
-- ----------------------------
INSERT INTO `order_confirmation` VALUES ('OC0001', '', '0000-00-00');
INSERT INTO `order_confirmation` VALUES ('OC0002', '', '0000-00-00');
INSERT INTO `order_confirmation` VALUES ('OC0003', 'PI0001', '2013-01-20');

-- ----------------------------
-- Table structure for `packing`
-- ----------------------------
DROP TABLE IF EXISTS `packing`;
CREATE TABLE `packing` (
  `id_packing` varchar(20) NOT NULL,
  `nama_packing` varchar(30) NOT NULL,
  `id_jenis_packing` varchar(20) NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `ukuran` varchar(20) NOT NULL,
  `bobot` float NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_packing`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of packing
-- ----------------------------
INSERT INTO `packing` VALUES ('PCK0001', 'Packing', 'JPCK0001', 'WRN0001', '45', '545', '545', '445', 'VEN00001', '87678');

-- ----------------------------
-- Table structure for `pembayaran_purchasing`
-- ----------------------------
DROP TABLE IF EXISTS `pembayaran_purchasing`;
CREATE TABLE `pembayaran_purchasing` (
  `id_pembayaran` varchar(50) NOT NULL,
  `id_penerimaan_barang` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  PRIMARY KEY (`id_pembayaran`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pembayaran_purchasing
-- ----------------------------

-- ----------------------------
-- Table structure for `pembayaran_purchasing_detail`
-- ----------------------------
DROP TABLE IF EXISTS `pembayaran_purchasing_detail`;
CREATE TABLE `pembayaran_purchasing_detail` (
  `id_pembayaran` varchar(50) NOT NULL,
  `no_invoice` varchar(50) NOT NULL,
  `harga` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pembayaran_purchasing_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `penerimaan_barang`
-- ----------------------------
DROP TABLE IF EXISTS `penerimaan_barang`;
CREATE TABLE `penerimaan_barang` (
  `id_penerimaan_barang` varchar(50) NOT NULL,
  `id_po` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id_penerimaan_barang`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of penerimaan_barang
-- ----------------------------
INSERT INTO `penerimaan_barang` VALUES ('PB0001', 'PO0001', '0000-00-00');
INSERT INTO `penerimaan_barang` VALUES ('PB0002', 'PO0001', '0000-00-00');
INSERT INTO `penerimaan_barang` VALUES ('PB0003', 'PO0001', '2013-01-22');

-- ----------------------------
-- Table structure for `pengesub`
-- ----------------------------
DROP TABLE IF EXISTS `pengesub`;
CREATE TABLE `pengesub` (
  `id_pengesub` varchar(20) NOT NULL,
  `nama_pengesub` varchar(50) NOT NULL,
  `id_jenis_sub` varchar(20) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `telp` varchar(20) NOT NULL,
  `jumlah_pekerja` int(11) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_pengesub`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pengesub
-- ----------------------------
INSERT INTO `pengesub` VALUES ('PGS0001', 'Daeng Deni Mardaeni', 'JPGS0001', 'Kuningan', '084724433420', '10', 'Baru');

-- ----------------------------
-- Table structure for `pipa`
-- ----------------------------
DROP TABLE IF EXISTS `pipa`;
CREATE TABLE `pipa` (
  `id_pipa` varchar(20) NOT NULL,
  `nama_pipa` varchar(50) NOT NULL,
  `id_jenis_pipa` varchar(20) NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `ukuran` float NOT NULL,
  `ketebalan` float NOT NULL,
  `diameter` varchar(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_pipa`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pipa
-- ----------------------------
INSERT INTO `pipa` VALUES ('PP0001', 'Nama Pipa', 'JPP0001', 'WRN0001', '87', '878', '87', '8787', '787', 'VEN00001', '87987');

-- ----------------------------
-- Table structure for `plastik`
-- ----------------------------
DROP TABLE IF EXISTS `plastik`;
CREATE TABLE `plastik` (
  `id_plastik` varchar(20) NOT NULL,
  `nama_plastik` varchar(50) NOT NULL,
  `id_jenis_bahan_plastik` varchar(20) NOT NULL,
  `lebar_plastik` float NOT NULL,
  `id_warna_pabrik` varchar(20) NOT NULL,
  `satuan_lebar_plastik` varchar(20) NOT NULL,
  `stok` float NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `harga` double NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`id_plastik`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plastik
-- ----------------------------
INSERT INTO `plastik` VALUES ('BAN0001', 'Plastik', 'JBAN0001', '50', '1', '67', '67', '76', 'VEN00001', '10000', '1000');

-- ----------------------------
-- Table structure for `proporma_invoice`
-- ----------------------------
DROP TABLE IF EXISTS `proporma_invoice`;
CREATE TABLE `proporma_invoice` (
  `id_pi` varchar(50) NOT NULL,
  `id_AO` varchar(20) NOT NULL,
  `tanggal_pi` date NOT NULL,
  `diskon` float NOT NULL,
  `shipment_Conf_date` date NOT NULL,
  `Contyner_type` varchar(50) NOT NULL,
  PRIMARY KEY (`id_pi`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of proporma_invoice
-- ----------------------------
INSERT INTO `proporma_invoice` VALUES ('PI0001', 'AO00001', '0000-00-00', '30', '0000-00-00', 'tEST');
INSERT INTO `proporma_invoice` VALUES ('PI0002', 'AO00001', '0000-00-00', '30', '0000-00-00', 'tEST');
INSERT INTO `proporma_invoice` VALUES ('PI0003', 'AO00001', '0000-00-00', '30', '0000-00-00', 'tEST');
INSERT INTO `proporma_invoice` VALUES ('PI0004', 'AO00001', '2013-01-20', '30', '2013-01-20', 'Test');
INSERT INTO `proporma_invoice` VALUES ('PI0005', 'AO00001', '2013-01-20', '30', '2013-01-20', 'Test');
INSERT INTO `proporma_invoice` VALUES ('PI0006', 'AO00001', '2013-01-20', '30', '2013-01-20', 'Test');

-- ----------------------------
-- Table structure for `purchase_order`
-- ----------------------------
DROP TABLE IF EXISTS `purchase_order`;
CREATE TABLE `purchase_order` (
  `id_po` varchar(50) NOT NULL,
  `id_oc` varchar(50) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  `tanggal_po` date NOT NULL,
  `tanggal_selesai` date NOT NULL,
  `ppn` float NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id_po`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of purchase_order
-- ----------------------------
INSERT INTO `purchase_order` VALUES ('PO0001', 'OC0001', 'VEN00001', '2013-01-20', '2013-01-20', '10', '100000');

-- ----------------------------
-- Table structure for `purchase_order_detail`
-- ----------------------------
DROP TABLE IF EXISTS `purchase_order_detail`;
CREATE TABLE `purchase_order_detail` (
  `id_po` varchar(50) NOT NULL,
  `id_item` varchar(20) NOT NULL,
  `qty` float NOT NULL,
  `harga` double NOT NULL,
  `jumlah_diterima` float NOT NULL,
  PRIMARY KEY (`id_po`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of purchase_order_detail
-- ----------------------------
INSERT INTO `purchase_order_detail` VALUES ('PO0001', 'ITM00001', '1000', '75765', '1000');

-- ----------------------------
-- Table structure for `rekapitulasi_anggaran`
-- ----------------------------
DROP TABLE IF EXISTS `rekapitulasi_anggaran`;
CREATE TABLE `rekapitulasi_anggaran` (
  `id_rekap` varchar(50) NOT NULL,
  `periode` date NOT NULL,
  `id_pengesub` varchar(20) NOT NULL,
  PRIMARY KEY (`id_rekap`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rekapitulasi_anggaran
-- ----------------------------
INSERT INTO `rekapitulasi_anggaran` VALUES ('RA0001', '2013-01-21', 'PGS0001');

-- ----------------------------
-- Table structure for `rekapitulasi_anggaran_detail`
-- ----------------------------
DROP TABLE IF EXISTS `rekapitulasi_anggaran_detail`;
CREATE TABLE `rekapitulasi_anggaran_detail` (
  `id_rekap` varchar(50) NOT NULL,
  `id_lolos_qc` varchar(50) NOT NULL,
  `nominal` double NOT NULL,
  `pembayaran` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rekapitulasi_anggaran_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `spk`
-- ----------------------------
DROP TABLE IF EXISTS `spk`;
CREATE TABLE `spk` (
  `id_spk` varchar(50) NOT NULL,
  `id_pengesub` varchar(20) NOT NULL,
  `id_oc` varchar(50) NOT NULL,
  `tanggal_spk` date NOT NULL,
  `tanggal_selesai` date NOT NULL,
  `status_spk` varchar(50) NOT NULL,
  PRIMARY KEY (`id_spk`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of spk
-- ----------------------------
INSERT INTO `spk` VALUES ('SPK0001', 'PGS0001', 'OC0002', '0000-00-00', '0000-00-00', '');
INSERT INTO `spk` VALUES ('SPK0002', 'PGS0001', 'OC0001', '2013-01-16', '2013-01-20', '1');

-- ----------------------------
-- Table structure for `spk_detail`
-- ----------------------------
DROP TABLE IF EXISTS `spk_detail`;
CREATE TABLE `spk_detail` (
  `id_spk` varchar(50) NOT NULL,
  `id_item` varchar(20) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of spk_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `supplier`
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `id_supplier` varchar(12) NOT NULL DEFAULT '',
  `nama_supplier` varchar(50) NOT NULL,
  `id_kategori_supplier` varchar(12) NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `telp` varchar(20) NOT NULL,
  `Hp` varchar(20) NOT NULL,
  `Fax` varchar(20) NOT NULL,
  `No_rek` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_supplier`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('VEN00001', 'Daeng Deni Mardaeni', 'KSP00001', 'Kuningan', '123', '456', '789', '098765', 'd@d.com', 'test');
INSERT INTO `supplier` VALUES ('VEN00002', 'Dimas', 'KSP00001', 'Ciledug', '767', '78687', '78687', '76876', 'd@dd.com', 'test');
INSERT INTO `supplier` VALUES ('VEN00003', 'Deni', 'KSP00001', 'Kuningan', '897698675', '786876', '7687', '6876', 'd@d.com', 'test');

-- ----------------------------
-- Table structure for `surat_kebutuhan_bahan`
-- ----------------------------
DROP TABLE IF EXISTS `surat_kebutuhan_bahan`;
CREATE TABLE `surat_kebutuhan_bahan` (
  `id_skb` varchar(50) NOT NULL,
  `id_spk` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id_skb`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of surat_kebutuhan_bahan
-- ----------------------------
INSERT INTO `surat_kebutuhan_bahan` VALUES ('SKB0001', 'SPK0001', '0000-00-00');
INSERT INTO `surat_kebutuhan_bahan` VALUES ('SKB0002', 'SPK0001', '2013-01-21');

-- ----------------------------
-- Table structure for `surat_kebutuhan_bahan_detail`
-- ----------------------------
DROP TABLE IF EXISTS `surat_kebutuhan_bahan_detail`;
CREATE TABLE `surat_kebutuhan_bahan_detail` (
  `id_skb` varchar(50) NOT NULL,
  `id_bahan` varchar(20) NOT NULL,
  `jumlah_butuh` float NOT NULL,
  `jumlah_ambil` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of surat_kebutuhan_bahan_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `surat_pengambilan_bahan`
-- ----------------------------
DROP TABLE IF EXISTS `surat_pengambilan_bahan`;
CREATE TABLE `surat_pengambilan_bahan` (
  `id_pengambilan` varchar(50) NOT NULL,
  `id_skb` varchar(50) NOT NULL,
  `tanggal_ambil` date NOT NULL,
  PRIMARY KEY (`id_pengambilan`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of surat_pengambilan_bahan
-- ----------------------------
INSERT INTO `surat_pengambilan_bahan` VALUES ('SPB0001', 'SKB0001', '2013-01-21');

-- ----------------------------
-- Table structure for `tinner`
-- ----------------------------
DROP TABLE IF EXISTS `tinner`;
CREATE TABLE `tinner` (
  `id_tinner` varchar(20) NOT NULL,
  `nama_tinner` varchar(50) NOT NULL,
  `stok` float NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  PRIMARY KEY (`id_tinner`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tinner
-- ----------------------------

-- ----------------------------
-- Table structure for `warna`
-- ----------------------------
DROP TABLE IF EXISTS `warna`;
CREATE TABLE `warna` (
  `id_warna_pabrik` varchar(20) NOT NULL,
  `id_warna_supplier` varchar(20) NOT NULL,
  `id_kategori_warna` varchar(20) NOT NULL,
  `url_gambar` varchar(200) NOT NULL,
  `id_supplier` varchar(20) NOT NULL,
  PRIMARY KEY (`id_warna_pabrik`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of warna
-- ----------------------------
INSERT INTO `warna` VALUES ('WRN0001', '123456', 'KWRN0001', 'hojklhki', 'VEN00001');

-- ----------------------------
-- View structure for `view_pi`
-- ----------------------------
DROP VIEW IF EXISTS `view_pi`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_pi` AS select `acceptence_order`.`id_AO` AS `id_AO`,`acceptence_order`.`tanggal` AS `tanggal`,`acceptence_order_detail`.`jenis_item` AS `jenis_item`,`acceptence_order_detail`.`qty` AS `qty`,`acceptence_order_detail`.`harga_total` AS `harga_total`,`acceptence_order_detail`.`total_kubikasi` AS `total_kubikasi`,`acceptence_order_detail`.`total_kebutuhan_material` AS `total_kebutuhan_material`,`acceptence_order_detail`.`total_kebutuhan_accesories` AS `total_kebutuhan_accesories`,`acceptence_order_detail`.`total_kebutuhan_pipa` AS `total_kebutuhan_pipa`,`acceptence_order_detail`.`total_kebutuhan_cushion` AS `total_kebutuhan_cushion`,`acceptence_order_detail`.`total_kebutuhan_packing` AS `total_kebutuhan_packing`,`acceptence_order_detail`.`status` AS `status`,`proporma_invoice`.`id_pi` AS `id_pi`,`proporma_invoice`.`tanggal_pi` AS `tanggal_pi`,`proporma_invoice`.`diskon` AS `diskon`,`proporma_invoice`.`shipment_Conf_date` AS `shipment_Conf_date`,`proporma_invoice`.`Contyner_type` AS `Contyner_type`,`item`.`id_item` AS `id_item`,`item`.`id_index` AS `id_index`,`item`.`id_kategori` AS `id_kategori`,`item`.`id_cushion` AS `id_cushion`,`item`.`id_packing` AS `id_packing`,`item`.`kebutuhan_cushion` AS `kebutuhan_cushion`,`item`.`kebutuhan_packing` AS `kebutuhan_packing`,`item`.`id_warna_pabrik` AS `id_warna_pabrik`,`item`.`url_warna_anyam` AS `url_warna_anyam`,`item`.`url_gambar` AS `url_gambar`,`item`.`dimensi` AS `dimensi`,`item`.`seatwidth` AS `seatwidth`,`item`.`seatheight` AS `seatheight`,`item`.`seatdept` AS `seatdept`,`item`.`armheight` AS `armheight`,`item`.`satuan_dimensi` AS `satuan_dimensi`,`item`.`kubikasi` AS `kubikasi`,`item`.`id_jenis_anyam` AS `id_jenis_anyam`,`item`.`stok` AS `stok`,`item`.`harga_jasa_anyam` AS `harga_jasa_anyam`,`item`.`harga_jasa_rangka_bending` AS `harga_jasa_rangka_bending`,`item`.`harga_jasa_rangka_las` AS `harga_jasa_rangka_las`,`item`.`harga_jasa_cushion` AS `harga_jasa_cushion`,`item`.`harga_jasa_packing` AS `harga_jasa_packing`,`item`.`harga_item` AS `harga_item`,`customer`.`id_customer` AS `id_customer`,`customer`.`nama_customer` AS `nama_customer`,`customer`.`company` AS `company`,`customer`.`destination` AS `destination`,`customer`.`address` AS `address`,`customer`.`email` AS `email`,`customer`.`phone` AS `phone`,`customer`.`Hp` AS `Hp`,`customer`.`No_rek` AS `No_rek`,`customer`.`keterangan` AS `keterangan` from ((((`acceptence_order` join `acceptence_order_detail`) join `item`) join `customer`) join `proporma_invoice`) where ((`acceptence_order_detail`.`id_AO` = `acceptence_order`.`id_AO`) and (`acceptence_order_detail`.`id_item` = `item`.`id_item`) and (`customer`.`id_customer` = `acceptence_order`.`id_customer`) and (`proporma_invoice`.`id_AO` = `acceptence_order`.`id_AO`)) ;
