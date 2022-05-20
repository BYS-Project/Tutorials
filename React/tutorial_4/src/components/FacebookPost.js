import React, {useState} from 'react'
import '../style/FacebookPost.css'

// Let's refractor this code using the state of the function
function Post(props) {
    // Unique identifier!
    const key = props.n
    const author = props.author
    const imgLink = props.imgLink
    const description = props.description

    // let clicked = false | clicked must become part of the state of the component
    let [clicked, onClick] = useState(false)
    let [nLikes, changeAmount] = useState(0)
    const changeLikes = () =>{

        if(clicked)
            changeAmount(nLikes - 1)
        else
            changeAmount(nLikes + 1)

        onClick(!clicked)

    }

    return (
        <div className='post'>
            <h2>Author: {author}</h2>
            <img src={imgLink} alt={author + "'s post - " + key}></img>
            <p className='description'>{description}</p>
            <button onClick={changeLikes}>Leave a like</button>
            <p className='likeNumber'>Likes: {nLikes}</p>
        </div>
    )
}

export default Post