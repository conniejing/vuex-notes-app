export const filteredNotes = (state) => {
	if(state.show === 'all'){
		return state.notes || {};
	}else{
		return state.notes.filter(note => note.favorite) || {};
	}
};

export const show = (state) => {
	return state.show;
}

export const activeNote = (state) => {
	return state.activeNote;
}