import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Post from './Post'
import Posts from './Posts'

function Main() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/post/:id/:title?" element={<Post/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default Main