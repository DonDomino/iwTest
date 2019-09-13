import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../actionCreators';

class Posts extends Component{  
  render(){
    return (
      <div className="postContainer">
        <h1>Ultimos posts</h1>
        <h2>www.ideaware.co</h2>
        <div className="postWrapper">
          {this.props.loading ? <h2 style={{textAlign: "center"}}>Cargando...</h2> : null }
          {this.props.posts.map((post, index) => 
            <div className="post" key={index}>
              <h3>{post.user.name}</h3>
              <span>{post.created_at}</span>
              <p>{post.text}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  componentDidMount(){
    let { url, loadPosts, numPosts } = this.props;
    let init = 0;
    this.props.loadPosts(url, numPosts, init);
      setInterval(() => {
        init += numPosts;
        numPosts += numPosts;
        loadPosts(url, numPosts, init); 
      }, 20000);    
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading
});
    
const mapDispatchToProps = {  
  loadPosts
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Posts);