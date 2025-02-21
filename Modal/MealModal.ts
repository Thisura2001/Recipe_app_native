export default class Meal{
    name:string;
    area:string;
    instructions:string;
    image:string;
    source:string;

    constructor(name:string,area:string,instructions:string,image:string,source:string) {
        this.name = name;
        this.area = area;
        this.instructions = instructions;
        this.image = image;
        this.source = source;
    }
}