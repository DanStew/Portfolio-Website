import Title from "../Components/Title"
import Banner from "../Components/Banner"

function AboutMe(){
    return(
        <div className="aboutme page">
            <div className="header flex_item">
                <Title title="About Me"/>
                <Banner />
            </div>
            <div className="main_body flex_item">
                Hello
            </div>
        </div>
    )
}

export default AboutMe