module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type validation
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
        'build',
        'revert',
      ],
    ],

    // Scope validation for Windifi Frontend
    'scope-enum': [
      2,
      'always',
      [
        'auth',
        'ui',
        'api',
        'components',
        'pages',
        'hooks',
        'utils',
        'types',
        'deps',
        'config',
        'docs',
        'ci',
        'build',
        'test',
      ],
    ],

    // Description length
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100],

    // Body formatting
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],

    // Footer formatting
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],

    // Breaking changes are handled automatically by the conventional config

    // Type case
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],

    // Scope case
    'scope-case': [2, 'always', 'lower-case'],

    // Header formatting
    'header-max-length': [2, 'always', 100],
  },
};
