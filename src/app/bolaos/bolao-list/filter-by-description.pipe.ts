import { Pipe, PipeTransform } from '@angular/core';
import { Bolao } from '../bolao/bolao';

@Pipe({name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform{

  transform(bolaos: Bolao[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();//mudar se der probelma o toLowerCase

    if(descriptionQuery){
      return bolaos.filter(bolao =>
        bolao.timeAId.nomeTime.toLowerCase().includes(descriptionQuery) || bolao.timeBId.nomeTime.toLowerCase().includes(descriptionQuery)
        );
    }else{
      return bolaos;
    }
  }

}
