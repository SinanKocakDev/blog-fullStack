import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../../redux/postSlice"
import PostCard from "../PostCard"

const Home = () => {

  const dispatch = useDispatch()
  const { posts, loading } = useSelector(state => state.posts)

  useEffect(()=>{
    dispatch(getAllPosts())
  },[dispatch])

  return (
    <>
    {
      loading ? "Looading..." : posts?.posts && <div className="">
        {
          posts?.posts?.map((post, i)=>(
            <PostCard post={post} key={i}/>
          ))
        }
      </div>
    }
    
    </>
  )
}

export default Home