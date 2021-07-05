import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../entitys/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = 'http://localhost:8081/api/orders';
  
  constructor(private httpClient : HttpClient) { }

  getOrderHistory(theEmail:string): Observable<GetResponseOrderHistory>{
      // build URL
      const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmail?email=${theEmail}`;
      return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}


interface GetResponseOrderHistory{
  _embedded: {
    orders:OrderHistory[];
  }
}