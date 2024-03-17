import {TimeTable, PowerBi, PowerNormal, Power, PowerTimeCount} from './models'
import { generateId } from "../utils/utils"


// Default user and timetable data
let defaultUser: PowerBi = {
    id: '1',
    powerFloor: 5.75,
    powerCost: 0.6107,
    energyCost: 0.1982
}
// let defaultUserTimeTable: TimeTable = {
//     timestamps: [
//         "2024-16-03 06:30",
//         "2024-16-03 17:00",
//         "2024-16-03 19:00",
//         "2024-16-03 22:00"
//     ]
// }



// Calculate the power usage and time at home
// The function takes a timetable and a user configuration as input
// and returns the calculated power usage and time at home
export function filPower(timetable: TimeTable, config: PowerNormal | PowerBi,): { power: Power, powerTimeCount: PowerTimeCount } {
    let ptc = calculateTimeAtHome(timetable.timestamps);
    let dailyCost = ptc.timeAtHomeHigh * (config.powerCost + config.energyCost) + ptc.timeAtHomeLow * (config.powerCost);

    return {
        power: {
        id: generateId(),
            timestamp: new Date(),
            type: false,
            powerCost: config.powerCost,
            energyCost: config.energyCost,
            DailyUsage: dailyCost,
            WeeklyUsage: dailyCost * 7,
            MonthlyUsage: dailyCost * 30,
            YearlyUsage: dailyCost * 365,
            timeAtHomeLowDay: ptc.timeAtHomeLow,
            timeAtHomeHighDay: ptc.timeAtHomeHigh
        },
        powerTimeCount: ptc   
    }
}
// calculateTimeAtHome betwen two timestamps//temp between midnight and 7am
// it assumes the first timestamp is an exit and the second is an entry recursively
function calculateTimeAtHome(timetable: string[], startTime: string = "07:00:00", endTime: string = "23:59:59"): PowerTimeCount {
      // Validate input
    if (!Array.isArray(timetable) || timetable.length < 2 || timetable.length > 4) {
        throw new Error("Invalid timestamps. Please provide 2 to 4 timestamps.");
    }
    timetable.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    let totalTimeAtHome = 0;
    for (let i = 0; i < timetable.length - 1; i += 2) {
        const exitTime = new Date(timetable[i]);
        const entryTime = new Date(timetable[i + 1]);
    
        // Clip exit and entry times to the desired time range
        const clippedExitTime = Math.max(new Date(`2024-03-16T${startTime}Z`).getTime(), exitTime.getTime());
        const clippedEntryTime = Math.min(new Date(`2024-03-16T${endTime}Z`).getTime(), entryTime.getTime());

        // Calculate the time at home
        totalTimeAtHome += clippedEntryTime - clippedExitTime;
    }
    let totalTimeAtHomeHours = 0;
    if (totalTimeAtHome > 0) {
        totalTimeAtHomeHours = Math.floor(totalTimeAtHome / (1000 * 60 * 60));
    }
    return {
        timeAtHomeLow: 24 - totalTimeAtHomeHours,
        timeAtHomeHigh: totalTimeAtHomeHours
    };
}
