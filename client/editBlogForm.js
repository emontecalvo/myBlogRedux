import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';


class editBlogForm extends React.Component {

  constructor(props) {
    super(props);
  }

  editBlogPost(blogToEdit) {
    this.props.dispatch(actions.editPost(blogToEdit));
  }

  render() {
    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let title = e.target.title.value
              let content = e.target.content.value
              let tags = e.target.tags.value
              this.props.blogToEdit.title = title
              this.props.blogToEdit.content = content
              this.props.blogToEdit.tags = tags
              this.editBlogPost(this.props.blogToEdit)
            }}
          >

      <input type="text" name="title" defaultValue={this.props.blogToEdit.title}/>
      <textarea rows="4" cols="50" name="content" defaultValue={this.props.blogToEdit.content}/>
      <input type="text" name="tags" defaultValue={this.props.blogToEdit.tags}/>

    <button type="submit">
      save
    </button>
  </form>
      </div>
    )
  }
}


export default connect((state, props) => ({
  blogposts: state.blogposts,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit,
}))(editBlogForm);
