import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class QuickActionSample extends LightningElement {

  //add any code required to be executed 
    closeAction(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}
