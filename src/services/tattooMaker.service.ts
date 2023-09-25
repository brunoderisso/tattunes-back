import { SocialMediaModel } from './../models/socialMedia.model';
import { TattooMakerModel } from './../models/tattooMaker.model';
import { AddressInput } from './../inputs/address.input';
import { PrismaService } from './../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TattooMakerService {
  constructor(private prisma: PrismaService) {}

  async createTattooMaker(
    tattooMaker: TattooMakerModel,
    address: AddressInput,
    socialMedias: SocialMediaModel[],
  ) {
    return this.prisma.tattooMaker.create({
      data: {
        ...tattooMaker,
        socialMedia: {
          create: socialMedias,
        },
        address: {
          create: address,
        },
      },
    });
  }
}
