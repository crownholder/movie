//Here we are defining a new method called getAstraClient that
// uses the createClient method from our astrajs library to 
//create a connection to our database. We then provide 
//it the needed database credentials we added to our 
//environment varaiables earlier;

import { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
    if (astraClient === null) {
        astraClient = await createClient(
            {
                astraDatabaseId: process.env.ASTRA_BD_ID,
                astraDatabaseRegion: process.env.ASTRA_DB_REGION,
                applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
            },
            30000
        );
    }
    return astraClient;
};

//
