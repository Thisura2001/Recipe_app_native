export default class Meal{
    id:number;
    name:string;
    area:string;
    instructions:string;
    image:string;
    source:string;

    constructor(id:number,name:string,area:string,instructions:string,image:string,source:string) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.instructions = instructions;
        this.image = image;
        this.source = source;
    }
}