import React from "react";

import Column from "./column";

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.onViewClick = this.onViewClick.bind(this)
        this.onEditClick = this.onEditClick.bind(this)
    }  
    onViewClick() {
        console.log(this.props.values)
        const id = this.props.values[0]
        this.props.onViewClick(id)
    }
    onEditClick() {
        console.log(this.props.values)
        const id = this.props.values[0]
        this.props.onEditClick(id)
    }

    render () {
        const values =this.props.values;
        let renderedCols = values.map((val,index)=>
        <Column key={index} isHeader={this.props.isHeader}>{val}</Column>
        );

        let actionButton;
        if(this.props.isHeader) {
           actionButton = (<Column isHeader={this.props.isHeader}>Actions</Column>)
        } else {
           actionButton = (<Column isHeader={this.props.isHeader}>
                                 <button onClick={this.onViewClick}>view</button>
                                 <button onClick={this.onEditClick}>Edit</button>
                            </Column>)
        }
        return (<tr>{renderedCols}{actionButton}</tr>)
    }
}

export default Row;