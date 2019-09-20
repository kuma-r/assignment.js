class person{
    constructor(name,age,sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
    }
}
class student extends person{
    constructor(name,age,sex,stream,shift){
        super(name,age,sex);
        this.stream=stream;
        this.shift=shift;
    }
    display()
    {
        console.log(this.name,this.age,this.sex,this.stream,this.shift);
    }
    incAge()
    {
        this.age++;
    }
}
var std=new student("kumar",20,"male","backend","day");
std.incAge();
std.display(); 


