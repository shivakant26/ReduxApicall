import React from "react";

const datalist = [
    {name:"rrr"},
    {name:"bbb"},
    {name:"bbb"},
    {name:"bbb"},
    {name:"cccc"},
    {name:"bbb"},
    {name:"dddd"},
]
class Test extends React.Component{
    constructor(){
            super();
            this.state={
                serchtext:"",
                list:datalist
            }
    }
    Search(e){
        let serchtext = e.target.value;
        // console.log("text",serchtext);
       const filterdata =  datalist.filter((element)=>{ 
            return element.name.includes(serchtext.toLowerCase())
        })
        this.setState({
            list:filterdata,
            serchtext:serchtext
        })
        
   
    }
    render(){
        return(
            <div>
                <h2>test</h2>
                <input type="text" 
                value={this.state.serchtext}
                onChange={(e)=>{this.Search(e)}}
                />
                {
                    this.state.list.map((item, i)=>
                    <ul key={i}>
                        <li>{item.name}</li>
                    </ul>
                    )
                }
            </div>
        )
    }
}


export default Test;