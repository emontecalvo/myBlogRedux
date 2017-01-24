
const update_blogposts = data => ({
	type: 'UPDATE_BLOGPOSTS',
	data
})




export const addPost = (title, content, tags) => dispatch => {
	return fetch('/create-blog', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    title: title,
		    content: content,
		    tags: tags
		  })
		}).then((response) => {
		    return response.json()
		  }).then((data) => {
		  	dispatch(update_blogposts(data))
		  }
		).catch(error =>
		dispatch(report_failure("fetch_hello", error))
	);
}

export const removeBlogPost = (blogPost) => dispatch => {
	console.log("blogPost is", blogPost);
	// var i;
	// for (var j = 0; j < this.state.blogposts.length; j++) {
	// 	if (this.state.blogposts[j]._id === blogPost._id) {
	// 		var i = this.state.blogposts[j];
	// 	}
	// }
	// if(i !== -1) {
		return fetch('/blogs/' + blogPost._id, {
		  	method: 'DELETE',
		  	headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		   id: blogPost._id
		 })
	}).then((response) => {
		   return response.json()
		 }).then((data) => {
		 	dispatch(update_blogposts(data))
		  // this.setState({ blogposts: data })
		 })
	//}
}








