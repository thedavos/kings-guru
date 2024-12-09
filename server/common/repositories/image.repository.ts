import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { logger } from 'server/common/decorators/logger.decorator';
import { BaseRepository } from 'server/common/repositories/base.repository';
import type { Image } from 'server/database/schemas/images.schema';

@logger('image.repository')
@injectable()
export class ImageRepository extends BaseRepository<Image> {}
