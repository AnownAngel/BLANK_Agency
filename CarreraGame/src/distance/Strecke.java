package distance;

import car.Car;

public class Strecke {
	 int range;
	 Car car;
	 
	 Strecke(int range, Car newCar){
		 this.car = newCar;
		 this.setRange(range);
	 }
	 
	 //setter
	 public void setRange(int newRange) {
		 this.range = newRange;
	 }
	 //public double calculateTankstops() {
	 //	 return 
	 //}
}
