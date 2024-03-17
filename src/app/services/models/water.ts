import { WaterTiers, WaterUser, Water } from "./models";
import { generateId } from "../utils/utils"
let waterUsr: WaterUser = {
    tier: WaterTiers.Tier3,
    collectionUsageDailyCost: 0.71,
    fixedTaxDaily: 0.0376
}

export function fillWater( wateruser: WaterUser, watertiers: WaterTiers) {
    let costDaily = wateruser.fixedTaxDaily + wateruser.collectionUsageDailyCost + watertiers;
    let water: Water = {
        id: generateId(),
        timestamp: new Date(),
        totalCostDaily: costDaily,
        totalCostWeekly: costDaily * 7,
        totalCostMonthly: costDaily * 30,
        totalCostYearly: costDaily * 365
    }
    return water;
}