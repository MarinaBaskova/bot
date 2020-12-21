import React from 'react';
import { render } from '@testing-library/react';
import ChatContainer from './ChatContainer';

it('it should have chat screen', () => {
  // arrange
  const { getAllByTestId } = render(<ChatContainer />);
  // act
  const chatScreen = getAllByTestId(/chat-screen/i);
  // assert
  expect(chatScreen).toHaveLength(1);
});
//  Todo: work on testing react hooks (use ref) to test scroll function. Right now test will fail for this component, need to bring scroll function with ref and useEffect hook.
