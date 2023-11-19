import { SocialMediaModel } from './../models/socialMedia.model';
import { TattooMakerModel } from './../models/tattooMaker.model';
import { AddressInput, PlaceInput } from './../inputs/address.input';
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

  async getTattooMakers(searchPlace: PlaceInput) {
    let where = {};

    if (searchPlace) {
      where = {
        address: {
          AND: {
            city: {
              equals: searchPlace.city,
            },
            state: {
              equals: searchPlace.state,
            },
          },
        },
      };
    }

    return this.prisma.tattooMaker.findMany({ where });
  }
}
