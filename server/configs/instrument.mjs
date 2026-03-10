import * as Sentry from "@sentry/node"

Sentry.init({
    dsn: "https://236c8498f98e6d370fdc0961ef207ae1@o4511022606909440.ingest.us.sentry.io/4511022617919488",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});