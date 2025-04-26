// Topics
export const hot_topics = [
  { topicId: '1', urlId: 'passwords' },
  { topicId: '2', urlId: 'fake-call' },
  { topicId: '3', urlId: 'sextorsion' },
  { topicId: '4', urlId: 'romance-scam' },
  { topicId: '5', urlId: 'phishing' },
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
  { topicId: '4', urlId: 'romance-scam' },
  { topicId: '5', urlId: 'phishing' },
];

// Paths for JSON files
export const pathToTopic = 'topic_page.topics.topic_';

export const getTopicTitle = (topicId: string): string =>
  `${pathToTopic}${topicId}.infos.bs_title_topic`;

export const getTopicDescription = (topicId: string): string =>
  `${pathToTopic}${topicId}.infos.bs_text_description`;

export const getQuestion = (topicId: string, questionId: string): string =>
  `${pathToTopic}${topicId}.questions.question_${questionId}.bs_heading_question`;

export const getAnswer = (topicId: string, questionId: string): string =>
  `${pathToTopic}${topicId}.questions.question_${questionId}.answer`;
