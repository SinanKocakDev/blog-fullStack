import express from 'express'
import { getAllPosts, createPost, detailPost, deletePost, updatePost } from '../controllers/postControllers.js'
//import auth from "../middlewares/authMiddleware.js"
const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', detailPost)
router.post('/', createPost)
router.get('/:id', detailPost)
router.delete('/:id', deletePost)
router.put('/:id', updatePost)


export default router