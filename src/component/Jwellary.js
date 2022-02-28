import React from "react";
import { connect } from "react-redux";
import { getItem } from "../Redux/Action/action";

class jewelery extends React.Component {
    componentDidMount(){
        this.props.getProduct()
    }
    render() {
        return (
            <div>
                <div className='btn-section'>
                    {/* <button onClick={() => { this.props.getProduct() }}>getProduct</button> */}
                </div>
                {
                    this.props.product ?
                        <div className='card_wr'>
                            {
                                this.props.product.map((item, i) =>
                                    <div className='product_card' key={i}>
                                        <div className='card_title'>
                                            <span className="count">{item.rating.count}</span>
                                            <h2 className='gradient-text'>{item.title}</h2>
                                        </div>
                                        <div className="item-props">
                                            <p><strong>Price : </strong> ${item.price}</p>
                                            {/* <p>{item.count}</p> */}
                                        </div>
                                        <div className="card-image">
                                            <img src={item.image}/>
                                        </div>
                                        <span className="rating">Rating : {item.rating.rate}</span>
                                        <div className='card-body'>
                                            <p>{item.description}</p>
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
const mapStateToProps = state => {
    console.log("state product", state.reducer.product)
    return {
        product: state.reducer.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: () => dispatch(getItem())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(jewelery);