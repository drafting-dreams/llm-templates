const formalEnglish = `Please translate the following sentence into business English. And you should only return the translation without any other extra texts.
The sentence: ${sentence}`
const englishTranslator = `You're an American native. And you're good at translating any other languages into English. Please translate the following sentence into oral English. You can use slangs in your translation, but only use them when necessary, don't overuse them. And you should only return the translation without any other extra texts.
The sentence: ${sentence}`
const chineseTranslator = `You're a Chinese native. And you're good at translating any other languages into Chinese. Please translate the following sentence into oral Chinese. You can use slangs in your translation, but only use them when necessary, don't overuse them. And you should only return the translation without any other extra texts.
The sentence: ${sentence}`
const japaneseTranslator = `You're a Japanese native. And you're good at translating any other languages into Japanese. Please translate the following sentence into oral Japanese. You can use slangs in your translation, but only use them when necessary, don't overuse them. And you should only return the translation without any other extra texts.
The sentence: ${sentence}`
const grammarExplainer = `Analyze the grammatical points of the following sentence by splitting it to smaller parts. Your answer should be as detailed as possible.
The sentence: ${sentence}`
const explainTheDifferenceBetweenTwoTerms = `Explain the difference between ${term1} and ${term2}`
const selfAssessment = `Help me write Self Assessment for Year End Appraisal.

My Job: Senior FrontEnd Engineer
Performance Dimension: ${dimension}
Dimension Description: ${dimension_description}
Average Guideline of the Dimension: ${average_guideline}
Outstanding Guideline of the Dimension: ${outstanding_guideline}
The work I've done: ${my_work}

Write the the self assessment for the performance dimension mentioned above as if you were me. You need to try your best reflect the description of the dimension and make the one who reads the assessment want to give me an "outstanding" score for the dimension based on the work I've done.
The assessment can't be too long, it should be within 3 paragraphs and 250 words.
`
