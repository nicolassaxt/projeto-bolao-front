import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl){

  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){ //So pode começar com letra minuscula e sem Numeros e sem espaço em branco
    return {lowerCase: true}
  }
  return null;
}
