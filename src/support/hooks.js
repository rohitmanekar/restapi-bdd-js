
import { After, AfterStep } from '@cucumber/cucumber';
import fs from 'fs';
import logger from './logger';
import path from 'path';

After(function (scenario) {
    if (scenario.result?.status === 'failed') {
        console.log('After hook - Logging response:', this.response); // Log response

        const logDir = 'reports';
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir); // Create reports directory if it doesn't exist
        }

        const fileName = `${scenario.pickle.name.replace(/ /g, '_')}.json`;
        const filePath = path.join(logDir, fileName);

        try {
            // Save the response (or request) details in a JSON file
            fs.writeFileSync(filePath, JSON.stringify(this.response || {}, null, 2));
        } catch (error) {
            console.error('Failed to write log file:', error);
            logger.error(`Failed to write log file: ${error.message}`);
        }

        // Log the failure
        logger.error(`Scenario failed: ${scenario.pickle.name}`);
        console.error(`Scenario failed: ${scenario.pickle.name}`);
    }
});

AfterStep(function (step) {
    logger.info(`step ${step.pickle.name} executed`);
});