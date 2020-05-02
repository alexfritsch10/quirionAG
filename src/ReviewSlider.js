import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import Review from './Review';


class ReviewSlider extends Component {

  render() {
    const reviews = [
                      {
                        title: 'Wunderbar!',
                        content: 'In 7 Monaten 10 % Rendite - wo kriege ich das? Bin super zufrieden!',
                        meta: 'Anita, Stuttgart'
                      },
                      {
                        title: 'Super, gerne wieder!',
                        content: 'Guter Service, richtige Entscheidung hier zu investieren!',
                        meta: 'Alex, Berlin'
                      },
                      {
                        title: 'Toller Service!',
                        content: 'Anmeldung dauert nur wenige Minuten, danach muss man sich um nichts mehr kümmern.',
                        meta: 'Siegfried, Onsabrück'
                      },
                      {
                        title: 'Guter Kundenservice!',
                        content: 'Perfekter Service & Kundendienst! Gebühren sind ok!',
                        meta: 'Sven, Hamburg'
                      },
                      {
                        title: 'Gut!',
                        content: 'Alles reibungslos bislang',
                        meta: 'Anja, Lüneburg'
                      }
                    ];

    return(
      <Slider autoplay={4000}>
          {reviews.map((review, index) => <div key={index}>
            <Review title= {review.title} content={review.content} meta={review.meta}/>
          </div>)}
      </Slider>
    );
  }


}


export default ReviewSlider;
