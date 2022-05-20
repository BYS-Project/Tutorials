import React from 'react'
import '../style/FacebookPost.css'

// For using props, add it as a function parameter
function Post(props) {
    let clicked = false
    // A person can put only 1 like per post!

    // List of variables from props...
    const author = props.author
    const imgLink = props.imgLink
    const description = props.description
    const like = () => {
        const element = document.getElementById('likes' + author)
        let nLikes = element.textContent
        if(clicked)
            element.innerText = parseInt(nLikes) - 1
        else
            element.innerText = parseInt(nLikes) + 1

        clicked = !clicked
    }

    // Return all the infos about the post

    // Reading PROPOST given by the parent
    return (
        <div className='post'>
            <h2>Author: {author}</h2>
            <img src={imgLink} alt={author + "'s post"}></img>
            <p className='description'>{description}</p>
            <button onClick={like}>Leave a like</button>
            <p className='likeNumber'>Likes: <span id={'likes' + author}>0</span></p>
        </div>
    )
}

export default Post