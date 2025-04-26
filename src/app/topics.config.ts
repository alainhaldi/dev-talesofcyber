// Paths for JSON files
export const pathToTopic = 'topic_page.topics.topic_';
export const pathToTopicTitle = '.infos.bs_title_topic';
export const pathToTopicDescription = '.infos.bs_text_description';
export const getTopicTitle = (topicId: string): string => {
  return pathToTopic + topicId + pathToTopicTitle;
};
export const getQuestion = (topicId: string, questionId: string): string => {
  return (
    pathToTopic +
    topicId +
    '.questions.question_' +
    questionId +
    '.bs_heading_question'
  );
};
export const getAnswer = (topicId: string, questionId: string): string =>
  `${pathToTopic}${topicId}.questions.question_${questionId}.answer`;

// Topics
export const hot_topics = [
  { topicId: '1', urlId: 'passwords' },
  { topicId: '2', urlId: 'fake-call' },
  { topicId: '3', urlId: 'sextorsion' },
  { topicId: '4', urlId: '444' },
  { topicId: '5', urlId: '555' },
];

export const topics = [
  {
    topicId: '1',
    urlId: 'passwords',
  },
  {
    topicId: '2',
    urlId: 'fake-call',
  },
  {
    topicId: '3',
    urlId: 'sextorsion',
  },
];
