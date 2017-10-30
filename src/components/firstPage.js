import React, { Component } from 'react';

export default class First_page extends Component {
    constructor(props){
        super(props);
        this.renderItem ={};
        this.state={
            index:0,
            dataArray:[
                { content:'Page content, page number 1' },
                { content:'Page content, page number 2' },
                { content:'Page content, page number 3' },
                { content:'Page content, page number 4' }
            ]
        }
        this.onPrevClick = this._onClickPrev.bind(this);
        this.onNextClick = this._onClickNext.bind(this)

    }

    _createPageLogic(index){
        if(index === this.state.dataArray.length-1 && this.state.dataArray.length > 1){
            return ( <div>{this.state.dataArray[index].content} <button onClick={this.onPrevClick}>Prev</button></div> );
        }
        if(index === 0 && this.state.dataArray.length !== 1){
            return (<div>{this.state.dataArray[index].content} <button onClick={this.onNextClick}>next</button></div>);
        }
        if(this.state.dataArray.length === 1){
            return ( <div>{this.state.dataArray[index].content}</div>);
        }

        return(
            <div>{this.state.dataArray[index].content}
                <button onClick={this.onNextClick}>next</button>
                <button onClick={this.onPrevClick}>Prev</button>
            </div>);
    }

    _onClickPrev(){
        this.setState({index:this.state.index-1})
    }

    _onClickNext(){
        this.setState({index:this.state.index+1})
    }

    render() {
        return (
            <div>
                {this.state.dataArray&&this.state.dataArray[this.state.index] ?
                    this._createPageLogic(this.state.index)
                    :
                    null
                }
            </div>
        );
    }
}
