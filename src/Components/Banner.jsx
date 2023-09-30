import { useNavigate } from "react-router-dom"

function Banner(){
    //Creating the navigator to go to other pages
    const navigator = useNavigate()

    return(
        <div className="banner flex_item">
                <div className="flex_item" onClick={() => navigator("/") }>Home</div>
                <div className="flex_item" onClick={() => navigator("/projects") }>Projects</div>
                <div className="flex_item" onClick={() => navigator("/aboutme") }>About Me</div>
                <div className="flex_item" onClick={() => navigator("/contact") }>Contact</div>
        </div>
    )
}

export default Banner