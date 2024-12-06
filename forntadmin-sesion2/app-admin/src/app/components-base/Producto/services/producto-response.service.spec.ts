import { TestBed } from '@angular/core/testing';
import { ProductoResponseService } from './producto-response.service';



describe('CargoResponseService', () => {
  let service: ProductoResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
