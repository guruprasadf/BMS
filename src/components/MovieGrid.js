import React from "react";
import "../assets/styles/movie-grid.css";
import Preview from "./MoviePreview";
import ReactDOM from "react-dom";
import MovieTile from './MovieTile'

class MovieGrid extends React.Component {
  state = {
    movies: [],
    upperList : [],
    lowerList : [],
    clickedItemID :0,
    loading : false
  };

  componentDidMount = () => {console.log(this.props.moviesData)
    this.setState({
      movies: Object.values(this.props.moviesData).map(movie => ({
        EventTitle: movie.EventTitle,
        EventCode: movie.EventCode,
        ShowDate: movie.ShowDate,
        EventGenre: movie.EventGenre,
        EventLanguage: movie.EventLanguage,
        TrailerURL: movie.TrailerURL,
        wtsCount: movie.wtsCount,
        dwtsCount: movie.dwtsCount,
        maybeCount: movie.maybeCount,
        totalVotes: movie.totalVotes,
        wtsPerc: movie.wtsPerc
      }))
    },()=>{
      this.setState({
        upperList : this.state.movies
      })
      console.log(this.state.movies)
    });
  };

  handleClick = clickedItemID => {
    
    // let clickedItem = "";
    // if (e.target.classList.contains("box-inner")) {
    //   clickedItem = e.target.parentElement;
    // } else if (
    //   e.target.classList.contains("show-date") ||
    //   e.target.classList.contains("fa-play-circle") ||
    //   e.target.classList.contains("ratings")
    // ) {
    //   clickedItem = e.target.parentElement.parentElement;
    // } else if (
    //   e.target.classList.contains("fa-thumbs-up") ||
    //   e.target.classList.contains("votes")
    // ) {
    //   clickedItem = e.target.parentElement.parentElement.parentElement;
    // } else return;

    // const clickedItemID = clickedItem.id;

    let columns =
      Math.floor(
        window.innerWidth / document.getElementsByClassName("box")[0].getBoundingClientRect().width
      ) || 1;
    let targetElem = document.getElementById(
      Math.floor(clickedItemID / columns) * columns
    );
  //  console.log(clickedItem.getBoundingClientRect().width)
    console.log(Math.floor(clickedItemID / columns) * columns);
    console.log(clickedItemID);
    let splitAt =Math.floor(clickedItemID / columns) * columns;
    let upperList = this.state.movies.slice(0,(splitAt));
    let lowerList = this.state.movies.slice(splitAt,(this.state.movies.length));
    this.setState({
      clickedItemID,
      upperList,
      lowerList,
      loading : false
    },()=>{
     
    })

   // console.log(targetElem);
    // if (document.getElementById("preview")) {
    //   document
    //     .getElementById("movies-grid")
    //     .removeChild(document.getElementById("preview"));
    // }
    // let p = document.createElement("div");
    // p.classList.add("preview");
    // p.id = "preview";
    // setTimeout(() => {
    //   p.style.height = "430px";
    //   p.style.opacity = 1;
    // }, 0);
    // document.getElementById("movies-grid").insertBefore(p, targetElem);
    // ReactDOM.render(
    //   <Preview movie={this.state.movies[clickedItemID]} item={clickedItemID} />,
    //   p
    // );

    // p.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start"
    // });

    
    // setTimeout(() => {
    //   window.scrollBy({
    //     top: -100,
    //     behavior: "smooth"
    //   });
    // }, 200);
  };

  render() {
    return (
      <div className="movies-grid" id="movies-grid">
        {this.state.upperList.map((item, index) => {
          return (
            <MovieTile item={item} index={index} handleClick={this.handleClick} />
          );
        })}
   {this.state.lowerList.length&& 
   
   <Preview movie={this.state.movies[this.state.clickedItemID]} item={this.state.clickedItemID} handleClick={this.handleClick}/>
   }

    {this.state.lowerList.map((item, index) => {
          return (
            <MovieTile item={item} index={index+this.state.upperList.length} handleClick={this.handleClick}/>
          )})}
      </div>
    );
  }
}

export default MovieGrid;
