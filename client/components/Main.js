import React from 'react';
import { Link } from 'react-router';
import Instafeed from 'instafeed.js';

var feed = new Instafeed({
      get: 'user',
      userId: '4357624', // Ex: 1374300081
      accessToken: '4357624.d09a4fd.11ab31efa3fd428eb1bb19fab22a5a40'
    });
    feed.run();


const Main = React.createClass({
	render() {
		
		console.log('feed::', feed);
		return (
			<div>
				<h1>
					<Link to="/">Petstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;