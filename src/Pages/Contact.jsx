import Title from "../Components/Title"
import Banner from "../Components/Banner"

function Contact(){
    return(
        <div className="contacts page">
            <div className="header flex_item">
                <Title title="Contacts"/>
                <Banner />
            </div>
            <div className="main_body flex_item">
                Hello
            </div>
        </div>
    )
}

export default Contact