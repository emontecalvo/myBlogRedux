import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';


class publishedBlogs extends React.Component {

  constructor(props) {
    super(props);
  }

  removeBlogPost(blogPost) {
    this.props.dispatch(actions.removeBlogPost(blogPost));
  }

  editBlogStart(blogPost) {
    this.props.dispatch(actions.edit_blog_start(blogPost));
  }


  render() { 
    return (
      <ul>
        {this.props.blogposts.map((blog, index) => {
          return <div key={index}>
          		<li>{blog.title}</li>
          			<ul>
  		        		<li>{blog.content}</li>
  		        		<li>{blog.tags}</li>
  		        	</ul>
  		        	<button onClick={() => this.editBlogStart(blog)}>edit</button>
  		        	<button onClick={() => this.removeBlogPost(blog)}>remove</button>
               </div>;
        })}
      </ul>
    )
  }

}



export default connect((state, props) => ({
  blogposts: state.blogposts,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit,
}))(publishedBlogs);



