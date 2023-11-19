import { SocialMediaService } from './../services/socialMedia.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { randomUUID } from 'node:crypto';

import { TattooMakerModel } from './../models/tattooMaker.model';
import { AddressInput, PlaceInput } from './../inputs/address.input';
import { TattooMakerInput } from './../inputs/tattooMaker.input';
import { AddressModel } from './../models/address.model';
import { SocialMediaModel } from './../models/socialMedia.model';
import { TattooMakerService } from '../services/tattooMaker.service';
import { AddressService } from '../services/address.service';

@Resolver(() => TattooMakerModel)
export class TattooMakerResolver {
  constructor(
    private tattooMakerService: TattooMakerService,
    private addressService: AddressService,
    private socialMediaService: SocialMediaService,
  ) {}

  @Query(() => [TattooMakerModel])
  async getTattooMakers(
    @Args('searchPlace', { nullable: true }) searchPlace: PlaceInput,
  ) {
    return this.tattooMakerService.getTattooMakers(searchPlace);
  }

  @ResolveField(() => AddressModel)
  async getAddress(@Parent() tattooMaker: TattooMakerModel) {
    const { id } = tattooMaker;

    return this.addressService.getAddress(id);
  }

  @ResolveField(() => [SocialMediaModel])
  async getSocialMedia(@Parent() tattooMaker: TattooMakerModel) {
    const { id } = tattooMaker;

    return this.socialMediaService.getSocialMedias(id);
  }

  @Mutation(() => TattooMakerModel)
  async createTattooMaker(
    @Args('tattooMaker') tattooMaker: TattooMakerInput,
    @Args('address', { nullable: true }) address: AddressInput,
  ) {
    const tattooMakerId = randomUUID();
    const socialMedias: SocialMediaModel[] = tattooMaker.socialMedias?.map(
      (socialMedia) => {
        return { id: randomUUID(), url: socialMedia.url };
      },
    );

    const dataTattoo: TattooMakerModel = {
      id: tattooMakerId,
      name: tattooMaker.name,
      nickname: tattooMaker.nickname,
      email: tattooMaker.email,
      phone: tattooMaker.phone,
      photoPath: tattooMaker.photoPath,
      description: tattooMaker.description,
    };

    return this.tattooMakerService.createTattooMaker(
      dataTattoo,
      address,
      socialMedias,
    );
  }
}
