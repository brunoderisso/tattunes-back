import { PrismaService } from './../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SocialMediaService {
  constructor(private prisma: PrismaService) {}

  async getSocialMedias(tattooMakerId: string) {
    return this.prisma.socialMedia.findMany({
      where: {
        tattooMakerId,
      },
    });
  }
}
