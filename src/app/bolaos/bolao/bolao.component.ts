import { Component, Input } from '@angular/core';

@Component({
  selector: 'pb-bolao',
  templateUrl: 'bolao.component.html'
})
export class BolaoComponent{
    @Input() description = '';
    @Input() url = '';
}
