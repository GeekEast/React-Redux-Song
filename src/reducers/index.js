import { combineReducers } from 'redux';

// How redux match reducers with actions is actually a internal thing within the store.
// Notion: You could have same type in diffferent reducers, they are all triggerred when the right actions come.
/**
 * Reducers are used to return data.
 */
const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '2:30' },
		{ title: 'All Star', duration: '3:15' },
		{ title: 'I want it That Way', duration: '5:10' }
	];
};

const selectedSongsReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	// state key and reducers as dynamic values
	songs: songsReducer,
	selectedSong: selectedSongsReducer
});
