import React from 'react'

function Posts({xog,title}) {
   

    return (
        <div className="post-list">
            <h2>{title}</h2>
            {
              xog.map((item, index) => <li key={item.id}>{item.post}</li>)
            }
        </div>
    )
}

export default Posts
