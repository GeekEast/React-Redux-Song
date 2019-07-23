import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
	render() {
		const { selectedSong } = this.props;
		if (!selectedSong) {
			return <div>Select a Song!</div>;
		}
		const { title, duration } = selectedSong;
		return (
			<div>
				<h3>Details for:</h3>
				<p>
					Title: {title} <br />
					Duration: {duration}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	const { selectedSong } = state;
	return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
