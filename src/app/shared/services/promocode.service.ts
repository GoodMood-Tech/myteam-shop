import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseUrl, setOptions } from '../helper';

@Injectable()
export class PromocodeService {
  constructor(private http: Http) {
  }

  public create(id: string, isNewUser: boolean, orderCount?: number) {
    return this.http.post(`${baseUrl}promocode/${id}`,
      { isNewUser, orderCount }, setOptions())
      .map((response) => response.json());
  }

  public get(id: string) {
    return this.http.get(`${baseUrl}promocode/${id}`, setOptions())
      .map((response) => response.json());
  }

  public check(id: string, promocode: string) {
    return this.http.put(`${baseUrl}promocode/${id}`, { promocode }, setOptions())
      .map((response) => response.json());
  }

  public remove(id: string) {
    return this.http.delete(`${baseUrl}promocode/${id}`, setOptions())
      .map((response) => response.json());
  }
}
