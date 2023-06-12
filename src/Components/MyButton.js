import Button from 'react-bootstrap/Button';
import React from 'react';

class MyButton extends React.Component{
constructor(){
    super();
    console.log("hi")
}

render(){
    return(
        <>
            <Button variant="primary">Primary</Button>{' '}
        </>
    )
}

}

export default MyButton;