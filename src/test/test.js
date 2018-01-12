
var appContext = require.context('/', true, /\.spec\.ts/); // Assuming test case files ends with spec.ts
appContext.keys().forEach(appContext);

