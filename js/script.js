//create a list of message - Add some manual messages
messages = ['You\'re braver than you believe, and stronger than you seem, and smarter than you think.',
            'Keep your face to the sunshine and you cannot see a shadow.',
            'The only time you fail is when you fall down and stay down.',
            'Positive anything is better than negative nothing.',
            'Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.']

//find a API with good messages - v2

const newPositionMessage = Math.floor(Math.random() * messages.length);

const newMessage = () => {
  return messages[newPositionMessage];
};


console.log(messages[newPositionMessage]);

