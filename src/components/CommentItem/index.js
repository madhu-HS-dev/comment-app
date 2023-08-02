// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, onDeleteItem} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const postedTime = formatDistanceToNow(date)

  const initial = name ? name[0].toUpperCase() : ''

  const likedClassName = isLiked ? 'active' : 'like'

  const isLikedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onLikeComment = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    onDeleteItem(id)
  }

  return (
    <li className="comment-list-container">
      <div className="main-container">
        <div className={`initial-class-name ${initialClassName}`}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p className="posted-time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="button-container">
        <div className="like-container">
          <img src={isLikedImage} alt="like" className="like-image" />
          <button type="button" onClick={onLikeComment}>
            <p className={likedClassName}>Like</p>
          </button>
        </div>
        <button type="button" onClick={onDeleteComment} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
