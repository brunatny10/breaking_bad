import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
      <div className="bottonsv">
        <a href="https://en.wikipedia.org/wiki/Breaking_Bad"  target="_blank" className="more-info" role="button" without rel="noreferrer">More Information </a>
        <a href="https://www.filmweb.pl/serial/Breaking+Bad-2008-430668"  target="_blank" className="watch" role="button" without rel="noreferrer">Watch it</a>
      </div>
    </section>
  )
}

export default Search;