import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  data = ['One', 'Two', 'Three', 'Four', 'Five']

  getMessage(){
    return ['One', 'Two', 'Three', 'Four', 'Five']
  }
}
