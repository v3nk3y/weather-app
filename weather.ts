const GEOCODE_API_URL = "htpps://geocode.maps.co/search";

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
    // fetch weather data
    // display weather data
    
    return await Promise.resolve(0);
}

main().catch((err) => console.log(err));