import React from 'react';
import {connect} from 'react-redux';



const publishedBlogs = ({blogs, removeBlogPost, editBlogStart}) => {

  console.log(blogs);

  return (
    <ul>
      {blogs.map((blog, index) => {
      	console.log("blog title is", blog.title);
        return <div key={index}>
        		<li>{blog.title}</li>
        			<ul>
		        		<li>{blog.content}</li>
		        		<li>{blog.tags}</li>
		        	</ul>
		        	<button onClick={() => editBlogStart(blog)}>edit</button>
		        	<button onClick={() => removeBlogPost(blog)}>remove</button>
             </div>;
      })}
    </ul>
  )

}

module.exports = publishedBlogs;