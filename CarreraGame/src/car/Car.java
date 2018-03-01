package car;

import java.util.Arrays;

public class Car {

	//Attributes
	String[] brandArray = { "Opel", "Ferrari", "Porsche", "BMW" };
	String brand;
	private double consumption;
	private double tankvolume;
	double liter;
	double km;

	
	//Constructor(s)
	public Car(String brand, double consumption, double tankvolume ){
		this.setConsumption(consumption);
		this.setTankvolume(tankvolume);
	}
	//Methods
	
	
	//setter
	public void setBrand(String newBrand) {
		this.brand = newBrand;
	}
	public void setLiter(double newLiter) {
		this.liter = newLiter;
	}
	public void setKm(double newKm) {
		this.km = newKm;
	}
	public void setConsumption(double newConsumption) {
		this.consumption = newConsumption;
	}
	public void setTankvolume(double newTankvolume) {
		this.tankvolume = newTankvolume;
	}
		
	
	//getter
		public String getBrand() {
		return this.brand;
	}
	public double getLiter() {
		return this.liter;
	}
	public double getKm() {
		return this.km;
	}
	public double getConsumption() {
		return this.consumption;
	}
	public double getTankvolume() {
		return this.tankvolume;
	}
	public String getAllBrands() {
		for (String s: this.brandArray) {           
			//Do your stuff here
			System.out.print(s + " ");
		}
		return this.brandArray.toString();
	}
	
		
	//others
	public double calculateConsumption(double liter, double km) {
		return this.getLiter()/this.getKm();
	}
	


}
