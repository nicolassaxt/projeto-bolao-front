import { Time } from './time';
export interface Bolao{
  id:number,
  dataPartida:Date,
  timeAId: Time,
  timeBId: Time,
  status: string,
  imgUrlPartida:string
}
