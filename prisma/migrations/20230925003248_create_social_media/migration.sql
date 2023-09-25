-- CreateTable
CREATE TABLE `SocialMedia` (
    `id` VARCHAR(191) NOT NULL,
    `tattooMakerId` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SocialMedia` ADD CONSTRAINT `SocialMedia_tattooMakerId_fkey` FOREIGN KEY (`tattooMakerId`) REFERENCES `TattooMaker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
