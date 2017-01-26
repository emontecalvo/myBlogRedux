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
      <div className="all_blog_wrapper">
        <p className="prev_posts">previous blog posts:</p>
        <ul>
          {this.props.blogposts.map((blog, index) => {
            return <div key={index}>
              <div className="single_blog_wrapper">
            		<li className="title">{blog.title}</li>
            			<ul>
    		        		<li>{blog.content}</li>
    		        		<li>{blog.tags}</li>
    		        	</ul>
    		        	<button className="edit" onClick={() => this.editBlogStart(blog)}>edit</button>
    		        	<button className="remove" onClick={() => this.removeBlogPost(blog)}>remove</button>
                  </div>
                </div>;
          })}
        </ul>
      </div>
    )
  }

}



export default connect((state, props) => ({
  blogposts: state.blogposts,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit,
}))(publishedBlogs);



