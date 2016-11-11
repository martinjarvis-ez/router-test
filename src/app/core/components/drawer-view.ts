import {Subject} from 'rxjs/Subject';
export class DrawerView {
  readyToDisplay = new Subject<boolean>();
  readyToClose = new Subject<boolean>();

  show() {
    this.readyToDisplay.next(true);
  }

  close(){
    this.readyToClose.next(true);
  }

}
