import { getPostDetail, getPost } from "../../api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Postdetail() {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const [relatedpost, setRelatedPost] = useState([]);

    useEffect(() => {
        const fetchRelatedPost = async () => {
            try {
                const relatedPost = await getPost();
                console.log("Post Data:", relatedPost);
                if (Array.isArray(relatedPost)) {
                    setRelatedPost(relatedPost);
                } else {
                    getPost([]);
                    console.error("Failed to get posts: Invalid response structure");
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
                getPost([]);
            }

        };

        fetchRelatedPost();
    }, []);


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postDetails = await getPostDetail(id);
                console.log("Fetched Post Details:", postDetails);
                setPost(postDetails.post);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 bg-black">
            <div className="my-24 md:my-44 mx-5 md:mx-28">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-2">
                        <div className="space-y-2 md:space-y-10">
                            <div className="space-y-2">
                                <h1 className="text-lg text-left md:text-7xl text-white font-base">{post.judul}</h1>
                                <h1 className="text-base text-left md:text-2xl text-white font-base">{post.published_at}</h1>
                            </div>
                            <div className="w-full">
                                <img className="w-full h-full rounded-xl" src={`https://panel.custompedia.agency/storage/${post.img}`} alt="" />
                            </div>
                            <div>
                                <h1 className="text-base text-left md:text-3xl text-white font-base"
                                    style={{ textAlign: "justify" }}
                                >{post.content}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 md:space-y-8 my-8 md:my-36">
                        <div className="mx-auto">
                            <h1 className="text-base text-left md:text-center md:text-2xl text-white font-base">Related Post</h1>
                        </div>
                        <div className="md:p-4 space-y-5">
                            {relatedpost.map((post) => (
                                <div className="bg-gray-700 rounded-xl" key={post.id}>
                                    <div className="flex justify-between items-stretch">
                                        <div className="flex-shrink-0 w-40 h-40">
                                            <img
                                                className="w-full h-full rounded-xl object-cover"
                                                src={`https://panel.custompedia.agency/storage/${post.img}`}
                                                alt={post.judul}
                                            />
                                        </div>
                                        <div className="flex-grow my-auto text-left space-y-1 md:space-y-5 p-2">
                                            <div>
                                                <h1 className="text-white text-xs font-semibold">{post.judul}</h1>
                                                <h1 className="text-white text-xs font-light">{post.published_at}</h1>
                                            </div>
                                            <div>
                                                <h1 className="text-white text-xs font-light line-clamp-2">{post.content}</h1>
                                            </div>
                                            <div className="w-fit">
                                                <Link to={`/post/${post.id}`}>
                                                    <div className="p-1 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                                                        <h1 className='text-white font-semibold text-left md:px-2 px-1 md:text-xs'>Read More</h1>
                                                        <IoIosArrowForward className='text-white w-3 h-3.5 md:w-3 md:h-3' />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postdetail
