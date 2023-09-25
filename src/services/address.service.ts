import { PrismaService } from './../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async getAddress(tattooMakerId: string) {
    return this.prisma.address.findUnique({
      where: {
        tattooMakerId,
      },
    });
  }
}
