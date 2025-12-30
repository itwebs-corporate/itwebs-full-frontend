export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'style',
        'refactor',
        'revert',
        'ci',
        'test',
        'storybook',
        'br-change',
      ],
    ],
  },
};
