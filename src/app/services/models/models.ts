
// generic models

// User model - id, name, email, password, createdAt
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

// Power models

// PowerNormal model - id, powerFloor, powerCost, energyCost
// For normalized power plans
export interface PowerNormal {
    id: string;
    powerFloor: 1.15 | 3.45 | 5.75 | 10.35 | 20.7
    powerCost: 0.1453 | 0.2459 | 0.3965 | 0.6107 | 1.2252
    energyCost: 0.1565
}
// PowerBi model - id, powerFloor, powerCost, energyCost
// For bi-power plans
export interface PowerBi {
    id: string;
    powerFloor: 3.45 | 5.75 | 10.35 | 20.7
    powerCost: 0.2459 | 0.3965 | 0.6107 | 1.2252
    energyCost: 0.027 | 0.1982
}

// TimeTable model - timestamps
// For user time table to calculate when the user is at home
export interface TimeTable {
    timestamps: string[];
}
// PowerTimeCount model - timeAtHomeLow, timeAtHomeHigh
// stores the time the user is at home
export interface PowerTimeCount {
    timeAtHomeLow: number;
    timeAtHomeHigh: number;
}
// Power model - id, timestamp, type, powerCost, energyCost, DailyUsage, WeeklyUsage, MonthlyUsage, YearlyUsage, timeAtHomeLowDay, timeAtHomeHighDay
// For storing calculated power usage
// Full power model with all the calculated values
export interface Power {
    id: string;
    timestamp: Date;
    type: boolean;
    powerCost: number; // in T
    energyCost: number;
    DailyUsage: number;
    WeeklyUsage: number;
    MonthlyUsage: number;
    YearlyUsage: number;
    timeAtHomeLowDay: number;
    timeAtHomeHighDay: number;
}

// Water models
// WaterTiers model - tier1, tier2, tier3, tier4
// For storing water tiers costs
// Each water tier is assotiated with a range of water volume
export enum WaterTiers {
  Tier1 = 0.35,
  Tier2 = 0.9284,
  Tier3 = 2.358,
  Tier4 = 4.4948,
}

export interface WaterUser {
    tier: WaterTiers,
    collectionUsageDailyCost: 0.71;
    fixedTaxDaily: 0.0376;
}
// Water model - id, timestamp, tierCost, mediumUsageDaily, mediumUsageWeekly, mediumUsageMonthly, mediumUsageYearly, totalCostDaily, totalCostWeekly, totalCostMonthly, totalCostYearly
// For storing calculated water usage
// Full water model with ,all the calculated values
export interface Water {
    id: string;
    timestamp: Date;
    totalCostDaily: number;
    totalCostWeekly: number;
    totalCostMonthly: number;
    totalCostYearly: number;
}

export enum GasTiers {
    tier1 = 0.074, // 1 people // consumption 112.23 kwh
    tier2 = 0.11, // 2-4 people  // consumption 336.68 kwh
    tier3 = 0.193, // 5-8 people // consumption 729.46 kwh
    tier4 = 0.20 // 9+ people // consumption 1010.03 kwh
}

export enum GasConsumption {
    tier1 = 0.42,
    tier2 = 1.21,
    tier3 = 2.59,
    tier4 = 3.55
}
export interface Gas {
    id: string;
    timestamp: Date;
    totalCostDaily: number;
    totalCostWeekly: number;
    totalCostMonthly: number;
    totalCostYearly: number;
    //mediumUsageDaily: 0.42;
    // tier* dias + Energy * consumption 
}
