import { Knowledge } from './knowledge'

export interface Proyect {
    name:String;
    date_finished:String;
    date_started:String;
    description:String;
    knowledges:Array<Knowledge>
}
