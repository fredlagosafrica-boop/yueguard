-- 恒玥团队 IFA 内容库 — 客群分类表（直接导入MySQL）
-- 生成时间：2026-05-08

CREATE TABLE IF NOT EXISTS `ifa_categories` (
  `id` VARCHAR(64) PRIMARY KEY,
  `name` VARCHAR(128) NOT NULL,
  `parent_id` VARCHAR(64),
  `type` ENUM('folder','leaf') NOT NULL DEFAULT 'folder',
  `sort_order` INT DEFAULT 0,
  `content` LONGTEXT,
  `meta` JSON,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -------------------------------
-- 2.1.1 精准定位细分客群 — 9大类和42个叶子节点
-- -------------------------------

INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.1','财富传承客群','2.1.1','folder',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.2','跨境家庭保障客群','2.1.1','folder',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.3','留学/移民规划客群','2.1.1','folder',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4','中产阶级储蓄增值客群','2.1.1','folder',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.5','人生阶段类客群','2.1.1','folder',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.6','职业/身份专属客群','2.1.1','folder',6);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7','风险&需求专项客群','2.1.1','folder',7);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.8','高端细分延伸客群','2.1.1','folder',8);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.9','政策&场景类客群','2.1.1','folder',9);

INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.1.1','企业主家业传承客群','2.1.1.1','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.1.2','超高净值家族传承客群','2.1.1.1','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.1.3','再婚重组家庭传承客群','2.1.1.1','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.1.4','隔代祖辈赠与传承客群','2.1.1.1','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.1.5','高知专业人士传承客群','2.1.1.1','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.2.1','内地定居、配置港险跨境客群','2.1.1.2','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.2.2','两地分居跨境家庭客群','2.1.1.2','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.2.3','港人在内地生活安居客群','2.1.1.2','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.2.4','海外华侨侨眷客群','2.1.1.2','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.2.5','跨境婚姻家庭客群','2.1.1.2','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.3.1','低龄本科留学规划客群','2.1.1.3','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.3.2','硕博高端留学客群','2.1.1.3','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.3.3','全家移民前置规划客群','2.1.1.3','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.3.4','子女定居海外父母养老客群','2.1.1.3','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.3.5','候鸟式跨境养老客群','2.1.1.3','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4.1','工薪白领稳健储蓄客群','2.1.1.4','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4.2','房贷车贷负债中产客群','2.1.1.4','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4.3','子女教育储备中产客群','2.1.1.4','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4.4','中年提前养老规划客群','2.1.1.4','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4.5','自由职业个体户中产客群','2.1.1.4','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.4.6','保守型理财置换客群','2.1.1.4','leaf',6);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.5.1','单身青年刚需客群','2.1.1.5','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.5.2','新婚家庭刚需客群','2.1.1.5','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.5.3','三口之家育儿规划客群','2.1.1.5','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.5.4','子女独立自主期客群','2.1.1.5','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.5.5','退休养老规划客群','2.1.1.5','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.6.1','企业主/个体户经营客群','2.1.1.6','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.6.2','职场精英白领客群','2.1.1.6','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.6.3','自由职业/灵活就业客群','2.1.1.6','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.6.4','高危职业从业客群','2.1.1.6','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.6.5','公职/事业单位客群','2.1.1.6','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7.1','健康异常非标体客群','2.1.1.7','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7.2','女性专属保障客群','2.1.1.7','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7.3','子女婚嫁储备客群','2.1.1.7','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7.4','资产保本稳健理财客群','2.1.1.7','leaf',4);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7.5','隔代传承赠与客群','2.1.1.7','leaf',5);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.7.6','单亲家庭保障客群','2.1.1.7','leaf',6);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.8.1','高端医疗私立就医客群','2.1.1.8','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.8.2','家族信托配套客群','2.1.1.8','leaf',2);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.8.3','再婚家庭资产隔离客群','2.1.1.8','leaf',3);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.9.1','社保不足补充客群','2.1.1.9','leaf',1);
INSERT INTO `ifa_categories` (`id`,`name`,`parent_id`,`type`,`sort_order`) VALUES ('2.1.1.9.2','房产负债杠杆客群','2.1.1.9','leaf',2);

-- ✅ 共 51 条记录（9个文件夹 + 42个叶子节点）