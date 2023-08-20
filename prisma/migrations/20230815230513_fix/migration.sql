/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tattoMakerId` on the `Address` table. All the data in the column will be lost.
  - The primary key for the `SocialMedia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tattoMakerId` on the `SocialMedia` table. All the data in the column will be lost.
  - You are about to drop the column `tattoMakerId` on the `Tattoo` table. All the data in the column will be lost.
  - Added the required column `tattooMakerId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tattooMakerId` to the `SocialMedia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tattooMakerId` to the `Tattoo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Address` DROP FOREIGN KEY `Address_tattoMakerId_fkey`;

-- DropForeignKey
ALTER TABLE `SocialMedia` DROP FOREIGN KEY `SocialMedia_tattoMakerId_fkey`;

-- DropForeignKey
ALTER TABLE `Tattoo` DROP FOREIGN KEY `Tattoo_tattoMakerId_fkey`;

-- AlterTable
ALTER TABLE `Address` DROP PRIMARY KEY,
    DROP COLUMN `tattoMakerId`,
    ADD COLUMN `tattooMakerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`tattooMakerId`);

-- AlterTable
ALTER TABLE `SocialMedia` DROP PRIMARY KEY,
    DROP COLUMN `tattoMakerId`,
    ADD COLUMN `tattooMakerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`tattooMakerId`);

-- AlterTable
ALTER TABLE `Tattoo` DROP COLUMN `tattoMakerId`,
    ADD COLUMN `tattooMakerId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tattoo` ADD CONSTRAINT `Tattoo_tattooMakerId_fkey` FOREIGN KEY (`tattooMakerId`) REFERENCES `TattooMaker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_tattooMakerId_fkey` FOREIGN KEY (`tattooMakerId`) REFERENCES `TattooMaker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocialMedia` ADD CONSTRAINT `SocialMedia_tattooMakerId_fkey` FOREIGN KEY (`tattooMakerId`) REFERENCES `TattooMaker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
