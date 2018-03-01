package distance;

import car.Car;

public class Distance {
	//Attributes
	 double range;
	 Car car;
	 
	 
	 //Constructor(s)
	 public Distance(double range, Car newCar){
		 this.car = newCar;
		 this.setRange(range);
	 }
	 
	 
	 //Methods
	 
	 
	 //setter
	 public void setRange(double newRange) {
		 this.range = newRange;
	 }
		 
	 
	 //getter
	 public double getRange() {
		 return this.range;
	 }
	 
	 
	 //others
	 public double calculateTankstops() {
		 double stops = car.getTankvolume() - (car.getConsumption()*this.getRange());
		 if(stops<0) {
			 System.out.println("Dieser Betrag muss in Litern nachgetankt werden: "+ stops + "l!");
		 }
		 else{
			 System.out.println("Sie haben diesen Betrag noch als Tankfüllung übrig" + stops + "l!");
		 }
	 	 return stops;
	 }
}
