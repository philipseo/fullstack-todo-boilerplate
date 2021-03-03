module.exports = {
  '**/*.ts': (filenames) => [
    'yarn check-types',
    `yarn check-format ${filenames.join(' ')}`,
    `yarn lint ${filenames.join(' ')}`,
  ],
};
