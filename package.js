Package.describe({
  name: 'clinical:json2json',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "node-json2json": "0.0.3"
});

Package.onUse( function (api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('json2json.js', 'server');
  api.export('json2json');
});

Package.onTest( function (api) {
  api.use('tinytest');
  api.use('clinical:json2json');
  api.addFiles('json2json-tests.js');
});
