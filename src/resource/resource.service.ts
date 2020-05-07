import { Injectable } from '@nestjs/common';
import ResourceRepo from './resource.repo';
import Resource from './resource.entity';
import { CreateResourceDTO, UpdateResourceDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import Member from 'src/member/member.entity';

@Injectable()
export class ResourceService {
  constructor(@InjectRepository(ResourceRepo) private repo: ResourceRepo) {}

  async get(id?: string, q?: string): Promise<Resource | Resource[]> {
    return this.repo.get(id, q);
  }

  async createResource(
    dto: CreateResourceDTO,
    member: Member,
  ): Promise<Resource> {
    return this.repo.createResource(dto, member);
  }

  async updateResource(
    id: string,
    dto: UpdateResourceDTO,
    member: Member,
  ): Promise<void> {
    return this.repo.updateResource(id, dto, member);
  }

  async deleteResource(id: string): Promise<boolean> {
    return this.repo.deleteResource(id);
  }
}
