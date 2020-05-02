import { Repository, EntityRepository } from 'typeorm';
import Center from './center.entity';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateCenterDTO, UpdateCenterDTO } from './dto';

@EntityRepository(Center)
export default class CenterRepo extends Repository<Center> {
  /**
   * @param       id { optional, String } id of required center
   * @param       q { optional, String } search query
   * @description get centers either using id, search query or get all center
   */
  async getCenters(id?: string, q?: string): Promise<Center[] | Center> {
    if (id) {
      const center: Center = await Center.findOne(id);
      if (!center) {
        throw new NotFoundException('Requested center does not exits');
      }

      return center;
    } else {
      const queryBuilder = Center.createQueryBuilder();
      if (q) {
        const centers: Center[] = await queryBuilder
          .where('name LIKE :q', { q: `%${q}%` })
          .getMany();
        return centers;
      } else {
        const centers: Center[] = await Center.find();
        return centers;
      }
    }
  }

  // create a center
  async createCenter(dto: CreateCenterDTO): Promise<Center> {
    const center: Center = Center.create({
      ...dto,
    });
    await center.save();
    return center;
  }

  // update a center
  async updateCenter(id: string, dto: UpdateCenterDTO): Promise<void> {
    const queryBuilder = Center.createQueryBuilder();
    await queryBuilder
      .update()
      .set({ ...dto })
      .where('id = :id', { id })
      .execute();
  }

  // delete a center
  async deleteCenter(id: string): Promise<Boolean> {
    try {
      await Center.delete(id);
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
