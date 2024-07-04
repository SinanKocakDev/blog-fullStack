import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailPost } from "../../redux/postSlice";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

const DetailPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = useSelector(state => state.posts);

  useEffect(() => {
    if (id) {
      dispatch(detailPost(id));
    } else {
      console.log('ID is undefined'); 
    }
  }, [dispatch, id]);

  console.log('Loading:', loading);
  console.log('Post:', post);

  const cleanHtml = DOMPurify.sanitize(post.body);

  return (
    <div>
      {loading ? (
        "Yükleniyor..."
      ) : post && Object.keys(post).length !== 0 ? (
        <div>
          <h1 className="text-2xl font-bold pb-2">{post.title}</h1>
          <div 
            className="prose prose-lg mt-8" 
            dangerouslySetInnerHTML={{ __html: cleanHtml}}
            
          
          />
        </div>
      ) : (
        <div>Gösterilecek yazı bulunamadı.</div>
      )}
    </div>
  );
};

export default DetailPost;
