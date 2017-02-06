import React from 'react';
import {connect} from 'react-redux';
import NewBlog from './newBlog';
import PublishedBlogs from './publishedBlogs';
import EditBlogForm from './editBlogForm';
import * as actions from './actions';


class Home extends React.Component {

	constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.props.dispatch(actions.renderBlogs());
	}

	render() {
		if(this.props.showEdit) {
			return <div><EditBlogForm /></div>
		} else {
			return <div>
					<h1>my blog redux - make an annonymous blog post </h1>
					<h2>... or delete a post annonymously</h2>
					<NewBlog />
					<PublishedBlogs />
				</div>;
		}
	}
}

export default connect((state, props) => ({
	blogposts: state.blogposts,
	showEdit: state.showEdit,
	blogToEdit: state.blogToEdit,
}))(Home);

