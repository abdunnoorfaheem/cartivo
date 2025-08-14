import React from 'react';
import Container from '../Container';
import {Link} from 'react-router-dom';
import Image from '../Image';
import ErrorGif from '/src/assets/error.gif';

const Error = () => {
  return (
    <>
      <Container>
        <Link to={"/"}>
        <Image imgSrc={ErrorGif}/>
        </Link>
      </Container>
    </>
  )
}

export default Error
