-- CreateTable
CREATE TABLE `SocialMedia` (
    `tattoMakerId` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tattoMakerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SocialMedia` ADD CONSTRAINT `SocialMedia_tattoMakerId_fkey` FOREIGN KEY (`tattoMakerId`) REFERENCES `TattooMaker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
