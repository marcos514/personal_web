import { Knowledge } from './knowledge'

export interface Project {
    id:Number;
    name:String;
    date_finished:String;
    date_started:String;
    description:String;
    status:String;
    percentage_done:Number;
    knowledges:Array<Knowledge>;
}
