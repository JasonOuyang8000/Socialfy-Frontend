import PostForm from "../components/PostForm/PostForm"
import ProfileCard from "../components/ProfileCard/ProfileCard"


const Home = () => {
    


    return (
        <div className="container c-width mt-5">
            <div className="row">
            <div className="col-md-12 col-lg-3">
               <ProfileCard />
              
            </div>
            <div className="col-md-12 col-lg-6">
                <PostForm />
            </div>
            <div className="col-md-12 col-lg-3">
            
            </div>
        


            </div>
      
        </div>
    )
}



export default Home;