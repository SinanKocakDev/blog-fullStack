import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { detailPost, updatePost } from "../../redux/postSlice";
import RichTextEditor from "../RichTextEditor";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, loading } = useSelector((state) => state.posts);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(detailPost(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setBody(post.body || '');
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      body,
    };

    dispatch(updatePost({ id, post: updatedPost })).then(() => {
      navigate('/dashboard');
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Post Edit</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
            Post Body
          </label>
          <RichTextEditor
            value={body}
            onChange={setBody}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
