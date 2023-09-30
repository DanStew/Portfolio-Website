import Title from '../Components/Title.jsx'
import Banner from '../Components/Banner.jsx'

function Home(){
    return(
        <div className="home page">
            <div className="header flex_item">
                <Title title="Daniel Stewart"/>
                <Banner />
            </div>
            <div className="main_body flex_item">
                Hello
            </div>
        </div>
    )
}

export default Home