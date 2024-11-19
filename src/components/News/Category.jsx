import { getCategoryDetails, getCategory } from "../../api";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


function Category() {
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log("Category ID:", id); // Check if id is correct

        const fetchCategoryData = async () => {
            try {
                const categoryDetails = await getCategoryDetails(id);
                console.log("Fetched Category Details:", categoryDetails); // Debugging log
                setCategory(categoryDetails);
            } catch (error) {
                console.error('Error fetching category details:', error);
            }
        };

        fetchCategoryData();
    }, [id]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await getCategory();
                console.log("Fetched Categories:", categoryData); // Debugging log
                setCategories(categoryData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className='grid grid-cols-1 bg-black'>
            <div className="my-28 md:my-36 mx-2 md:mx-12">
                <div className="space-y-5 md:space-y-12 mx-0 md:mx-80">
                    <div className="flex gap-5">
                        <Link to="/news">
                            <h1 className="text-white text-xs md:text-2xl font-semibold">All Post</h1>
                        </Link>
                        {categories.map((category) => (
                            <div key={category.id}>
                                <Link to={`/categories/${category.id}`}>
                                    <h1 className="text-white text-xs md:text-2xl font-semibold">
                                        {category.category}
                                    </h1>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {category && category.categories && category.categories.posts && category.categories.posts.length > 0 ? (
                            category.categories.posts.map((post) => (
                                <div className="bg-gray-700 rounded-xl" key={post.id}>
                                        <div className="flex justify-between items-stretch">
                                            <div className="flex-shrink-0 w-44 h-52 md:w-72 md:h-80">
                                                <img
                                                    className="w-full h-full rounded-xl object-cover"
                                                    src={`https://panel.custompedia.agency/storage/${post.img}`}
                                                    alt={post.judul}
                                                />
                                            </div>
                                            <div className="flex-grow my-auto text-left space-y-3 md:space-y-10 p-2 md:p-4">
                                                <div className="">
                                                    <div className="my-auto">
                                                        <h1 className="text-white text-xs md:text-2xl font-semibold">{post.judul}</h1>
                                                        <h1 className="text-white text-xs md:text-sm font-light">{post.published_at}</h1>
                                                        
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1 className="text-white text-xs md:text-sm font-light line-clamp-2">{post.content}</h1>
                                                </div>
                                                <div className="w-fit">
                                                    <Link to={`/post/${post.id}`}>
                                                        <div className="p-1 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                                                            <h1 className='text-white font-semibold text-left md:px-4 px-2 text-xs md:text-xl'>Read More</h1>
                                                            <IoIosArrowForward className='text-white w-4 h-4 md:w-6 md:h-6' />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-white'>No posts available.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Category;
