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

	componentDidMount() {
		this.props.dispatch(actions.renderBlogs());
	}

	addBlog(title, content, tags) {
		this.props.dispatch(actions.addPost(title, content, tags));
	}

	removeBlogPost(blogPost) {
		this.props.dispatch(actions.removeBlogPost(blogPost));
	}

	editBlogStart(blogPost) {
		console.log("i am in editStart");
		console.log("EDITSTART BLOG POST IS", blogPost);
		this.props.dispatch(actions.edit_blog_start(blogPost));
	}

	editBlogPost(blogToEdit) {
		console.log("HOME comp, edit blog, blogtoEdit is:", blogToEdit)
		this.props.dispatch(actions.editPost(blogToEdit));
	}

	render() {
		if(this.props.showEdit) {
			return <div><EditBlogForm blogToEdit={this.props.blogToEdit} editBlogPost={this.editBlogPost.bind(this)} /></div>
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
	showEdit: state.showEdit,
	blogToEdit: state.blogToEdit,
}))(Home);


// module.exports = Home;