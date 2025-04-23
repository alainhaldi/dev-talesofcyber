export const pathToTopic = 'topic_page.topics.topic_';
export const pathToTopicTitle = '.infos.bs_title_topic';
export const pathToTopicDescription = '.infos.bs_text_description';

export const getTopicTitle = (topicId: string): string => {
  return pathToTopic + topicId + pathToTopicTitle;
};

// Array used in home-page.component.ts, ids based on language.json file
export const hot_topics = [
  { jsonId: '1', urlId: 'passwords' },
  { jsonId: '2', urlId: 'testing' },
  { jsonId: '3', urlId: '333' },
  { jsonId: '4', urlId: '444' },
  { jsonId: '5', urlId: '555' },
];

export const topics = [
  {
    jsonId: '1',
    urlId: 'passwords',
    loadComponent: () =>
      import(
        './pages/topic-page/passwords/questions-passwords/questions-passwords.component'
      ).then((m) => m.QuestionsPasswordsComponent),
  },
  // {
  //   jsonId: '2',
  //   urlId: 'testing',
  //   loadComponent: () =>
  //     import(
  //       './pages/topic-page/passwords/story-passwords/story-passwords.component'
  //     ).then((m) => m.StoryPasswordsComponent),
  // },
  // weitere...
];
