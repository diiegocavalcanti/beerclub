import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProvidersFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersFirebaseProvider {

  public basePath = '/beerclub';

  constructor(public db: AngularFireDatabase) {

  }

  getShares(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

}
