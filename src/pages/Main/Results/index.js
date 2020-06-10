import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StartRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Cover, Wrapper, Info, ActionButtons } from './styles';

import { getBook } from '../../../services/books';

function Results({ isbn }) {
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };

    loadBook();
  }, [isbn]);

  return (
    <Container>
      {book && (
        <Link to={`book-details/${isbn}`}>
          <Wrapper>
            <Cover src="https://images-na.ssl-images-amazon.com/images/I/91+g2wQ33uL.jpg" />
            <Info>
              <h4 className="name">{book.name}</h4>
              <div className="book-rating">
                <StartRatings
                  rating={book.rating}
                  starRatedColor="#f1c40f"
                  starDimension="18"
                  starSpacing="0"
                />{' '}
                ({book.rating})
              </div>

              <div className="price">
                <span className="discount">R${book.price}</span> por{' '}
                <span>R${book.promotionalPrice}</span>
              </div>
            </Info>
            <ActionButtons>
              <span className="button">
                <MdArrowForward size={32} color="#fff" />
              </span>
            </ActionButtons>
          </Wrapper>
        </Link>
      )}
    </Container>
  );
}

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
