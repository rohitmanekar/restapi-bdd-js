// cucumber.js
export default {
  default: `--require src/step_definitions/**/*.js --require features/**/*.feature --require src/support/hooks.js --require src/support/world.js --require json:./reports/cucumber_report.json --require node_modules/mochawesome`
};

