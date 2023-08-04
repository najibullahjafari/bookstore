import PropTypes from 'prop-types';
import ActionButtons from './btns';

const BookItem = ({ book }) => (
  <div key={book.item_id}>
    <div>
      <p>{book.category}</p>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <div>
        <ActionButtons book={book} />
      </div>
    </div>
    <div>
      <div />
      <div>
        <div>91%</div>
        <div>completed</div>
      </div>
    </div>
    <div> </div>
    <div>
      <p>chapter</p>
      <p>Chapter 12</p>
      <button type="button">Update progress</button>
    </div>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
