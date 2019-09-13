import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../actionCreators';

const url = 'http://api.massrelevance.com/MassRelDemo/kindle.json', numPosts = 10;

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
    this.props.loadPosts();
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading
});
    
const mapDispatchToProps = dispatch => {
  return {
    loadPosts(){
      dispatch(loadPosts(url, numPosts));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);