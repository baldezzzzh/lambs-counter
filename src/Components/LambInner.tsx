import React from "react";

const LambImgData = [
    {lambImg: 'https://static.thenounproject.com/png/1654564-200.png'},
    {lambImg: 'https://icon-library.com/images/lamb-icon/lamb-icon-25.jpg'},
    {lambImg: 'https://static.thenounproject.com/png/1654564-200.png'},
    {lambImg: 'https://icon-library.com/images/lamb-icon/lamb-icon-25.jpg'},
    {lambImg: 'https://static.thenounproject.com/png/1654564-200.png'},
    {lambImg: 'https://icon-library.com/images/lamb-icon/lamb-icon-25.jpg'},
    {lambImg: 'https://static.thenounproject.com/png/1654564-200.png'},
    {lambImg: 'https://icon-library.com/images/lamb-icon/lamb-icon-25.jpg'},
    {lambImg: 'https://static.thenounproject.com/png/1654564-200.png'},
    {lambImg: 'https://icon-library.com/images/lamb-icon/lamb-icon-25.jpg'},
    {lambImg: 'https://static.thenounproject.com/png/1654564-200.png'},
    {lambImg: 'https://icon-library.com/images/lamb-icon/lamb-icon-25.jpg'}
]

const LambInner = () => {

    return(
        <div className={'lamb_inner'}>
            {LambImgData.map( l => {
                return(
                    <img src={l.lambImg} alt="lamb" className={'lamb'}></img>
                )
            } )}
        </div>
    )
}

export default LambInner