import { of } from 'rxjs';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']),
    service = new MovieService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must return a movie', (done: DoneFn) => {

    const mockResultLogin = {
      "status": "Released"
    }

    httpClientSpy.get.and.returnValue(of(mockResultLogin))

    service.getLatestMovie().subscribe(
      result => {
        expect(result.status).toEqual("Released")
        done()
      }
    )
  })
});
