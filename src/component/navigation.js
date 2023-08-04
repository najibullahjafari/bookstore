import List from './listbook';
import Form from './bookform';

function Books() {
  return (
    <>
      <div className="bookList">
        <List />
      </div>
      <div className="Line" />
      <Form />
    </>
  );
}

export default Books;
