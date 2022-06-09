import { of } from 'rxjs';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']),
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must return success for token', (done: DoneFn) => {

    const mockResultLogin = {
      "success": true
    }

    httpClientSpy.get.and.returnValue(of(mockResultLogin))

    service.getToken().subscribe(
      result => {
        expect(result.success).toEqual(true)
        done()
      }
    )
  })
});
