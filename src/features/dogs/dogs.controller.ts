import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'

import { DogEntity } from './dog.entity'
import { DogsService } from './dogs.service'

@Crud({
  model: {
    type: DogEntity,
  },
})
@Controller('dogs')
export class DogsController implements CrudController<DogEntity> {
  constructor(public service: DogsService) {}
}