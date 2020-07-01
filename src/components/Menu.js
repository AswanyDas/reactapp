import React from 'react';
const divStyle={
   position:'absolute',
   top:'180px',
   right:'10px'
}
const imgstyle={
    float:'left'
}
const pstyle={
    align:'left'
}
function Menu() {
    return (
            <div className="w3-col l4"style={divStyle}>
  <div className="w3-card w3-margin w3-margin-top">
                    <img src="/w3images/avatar_g.jpg"style={imgstyle}></img>
                        <div className="w3-container w3-white" style={pstyle}>
                            <h4><b>My Name</b></h4>
                            <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                        </div>
  </div><hr></hr>
  </div>
                
  
    )
}

export default Menu;
