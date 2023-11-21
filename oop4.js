//classical inheritance
class Parent{
    show(){
        console.log("This is an example of inheritance");
    }
}

class Child extends Parent{

}


// object
const ch = new Child()
ch.show()