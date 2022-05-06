function App() {
  const title = 'My App';
  const hello = 'Hello';
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ];
  const showComments = true;
  const commentsBlock = (
    <ul>
      {comments.map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>{title}</h1>
      <p className='name-class'>{hello}</p>

      <h3>Comments({comments.length})</h3>
      {showComments && commentsBlock}
    </div>
  );
}
export default App;
