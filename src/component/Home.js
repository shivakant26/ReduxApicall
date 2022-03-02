import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../Redux/Action/action';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
           searchText:"",
           list:this.props.data
        }
    }
   
    componentDidMount(){
       this.props.actionhandler();
    }

    // static getDerivedStateFromProps(){
    //     return {list : this.props.data}
    //   }

    search(e){
         let searchText = e.target.value;
         let filterdata = this.props.data.filter((element)=>{
             return element.title.includes(searchText.toLowerCase() )
         })
         this.setState({
             list:filterdata,
             searchText:searchText
         })
    }
    render(){
        console.log("render")
        return(
            <div>
                
                <div className='btn-section'>
                <input type="text"
                 placeholder='Search Text'
                 value={this.state.searchText}
                 onChange={(e)=>{this.search(e)}}
                 />
                </div>
                {
                    this.state.list ?  
                    <div className='card_wr'>
                        {
                            this.state.list.map((item , i)=>
                            
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
    // console.log("state",state.reducer.data)
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