import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';


class newBlog extends React.Component {

	constructor(props) {
        super(props);
        this.addBlog = this.addBlog.bind(this);
	}

	addBlog(title, content, tags) {
		this.props.dispatch(actions.addPost(title, content, tags));
	}

	render() {
		return(
			 <div>
			 <div className="form_container">
				    <form
				      onSubmit={(e) => {
				        e.preventDefault()
				        let title = e.target.title.value
				        let content = e.target.content.value
				        let tags = e.target.tags.value
				        this.addBlog(title, content, tags)
				        e.target.title.value = ''
				        e.target.content.value = ''
				        e.target.tags.value = ''
				      }}
				    >

	      <input type="text" placeholder="enter title" name="title" />
	      <textarea rows="4" cols="50" placeholder="enter content" name="content" />
	      <input type="text" placeholder="enter tags" name="tags" />

	    <button type="submit">
	      post
	    </button>
	  </form>
	  </div>
			</div>
		)
	}

}


export default connect((state, props) => ({
  blogposts: state.blogposts
}))(newBlog);





