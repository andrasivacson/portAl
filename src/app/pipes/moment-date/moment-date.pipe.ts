import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';
import * as Moment from 'moment';

@Pipe({ name: 'momentDate' })
@Injectable()
export class MomentDate implements PipeTransform {
  transform(value: Date): number {
    return (<any>Moment)(value).fromNow();
  }
}
