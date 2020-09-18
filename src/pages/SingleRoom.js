import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';
import { RoomContext } from '../RoomContext';
import StyledHero from '../components/StyledHero';

export class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;
    console.log(defaultImg);
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
        </section>
      </>
    );
  }
}

export default SingleRoom;
