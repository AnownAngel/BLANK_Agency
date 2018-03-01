class Car {

	//Attributes
	public brandArray: string[] = [ "Opel", "Ferrari", "Porsche", "BMW" ];
	private brand: string;
	private consumption: number;
	private tankvolume: number;
	liter: number;
	km: number;

	
	//Constructor(s)
	public constructor(brand: string, consumption: number, tankvolume: number ){
        this.setBrand(brand);
		this.setConsumption(consumption);
		this.setTankvolume(tankvolume);
	}
	//Methods
	
	
	//setter
	public setBrand (newBrand: string): void {
		this.brand = newBrand;
	}
	public vsetLiter(newLiter: number): void {
		this.liter = newLiter;
	}
	public setKm(newKm: number): void {
		this.km = newKm;
	}
	public setConsumption(newConsumption: number): void {
		this.consumption = newConsumption;
	}
	public setTankvolume(newTankvolume: number): void {
		this.tankvolume = newTankvolume;
	}
		
	
	//getter
		public getBrand(): string {
		return this.brand;
	}
	public getLiter(): number {
		return this.liter;
	}
	public getKm(): number {
		return this.km;
	}
	public getConsumption(): number {
		return this.consumption;
	}
	public getTankvolume(): number {
		return this.tankvolume;
	}
	public getAllBrands(): string {
		for (let s of this.brandArray) {           
			//Do your stuff here
			console.log(s + " ");
		}
		return this.brandArray.toString();
	}
	
		
	//others
	public calculateConsumption(liter: number, km: number): number {
		return this.getLiter()/this.getKm();
	}
	

}
