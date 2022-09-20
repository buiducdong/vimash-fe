import { customer } from 'src/app/layout/models/customer.model';
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MetaModel {
  code: string;
  field: string | null;
  message: string;
}

export interface DataModel {
  length: number,
  currentPage: number,
  noRecordInPage: number,
  results: object[],
  totalPage: number,
  totalRecords: number,
  countRecords: number,
}

export interface HttpClienRequest {
  page: number;
  size: number;
}
export interface HttpClienRequest {
  page: number;
  size: number;
}




export class DataSearchModel implements DataModel {
  public constructor(
    public length: number = 0,
    public currentPage: number = 0,
    public noRecordInPage: number = 0,
    public results: object[] = [],
    public totalPage: number = 0,
    public totalRecords: number = 0,
    public countRecords: number = 0
  ) { }
}
