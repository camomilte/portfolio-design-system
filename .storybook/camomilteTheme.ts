import { create } from 'storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  fontBase: '"Raleway", sans-serif',

  colorPrimary: '#1840c4',
  colorSecondary: '#aeb9fe',

  appBg: '#fff9ef',
  appContentBg: '#fff9ef',
  appPreviewBg: '#fff9ef',
  appBorderColor: '#1840c4',
  appBorderRadius: 12,

  // Text colors
  textColor: '#1840c4',
  textInverseColor: '#fff9ef',

  // Toolbar default and active colors
  barTextColor: '#232533',
  barSelectedColor: '#1840c4',
  barHoverColor: '#1840c4',
  barBg: '#aeb9fe',
});
