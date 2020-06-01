import React, { Component } from 'react';
import styled from 'styled-components';
import AboutCover from '../assets/viewimage_story.jpg';
import playImage1 from '../assets/jakesossplay1.jpg';
import playImage2 from '../assets/jakesossplay2.jpg';
import playImage3 from '../assets/jakesossplay3.jpg';
import playImage4 from '../assets/jakesossplay4.jpg';
import {
	HomeTitle,
	SubTitle,
	AboutTitle,
	SubText,
	AboutImg,
	EventsTitle,
	EventsTitle2,
	ShowTitle,
	ShowContent,
	PlayImage1,
	PlayImage3,
	PlayImage4,
	ImageWrapper,
	TitleWrapper,
} from './commonStyleComponents/commonDivs';

class EventsComponent extends Component {
	render () {
		return (
			<div>
			  <EventsTitle>
			    Past Shows
			  </EventsTitle>
			  <ShowTitle>
			    1. Show 1
			  </ShowTitle>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
			        quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
			        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
			        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
			        saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
			         a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
			         asperiores repellat.
			    </p>
			  </ShowContent>
			   <ImageWrapper>
				  <PlayImage1
				    image={playImage1}
				    />
			  </ImageWrapper>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
			    </p>
			  </ShowContent>
			   <ShowTitle>
			    2. Show 2
			  </ShowTitle>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
			        quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
			        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
			        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
			        saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
			         a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
			         asperiores repellat.
			    </p>
			  </ShowContent>
			  <ImageWrapper>
				  <PlayImage1
				    image={playImage2}
				    />
			  </ImageWrapper>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
			    </p>
			  </ShowContent>
			   <ShowTitle>
			    3. Show 3
			  </ShowTitle>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
			        quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
			        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
			        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
			        saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
			         a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
			         asperiores repellat.
			    </p>
			  </ShowContent>
			  <ImageWrapper>
				  <PlayImage3
				    image={playImage3}
				    />
			  </ImageWrapper>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
			    </p>
			  </ShowContent>
			   <ShowTitle>
			    4. Show 4
			  </ShowTitle>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
			        quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
			        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
			        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
			        saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
			         a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
			         asperiores repellat.
			    </p>
			  </ShowContent>
			  <ImageWrapper>
				  <PlayImage4
				    image={playImage4}
				    />
			  </ImageWrapper>
			  <ShowContent>
			    <p>
			      &nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			       deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
			       similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
			    </p>
			  </ShowContent>
			  <TitleWrapper>
				  <EventsTitle2>
				    Upcoming Shows
				  </EventsTitle2>
			  </TitleWrapper>
			  <table class="table">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Name</th>
				      <th scope="col">Date</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>Hamlet</td>
				      <td>06/25/2020</td>
				    </tr>
				    <tr>
				      <th scope="row">2</th>
				      <td>Romeo & Juliet</td>
				      <td>06/30/2020</td>
				    </tr>
				    <tr>
				      <th scope="row">3</th>
				      <td>Mr. Doubtfire</td>
				      <td>07/03/2020</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		);
	}
}

export default EventsComponent;