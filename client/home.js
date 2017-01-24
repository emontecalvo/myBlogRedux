import React from 'react';
import {connect} from 'react-redux';
import NewBlog from './newBlog';
import PublishedBlogs from './publishedBlogs';
import EditBlogForm from './editBlogForm';
import * as actions from './actions';

class Home extends React.Component {

	constructor(props) {
        super(props);
        this.addBlog = this.addBlog.bind(this);
	}

	// componentDidMount() {
	// 	this.props.dispatch(actions.addPost());
	// 	// fetch('/blogs')
	// 	//   .then((response) =>{
	// 	//     return response.json()
	// 	//   }).then((data) =>{
	// 	//     this.setState({ blogposts: data })
	// 	//   })
	// }

	addBlog(title, content, tags) {
		this.props.dispatch(actions.addPost(title, content, tags));
	}

	removeBlogPost(blogPost) {
		this.props.dispatch(actions.removeBlogPost(blogPost));
		// var i;
		// for (var j = 0; j < this.state.blogposts.length; j++) {
		// 	if (this.state.blogposts[j]._id === blogPost._id) {
		// 		var i = this.state.blogposts[j];
		// 	}
		// }
		// if(i !== -1) {
		// 	fetch('/blogs/' + blogPost._id, {
		//   		method: 'DELETE',
		//   		headers: {
		//     	'Content-Type': 'application/json'
		//   	},
		//   	body: JSON.stringify({
		//     id: blogPost._id
		//   })
		// }).then((response) => {
		//     return response.json()
		//   }).then((data) => {
		//    	this.setState({ blogposts: data })
		//   })
		// }
	}

	editBlogStart(blogPost) {
		console.log("i am in editStart");
		var i = this.state.blogposts.indexOf(blogPost);
		if(i !== -1) {
			this.state.showEdit = true;
			this.state.blogToEdit = blogPost;
			this.setState({ showEdit: true});
			this.setState({blogToEdit: blogPost});
		}
	}

	editBlogPost(blogToEdit) {
		this.props.dispatch(actions.editPost(blogToEdit));
		// this.state.blogToEdit = '';
		// this.state.showEdit = false;
		// fetch('/editblogs/' + blogToEdit, { // this is sending req.params
		//   		method: 'PUT',
		//   		headers: {
		//     	'Content-Type': 'application/json'
		//   	},
		//   	body: JSON.stringify({  /// this is the req.body, this is being passed to the server
		//     item: blogToEdit
		//   })
		// }).then((response) => {
		//     return response.json()
		//   }).then((data) => {
		//   	var blog_sub = [];
		//   	for (var a = 0; a < this.state.blogposts.length; a++) {
		//   		if (this.state.blogposts[a]._id !== data._id) {
		//   			blog_sub.push(this.state.blogposts[a]);
		//   		} else {
		//   			blog_sub.push(data);
		//   		}
		//   	}
		//   	console.log("state blogs after update:", this.state.blogposts);
		//    	this.setState({ blogposts: blog_sub });
		//   })
	}

	render() {
		if(this.props.showEdit) {
			return <div><EditBlogForm blogToEdit={this.state.blogToEdit} editBlogPost={this.editBlogPost.bind(this)} /></div>
		} else {
			return <div>
					<h1>my blog</h1>
					<NewBlog addBlog={this.addBlog.bind(this)}/>
					<PublishedBlogs 
						removeBlogPost={this.removeBlogPost.bind(this)}
						editBlogStart={this.editBlogStart.bind(this)}
					/>
				</div>;
		}
	}
}

export default connect((state, props) => ({
	//Select your state -> props mappings here
	blogposts: state.blogposts,
}))(Home);


// module.exports = Home;