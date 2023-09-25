/*
  Warnings:

  - You are about to drop the `SocialMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `SocialMedia` DROP FOREIGN KEY `SocialMedia_tattooMakerId_fkey`;

-- DropTable
DROP TABLE `SocialMedia`;
