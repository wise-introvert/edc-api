import { Repository, EntityRepository } from 'typeorm';
import Resource from './resource.entity';
import {
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { CreateResourceDTO, UpdateResourceDTO } from './dto';
import Member from 'src/member/member.entity';
import { deepRemove } from '../common/util';

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

      deepRemove(resource);
      return resource;
    } else {
      const queryBuilder = Resource.createQueryBuilder();
      if (q) {
        const resources: Resource[] = await queryBuilder
          .where('name LIKE :q', { q: `%${q}%` })
          .getMany();
        deepRemove(resources);
        return resources;
      } else {
        const resources: Resource[] = await Resource.find();
        if (resources) {
          deepRemove(resources);
          return resources;
        } else {
          return [];
        }
      }
    }
  }

  // create a resource
  async createResource(
    dto: CreateResourceDTO,
    member: Member,
  ): Promise<Resource> {
    const existing: Resource[] = await Resource.find({
      where: { displayId: dto.displayId },
    });
    if (existing.length) {
      throw new ConflictException(`Duplicate Display ID`);
    }

    const resource: Resource = Resource.create({
      ...dto,
      center: member.center,
      createdBy: member,
    });

    await resource.save();
    deepRemove(resource);
    return resource;
  }

  // update a resource
  async updateResource(
    id: string,
    dto: UpdateResourceDTO,
    member: Member,
  ): Promise<void> {
    const queryBuilder = Resource.createQueryBuilder();
    await queryBuilder
      .update()
      .set({ ...dto, updatedBy: member })
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
