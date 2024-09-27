import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='relative overflow-hidden h-64 w-64 rounded-full group shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10' />
					<img
						src={category.imageUrl}
						alt={category.name} // Ensure the alt text is descriptive
						className='w-full h-full object-cover rounded-full transition-transform duration-100 ease-out group-hover:scale-110'
						loading='lazy'
					/>
					<div className='absolute bottom-0 left-0 right-0 p-4 z-20 text-center'>
						<h3 className='text-white text-xl font-bold mb-1'>{category.name}</h3>
						<p className='text-gray-300 text-xs'>Explore {category.name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
