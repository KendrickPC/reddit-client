import React from 'react';

export function Article(props) {

  function _getTime(time) {
    var dateTime = new Date(time*1000).toString();    
    console.log(dateTime);
    return dateTime    
  }

  return (
    <article>
      <a href={"https://reddit.com" + props.article.permalink } target="_blank">
        <h3>{props.article.title}</h3>
        {/* <h5>{props.article.score}</h5> */}
        <h5>Author: {props.article.author}</h5>
        <h5>Score: {props.article.score}</h5>
        <h5>Date Created: {_getTime(props.article.created_utc)}</h5>
        <h5>{props.article.subreddit_name_prefixed}</h5>


        {/* <h5>{new Date(props.article.created)[0]}</h5> */}
        

      </a>
    </article>

    
  )
}

// export default Article;
