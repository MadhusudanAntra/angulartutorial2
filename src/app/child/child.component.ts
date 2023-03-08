import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input()
fn:string=""

@Input()
ln:string=""

@Output()
emitFullName:EventEmitter<string> = new EventEmitter();
sendFullName()
{
  this.emitFullName.emit(this.fn+" "+this.ln)
}

}
