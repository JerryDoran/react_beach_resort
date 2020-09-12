import React, { Component } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';
import { RoomContext } from '../RoomContext';

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
    return (
      <div>
        <Hero>
          <Banner></Banner>
        </Hero>
      </div>
    );
  }
}

export default SingleRoom;
