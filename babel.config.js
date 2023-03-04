const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: 3,
      debug: true
    },
  ],
];

module.exports = {
  // This would fix node modules to be transpiled
  // only: [/^(?:.*\/node_modules\/(?:bootstrap.native)\/|(?!.*\/node_modules\/)).*$/],
  presets
};