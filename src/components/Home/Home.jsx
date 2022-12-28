import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import Posts from '../Posts/Posts'

const Home = () => {
  return (
    <div>
      <div>
        <CreatePost/>
      </div>
      <div>
        <Posts/>
      </div>
    </div>
  )
}

export default Home