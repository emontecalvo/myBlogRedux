import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

//blogs, removeBlogPost, editBlogStart

const publishedBlogs = (props) => {

  console.log("props are", props);

  return (
    <ul>
      {props.blogposts.map((blog, index) => {
        return <div key={index}>
        		<li>{blog.title}</li>
        			<ul>
		        		<li>{blog.content}</li>
		        		<li>{blog.tags}</li>
		        	</ul>
		        	<button onClick={() => props.editBlogStart(blog)}>edit</button>
		        	<button onClick={() => props.removeBlogPost(blog)}>remove</button>
             </div>;
      })}
    </ul>
  )

}


export default connect((state, props) => ({
  //Select your state -> props mappings here
  blogposts: state.blogposts,
}))(publishedBlogs);

//es5 syntax
//module.exports = publishedBlogs;





