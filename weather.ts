import { fetchLocationData } from "./location";
import type { LocationInfo } from "./location";
 
const GEOCODE_API_URL = "https://geocode.maps.co/search";

async function main(): Promise<number> {
    console.log(process.argv);
    //pnpm run weather LOCATION
    if(process.argv.length !== 3) {
        console.log("Command to run app --> weather LOCATION")
        return 1;
    }
    // get location
    const location = process.argv[2];
    // convert to lat/long
    let locationInfo: LocationInfo;
    try {
        locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
    } catch (error) {
        console.error(error);
        return 1;
    }
    console.log(locationInfo);
    // fetch weather data
    // display weather data
    
    return await Promise.resolve(0);
}

main().catch((err) => console.log(err));