import { Component, Input } from '@angular/core';

@Component({
  selector: 'pb-vmessage',
  templateUrl: './vmessage.component.html'
})

export class VMessageComponent{

  @Input() text = ''
}
