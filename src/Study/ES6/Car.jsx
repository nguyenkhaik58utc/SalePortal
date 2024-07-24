class Car{
    constructor(name){
        this.brand = name;
    }
}
debugger;
const car = new Car("BMW");
function ViewCar(){
    return(
        <div>
            {car.brand}
        </div>
    )
}
export default ViewCar;