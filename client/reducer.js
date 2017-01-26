
const initialState = {
	blogposts: [],
	showEdit: false,
	blogToEdit: ''
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === 'UPDATE_BLOGPOSTS') {
		return {...state, blogposts: action.data} // equiv. of this.setState
	}

	if (action.type === 'EDIT_BLOG_START') {
		return {...state, blogposts: state.blogposts, showEdit: true, blogToEdit: action.blogPost}
	}

	if (action.type === 'EDIT_FOR_REAL') {
		var blog_sub = [];
		for (var a = 0; a < state.blogposts.length; a++) {
		  	if (state.blogposts[a]._id !== action.blogPost._id) {
		  		blog_sub.push(state.blogposts[a]);
		  	} else {
		  		blog_sub.push(action.blogPost);
		  	}
		}
		return {...state, blogposts: blog_sub, showEdit: false, blogToEdit: ''}
	}
	return state;
}

exports.reducer = reducer;


