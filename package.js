Package.describe({
  name: 'krabbi:unslider',
  version: '2.0.3',
  // Brief, one-line summary of the package.
  summary: 'The simplest little slider.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/krabbi/meteor-unslider.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
      'unslider/dist/js/unslider-min.js',
      'unslider/dist/css/unslider.css',
      'unslider/dist/css/unslider-dots.css'
    ], 'client'
  );
});
