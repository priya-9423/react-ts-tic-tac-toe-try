import React, {PureComponent} from 'react'

export default (props) =>{
    return(
    <button style={{border: '1px solid', height :30,width:30}} onClick = {(event) =>{ props.squareClicked(props.name)}}>
    {props.textValue}
    </button>    
    )
  
}