
import {After, AfterStep} from '@cucumber/cucumber';
import fs from 'fs';
import logger from ./logger;

After(function (scenario){
    if(scenario.result.status === 'failed'){
        fs.writeFileSync(`./reports/${scenario.pickle.name}.txt`, JSON.stringify(this.response, null, 2));
    }
});

AfterStep(function (step) {
    logger.info(`step ${step.pickle.name} executed`);
});