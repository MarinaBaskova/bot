import React from 'react';
import { render } from '@testing-library/react';
import ChatMessages from './ChatMessages';

const chatMessagesData = {
  user: ['Web', 'React', 'Beginner'],
  bot: [
    'What course are you taking?',
    'What subject do you need resourse?',
    'What is your expertise level?',
  ],
};
test('renders list of chat messages', () => {
  // arrange
  const { rerender, getAllByTestId, queryAllByTestId } = render(
    <ChatMessages
      chatMessages={{
        user: [],
        bot: [],
      }}
    />
  );
  const startMessages = queryAllByTestId(/messages/i);
  expect(startMessages).toHaveLength(1);
  // act
  rerender(<ChatMessages chatMessages={chatMessagesData} />);
  const messages = getAllByTestId(/messages/i);
  // assert
  expect(messages).toHaveLength(3);
});
