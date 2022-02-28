import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../Redux/Action/action';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Call Api Using Redux</h1>
                <div className='btn-section'>
                <button onClick={()=>{this.props.actionhandler()}}>getdata</button>
                </div>
                {
                    this.props.data ?  
                    <div className='card_wr'>
                        {
                            this.props.data.map((item , i)=>
                        <div className='card' key={i}>
                            <div className='card_title'>
                                <h2 className='gradient-text'>{item.title}</h2>
                            </div>
                            <div className='card-body'>
                                <p>{item.body}</p>
                            </div>
                            <div className='card-button'>
                                <button>Read More</button>
                            </div>
                        </div>
                            )}
                    </div>
                    : "no"
                }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log("state",state.reducer.data)
    return {
        data: state.reducer.data
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        actionhandler : () => dispatch(getData())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);