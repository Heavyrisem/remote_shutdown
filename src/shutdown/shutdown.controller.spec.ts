import { Test, TestingModule } from '@nestjs/testing';
import { ShutdownController } from './shutdown.controller';

describe('ShutdownController', () => {
  let controller: ShutdownController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShutdownController],
    }).compile();

    controller = module.get<ShutdownController>(ShutdownController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
