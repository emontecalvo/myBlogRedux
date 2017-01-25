import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

//blogToEdit, editBlogPost
const editBlogForm = (props) => {
  console.log('props is editblog form', props);

    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let title = e.target.title.value
              let content = e.target.content.value
              let tags = e.target.tags.value
              props.blogToEdit.title = title
              props.blogToEdit.content = content
              props.blogToEdit.tags = tags
              props.editBlogPost(props.blogToEdit)

              // e.target.title.value = 'hello'
              // e.target.content.value = blogToEdit.content
              // e.target.tags.value = blogToEdit.tags
            }}
          >

      <input type="text" name="title" defaultValue={props.blogToEdit.title}/>
      <textarea rows="4" cols="50" name="content" defaultValue={props.blogToEdit.content}/>
      <input type="text" name="tags" defaultValue={props.blogToEdit.tags}/>

    <button type="submit">
      Save Edit
    </button>
  </form>
      </div>
    )

}

module.exports = editBlogForm;
