module.exports = (function () {
    const client = require('prom-client');
    const collectDefaultMetrics = client.collectDefaultMetrics;
    const Registry = client.Registry;
    const registry = new Registry();
    collectDefaultMetrics({ register: registry });

    const commandsCounter = new client.Counter({
        name: "supibot_command_executions_total",
        help: "The total number of command executions.",
        labelNames: ["name"]
    });
    registry.registerMetric(commandsCounter);

    return {
        registry,
        commandsCounter
    };
})();
