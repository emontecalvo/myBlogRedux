import React from 'react';
import {connect} from 'react-redux';


const editBlogForm = ({blogToEdit, editBlogPost}) => {
  console.log(blogToEdit);

    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let title = e.target.title.value
              let content = e.target.content.value
              let tags = e.target.tags.value
              blogToEdit.title = title
              blogToEdit.content = content
              blogToEdit.tags = tags
              editBlogPost(blogToEdit)

              e.target.title.value = 'hello'
              e.target.content.value = blogToEdit.content
              e.target.tags.value = blogToEdit.tags
            }}
          >

      <input type="text" name="title" defaultValue={blogToEdit.title}/>
      <textarea rows="4" cols="50" name="content" defaultValue={blogToEdit.content}/>
      <input type="text" name="tags" defaultValue={blogToEdit.tags}/>

    <button type="submit">
      Save Edit
    </button>
  </form>
      </div>
    )

}

module.exports = editBlogForm;
