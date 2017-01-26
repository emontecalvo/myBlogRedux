
const update_blogposts = data => ({
	type: 'UPDATE_BLOGPOSTS',
	data
})

export const edit_blog_start = (blogPost) => ({
	type: 'EDIT_BLOG_START',
	blogPost
})

const edit_for_real = blogPost => ({
	type: 'EDIT_FOR_REAL',
	blogPost
})

export const addPost = (title, content, tags) => dispatch => {
	return fetch('/create-blog', { /// send a request, waits until it has the headers
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
		    return response.json() // looks for json coming back from server
		}).then((data) => { // this gets the actual data
		  	dispatch(update_blogposts(data))
		}).catch(error =>
			dispatch(report_failure("fetch_hello", error))
		);
}

export const removeBlogPost = (blogPost) => dispatch => {
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
	})
}

export const editPost = (blogToEdit) => dispatch => {
	return fetch('/editblogs/' + blogToEdit, { // this is sending req.params
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify({  /// this is the req.body, this is being passed to the server
		item: blogToEdit
		  })
		}).then((response) => {
		    return response.json()
		}).then((blogToEdit) => {
			dispatch(edit_for_real(blogToEdit))
	})
}

export const renderBlogs = () => dispatch => {
	return fetch('/blogs')
		.then((response) =>{
		    return response.json()
		}).then((data) =>{
		  	dispatch(update_blogposts(data))
		})
}





