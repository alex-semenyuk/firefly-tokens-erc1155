import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EventStreamProxyGateway } from '../eventstream-proxy/eventstream-proxy.gateway';
import { TokensService } from './tokens.service';

describe('TokensService', () => {
  let service: TokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TokensService,
        {
          provide: HttpService,
          useValue: jest.fn(),
        },
        {
          provide: EventStreamProxyGateway,
          useValue: { addListener: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<TokensService>(TokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
