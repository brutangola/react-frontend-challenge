'use client'
import React from 'react'

export const Header = () => {
  return (
    <header className='w-full h-28 bg-slate-200 mx-auto'>
      <div>
        <div>
          <span>You <span>Tube</span></span>
          <span>Broadcast Yourself</span>
        </div>
        <div>
          <input type="text"/>
          <button>Search</button>
        </div>
        <div>
          <span>
            <a href="#">Create Account</a> or <a href="#">sign-in</a>
          </span>
        </div>
      </div>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Videos</li>
            <li>Channels</li>
          </ul>
          <ul>
            <li>Subscriptions</li>
            <li>History</li>
            <li>Upload</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
