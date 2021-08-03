import React from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      display:[]
     }
  }



   componentDidMount(){
     const code = this.props.match.params.code;
     axios.get(`https://hd-news.herokuapp.com/news/${code}`).then(result=>{

        this.setState({
          display: result.data.articles
        })
     })
    }


  
    render(){
    return ( 
      <div>
        <h3>HEADLINE NEWS</h3>
      <Link to="/tag">
         <h4>Back</h4>
          </Link>




      <div className='newsappcontainer'>
        {this.state.display.map((article,i) =>{
        return(
           <div className='subnewsappcontainer' key={i}>
           <p>{article.author}</p>
           {/* <p className='content'>{article.content}</p> */}
           {/* <p className='description'>{article.description}</p> */}
            <p className=''>{article.publishedAt}</p>
            <p className=''>{article.source.name}</p>
            <p className=''>{article.title}</p>
            <img src={article.urlToImage} alt='mato'/>
         
         </div>)
        })}

      </div>
      </div>
    );
  }
}




