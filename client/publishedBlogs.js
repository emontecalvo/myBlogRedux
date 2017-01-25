import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

//blogs, removeBlogPost, editBlogStart

// const publishedBlogs = (props) => {
class publishedBlogs extends React.Component {

  constructor(props) {
    super(props);
  }

  removeBlogPost(blogPost) {
    this.props.dispatch(actions.removeBlogPost(blogPost));
  }

  editBlogStart(blogPost) {
    console.log("i am in editStart");
    console.log("EDITSTART BLOG POST IS", blogPost);
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



//es5 syntax
//module.exports = publishedBlogs;


export default connect((state, props) => ({
  //Select your state -> props mappings here
  blogposts: state.blogposts,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit,
}))(publishedBlogs);



