import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], nameInput: '', commentInput: ''}

  onDeleteItem = id => {
    const {commentsList} = this.state

    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: filteredList})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="comments-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="comments-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
          <div className="form-container">
            <p className="comments-description">
              Say something about 4.0 Technologies
            </p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="input-element"
                onChange={this.onChangeNameInput}
                value={nameInput}
              />
              <br />
              <textarea
                rows="6"
                placeholder="Your Comments"
                className="text-area-input"
                onChange={this.onChangeCommentInput}
                value={commentInput}
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="count-container">
          <p className="comments-count">{commentsList.length}</p>
          <p className="comments-name">Comments</p>
        </div>
        <ul className="comments-list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLiked={this.toggleIsLiked}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
