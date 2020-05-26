export interface Knowledge {
    id:Number;
    name:String;
    level:Number;
    child_knowledge:Array<ChildKnowledge>;
    display_child:Boolean;
}

export interface ChildKnowledge {
    name:String;
    level:Number;
}

