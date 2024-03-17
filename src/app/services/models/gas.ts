import { GasTiers, Gas, GasEnergy } from "./models";
import { generateId } from "../utils/utils"

// Fill gas consumption with data
// The function takes a consumption value as input and returns the calculated gas usage
// the consumption value is the amount of gas used in a day
export function fillGas( consumption: number, gastier: GasTiers, gasenergy: GasEnergy) {
    let costDaily = gastier + gasenergy * consumption;
    let gas: Gas = {
        id: generateId(),
        timestamp: new Date(),
        totalCostDaily: costDaily,
        totalCostWeekly: costDaily * 7,
        totalCostMonthly: costDaily * 30,
        totalCostYearly: costDaily * 365
    }
    return gas;
}