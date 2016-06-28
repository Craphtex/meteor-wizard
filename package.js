Package.describe({
  name: 'craphtex:autoform-wizard',
  summary: 'A multi step form component for AutoForm (based on the work of forwarder).',
  version: '0.9.1',
  git: 'https://github.com/craphtex/meteor-wizard.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'underscore',
    'tracker',
    'reactive-var',
    'templating',
    'blaze',
    'session',
    'ejson',
    'localstorage'
  ], 'client');

  api.use('aldeed:autoform@5.7.0', 'client');

  api.addFiles([
    'wizard.html',
    'wizard.js',
    'router.js',
    'cache.js'
  ], 'client');

  api.export('Wizard', 'client');
});
