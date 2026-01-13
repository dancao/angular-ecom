import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
//import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';

import { Home } from './home';
import { Header } from '../../shared/header/header';
import { MyService } from '../../services/app.service';
import { of } from 'rxjs';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let httpTesting: HttpTestingController;
  let products: any[] = [];

  beforeEach(async () => {
    const testProduct = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"]
    };
    products = [testProduct];

    await TestBed.configureTestingModule({
      imports: [Home, Header, FormsModule],
      providers: [
        { 
          provide: MyService, 
          useValue: { 
            getProducts: () => of(products),
            getCartItems: () => of([]),
          }}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();

    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
