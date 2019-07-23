import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary" onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content"> {song.title} </div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// acts like a filter
const mapStateToProps = (state) => {
	// must return as a json format
	return { songs: state.songs };
};

// the action create is actually appened to the props;
// the connect will automatically dispatch actions to store if you pass them within {}.
export default connect(mapStateToProps, { selectSong })(SongList);
