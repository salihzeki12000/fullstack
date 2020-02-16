import React from 'react';
import { Link } from 'react-router-dom';

class SpaceIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: 1
        }
    }

    handleClick(offset){
        let newState = this.state.slide + offset
        if(newState > this.props.space.photoUrls.length){
            newState = 1
        } else if (newState < 1){
            newState = this.props.space.photoUrls.length
        }
        this.setState({
            slide: newState
        })
    }

    handleSaveBoard(space){
        this.props.currentUser
    }

    render(){
        const space = this.props.space
        return (
            <div className='space-component'>
                    <div className="slideshow-container">
                        <div className='slider-container'>
                            {
                                space.photoUrls.map( (photoURL, idx) => (
                                    <Link to={`/spaces/${space.id}`} key={`${space.id}-${idx}`}>
                                        <div className='mySlides fade' >
                                            {
                                                (this.state.slide === idx+1) ? (
                                                    <img className={`slider${idx + 1} slider-img`} src={photoURL} />
                                                ) : (
                                                    <img className={`slider${idx + 1} slider-img hidden`} src={photoURL} />
                                                )
                                            }
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='price-box-wrapper'> 
                            <span>from </span>
                            <span><strong>${space.price}</strong></span>
                            <span> / hr</span>
                        </div>
                        <a className="prev" onClick={() => this.handleClick(-1)}>&#10094;</a>
                        <a className="next" onClick={() => this.handleClick(1)}>&#10095;</a>
                    </div>
        
                    <div className='info-box'>
                        <Link to={`/spaces/${space.id}`}>
                            <div className='info-space-title'>
                                <h5>{space.title}</h5>
                            </div>
                        </Link>
                        <div className='info-row'>
                            <Link to={`/spaces/${space.id}`}>
                                <div className='review-section'>
                                    <i className="fas fa-user-friends fa-sm"></i>
                                    {space.capacity}
                                </div>
                            </Link>
                            <div className='answer-time'>
                                <Link to={`/spaces/${space.id}`}>
                                    <p>Responds within {Math.round(Math.random()*8)} hrs</p>
                                </Link>
                                <button onClick={() => this.handleSaveBoard(space)}>
                                    {
                                        // this.props.currentUser.boards.includes(space.id) ?
                                        // <i className="fas fa-heart"></i> :
                                        <i className="far fa-heart"></i>
                                    }
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default SpaceIndexItem;