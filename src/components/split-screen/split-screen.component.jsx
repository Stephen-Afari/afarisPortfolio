import './split-screen.styles.scss'
export const SplitScreen = ({left:Left, middle:Middle ,right:Right,
leftWeight, rightWeight, middleWeight})=>{
    return (
        <div className='split-container'>
            <div weight={leftWeight}>
            <Left />
            </div>
            <div weight={middleWeight}>
            <Middle />
            </div>
            <div weight={rightWeight}>
            <Right />
            </div>
          
            {/* <div className='left-split' >Left</div>
            <div className='middle-split' >Middle</div>
            <div className='right-split' >Right</div> */}
        </div>
    )
}