

const initialState = {
	blogposts: [],
	showEdit: false,
	blogToEdit: ''
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === 'UPDATE_BLOGPOSTS') {
		console.log("reducer action UPDATE called");
		return {...state, blogposts: action.data} // equiv. of this.setState
	}

	return state;
}

exports.reducer = reducer;


