export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}
export interface token {
    id: string;
    fkid: string;
    value: string;
}
interface PowerConfig {
    id: string;

    DOTW: string;
    type: boolean; // bi-horario or simples
    powerFloor: number; //[1.15, 3.45, 5.75, 10.35, 20.7] <- normal  // [3.45, 5.75, 10.35, 20.7] <- bi-horario   W
    powerCost: number; // [0.1453, 0.2459, 0.3965, 0.6107, 1.2252] n // [0.2459,  0.3965, 0.6107, 1.2252] b     $
    energyCost: number; // 0.1565 noramal // 0.027 bi vazio // 0.1982 bi cheio
    
}


const linkedValuesMap: Map<number, number> = new Map([
    ['option1', 'valueA'],
    ['option2', 'valueB'],
    // Add more mappings for other options
  ]);

export interface Power {
    id: string;
    timestamp: Date;
    type: boolean; // bi-horario or simples
    powerCost: number;
    energyCost: number;
    DailyUsage: number; //(powerCost+ energyCost) * 24 // (powerCost + energyCost_vazio * hrs_vazio + energyCost_cheio) * 24
    WeeklyUsage: number; //daily usage * 7 
    MonthlyUsage: number; //daily usage * 30
    YearlyUsage: number; //daily usage * 365
    // powerOut: number; // arr[5] = {1.15, 3.45, 5.75, 10.35, 20.7}
    // powerCost: number; // arr[5] = {0.158, 0.158, 0.158, 0.158, 0.158}
    // energyCost: number; // arr[5] = {0.565
    // bipowerCost: number; // arr[5] = {0.158, 0.158, 0.158, 0.158, 0.158}
}
export interface Water {
    id: string;
    timestamp: Date;
    flag0: number;
    flag1: number;
    flag2: number;
    flag3: number;
    flag4: string;
}
export interface Gas {
    id: string;
    timestamp: Date;
    flag0: number;
    flag1: number;
    flag2: number;
    flag3: number;
    flag4: string;
}