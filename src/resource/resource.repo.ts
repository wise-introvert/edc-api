
import { Repository, EntityRepository } from 'typeorm';
import Resource from './resource.entity';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateResourceDTO, UpdateResourceDTO } from './dto';

@EntityRepository(Resource)
export default class ResourceRepo extends Repository<Resource> {
  /**
   * @param       id { optional, String } id of required resource
   * @param       q { optional, String } search query
   * @description get resources either using id, search query or get all resource
   */
  async get(id?: string, q?: string): Promise<Resource[] | Resource> {
    if (id) {
      const resource: Resource = await Resource.findOne(id);
      if (!resource) {
        throw new NotFoundException('Requested resource does not exits');
      }

      return resource;
    } else {
      const queryBuilder = Resource.createQueryBuilder();
      if (q) {
        const resources: Resource[] = await queryBuilder
          .where('name LIKE :q', { q: `%${q}%` })
          .getMany();
        return resources;
      } else {
        const resources: Resource[] = await Resource.find();
        return resources;
      }
    }
  }

  // create a resource
  async createResource(dto: CreateResourceDTO): Promise<Resource> {
    const resource: Resource = Resource.create({
      ...dto,
    });
    await resource.save();
    return resource;
  }

  // update a resource
  async updateResource(id: string, dto: UpdateResourceDTO): Promise<void> {
    const queryBuilder = Resource.createQueryBuilder();
    await queryBuilder
      .update()
      .set({ ...dto })
      .where('id = :id', { id })
      .execute();
  }

  // delete a resource
  async deleteResource(id: string): Promise<boolean> {
    try {
      await Resource.delete(id);
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
