import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: false,
  header: true,
  source: true,
});

function loadStories () {
  require('../src/AnExample/AnExample.stories.jsx');
  require('../src/AnotherExample/AnotherExample.stories.jsx');
}

configure(loadStories, module);
