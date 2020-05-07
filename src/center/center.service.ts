import { Injectable } from '@nestjs/common';
import CenterRepo from './center.repo';
import Center from './center.entity';
import { CreateCenterDTO, UpdateCenterDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CenterService {
  constructor(@InjectRepository(CenterRepo) private repo: CenterRepo) {}

  async get(id?: string, q?: string): Promise<Center | Center[]> {
    return this.repo.get(id, q);
  }

  async createCenter(dto: CreateCenterDTO): Promise<Center> {
    return this.repo.createCenter(dto);
  }

  async updateCenter(id: string, dto: UpdateCenterDTO): Promise<void> {
    return this.repo.updateCenter(id, dto);
  }

  async deleteCenter(id: string): Promise<Boolean> {
    return this.repo.deleteCenter(id);
  }
}
