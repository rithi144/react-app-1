//external 
import "../css/PropsComponent.css"
function PropsComponent(props){
   /*internal const StyleAttr={
        backgroundColor:"brown",
        color:"white"
}*/
    return(
        //<div style:{StyleAttr}  -->internal
        //<div style:{{color:"white"}}></div>    -->inline
        <div>
            Hello, {props.name}<br></br> This is {props.course} class
        </div>
    )
}
export default PropsComponent;
