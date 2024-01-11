class Animal{

    constructor(name,legCount){
        this.name=name;
        this.legCount=legCount;
    }

    describe(){
        console.log("Hi I am a "+ this.name + " and I have " + this.legCount + "legs.")
    }
}


let dog=new Animal("bob",4);
dog.describe()