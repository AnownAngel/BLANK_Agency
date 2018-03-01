package main;
//import java.util.Locale;
import java.util.Scanner;

import car.Car;
import distance.Distance;
public class Carrera {
	

	public static void main(String[] args) {
		

		Car newCar = new Car("", 0, 0);
		Distance newDistance = new Distance(0, newCar);

		

		//Scanner scanner = new Scanner(System.in).useLocale(Locale.US); with 'Locale'
		Scanner reader = new Scanner(System.in);  // Reading from System.in
		
		
		
		newCar.setTankvolume(100);
		System.out.println("Dies ist ein einfaches Spiel!");
		System.out.println("Wählen Sie eines dieser Autos aus: ");
		newCar.getAllBrands();
		System.out.println();
		String brand = reader.next(); // Scans the next token of the input as an string.
		newCar.setBrand(brand);
		System.out.println();
		
		
		
		System.out.println("Geben Sie bitte Ihren Verbrauch"
				+ " in Litern pro Kilometer an! Liter: ");
		double l = reader.nextInt(); // Scans the next token of the input as an int.
		newCar.setLiter(l);

		System.out.println("Kilometer: ");
		double km = reader.nextInt();
		newCar.setKm(km);
		
		
		
		//Calculate consumption and set it
		double consumption = newCar.calculateConsumption(l, km);
		newCar.setConsumption(consumption);
		

		
		//Remaining Output
		System.out.println("Ihre Automarke lautet "+ newCar.getBrand() + 
				" und ihr Verbrauch ist "+ newCar.getConsumption() + "l/km!");
		System.out.println("Geben Sie nun eine beliebige Strecke in km an: ");
		double range = reader.nextDouble();
		newDistance.setRange(range);
		System.out.println("Es wird nun berechnet, wie viel Sprit bei Ihrem gewählten Verbrauch ");
		System.out.println("& Ihrer gewählten Strecke in km "
				+ "voraussichtlich übrigbleiben wird oder wieviel zwischenzeitlich nachgetankt werden müsste: ");
		newDistance.calculateTankstops();
		
		//once finished
		reader.close(); 
		
	}

}
