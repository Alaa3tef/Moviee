import MyButton from '../Components/MyButton';
import React from 'react';

class AppComponent extends React.Component{
constructor(){
    super();
    console.log("hi")
}

render(){
    return(
        <>
            <MyButton></MyButton>
        </>
    )
}

}

export default AppComponent;