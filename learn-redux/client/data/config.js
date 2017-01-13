import Raven from 'raven-js';

const sentry_key = 'ae724ec399824273b810373f89fdd71d';
const sentry_app = '129130';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

// sentry information for error handling:::
// <script src="https://cdn.ravenjs.com/3.9.1/raven.min.js"
//    crossorigin="anonymous"></script>
// sentry_url = 'https://ae724ec399824273b810373f89fdd71d@sentry.io/129130'