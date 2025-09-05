import React, { useEffect, useState } from 'react'
import FoodImageCarousel from "../../components/FoodItems/FoodImage";
import FoodItem from '../../components/FoodItems/FoodItem';
import Styles from "./RestaurantPageItem.module.css";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
const RestaurantPageItem = ({ restaurant }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');
    const [cusineCategory, setCusineCategory] = useState("");
    const [cusineFood, setCusineFood] = useState([]);

    // Set default category when restaurant changes
    useEffect(() => {
        if (restaurant?.cusines?.length > 0) {
            setCusineCategory(restaurant.cusines[0].category); // ✅ default first category
            setCusineFood(restaurant.cusines[0].food);         // ✅ default first food list
        }
    }, [restaurant]);

    // Update food when category changes
    useEffect(() => {
        if (cusineCategory) {
            const food = restaurant.cusines.find(item => item.category === cusineCategory);
            if (food) setCusineFood(food.food);
        }
    }, [cusineCategory, restaurant]);

    const cusineCategoryHandler = (category) => {
        setCusineCategory(category);

    }

    return (
        <div className={Styles['restaurant-item-page-fix']}>
            <div className={Styles['carousel']}>
                <FoodImageCarousel
                    address={restaurant.address}
                    imageUrl={restaurant.coverImage}
                    name={restaurant.name}
                    contact={restaurant.contact}
                    cusines={restaurant.cusines}
                />

                {/* Tabs */}
                <div className={Styles['tabs-container']}>
                    <div
                        className={`${Styles["tab-item"]} ${activeTab === "Overview" ? Styles["active-tab"] : ""}`}
                        onClick={() => {
                            setActiveTab("Overview");
                            navigate(`/app/${restaurant._id}`);
                        }}
                    >
                        Overview
                    </div>

                    <NavLink
                        to="reviews"
                        className={({ isActive }) =>
                            `${Styles['tab-item']} ${isActive ? Styles['active-tab'] : ""}`
                        }
                    >
                        Reviews
                    </NavLink>

                    <div
                        className={`${Styles['tab-item']} ${activeTab === "Photos" ? Styles['active-tab'] : ""}`}
                        onClick={() => {
                            setActiveTab("Photos")
                            navigate(`/app/${restaurant._id}`);
                        }}
                    >
                        Photos
                    </div>

                    <div
                        className={`${Styles['tab-item']} ${activeTab === "Menu" ? Styles['active-tab'] : ""}`}
                        onClick={() => {
                            setActiveTab("Menu")
                            navigate(`/app/${restaurant._id}`);
                        }}
                    >
                        Menu
                    </div>
                </div>


                {/* Tab Content */}
                <div className={Styles['tab-content']}>
                    {activeTab === 'Overview' && (
                        <div className='cusines-container'>
                            <div className={Styles['cusines']}>
                                <div className={Styles['cusines-category']}>
                                    {
                                        restaurant.cusines.map((item, indx) =>
                                            <div
                                                className={(item.category === cusineCategory) ? `${Styles['active-category']} ${Styles['cusines-category-item']}` : `${Styles['cusines-category-item']}`}
                                                onClick={(ev) => { cusineCategoryHandler(item.category) }}
                                                key={indx}

                                            >
                                                {item.category}
                                            </div>
                                        )}
                                </div>
                                <div className={Styles['cusines-food']}>
                                    {cusineFood.length > 0 && cusineFood.map((item, indx) => <div className={Styles['cusines']}
                                        key={indx}>
                                        <FoodItem
                                            food={item}
                                            category={cusineCategory}
                                            restaurantName={restaurant.name}
                                        />
                                    </div>)}
                                    {cusineFood.length === 0 && <div className={Styles['cusines']}>No Food under this category</div>}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Reviews' && (
                        <div>
                            <h4>Reviews Section</h4>
                            {/* Render restaurant reviews here
                            {restaurant.reviews?.length > 0 ? restaurant.reviews.map((rev, idx) => (
                                <div key={idx} className={Styles['review-item']}>
                                    <strong>{rev.user}:</strong> {rev.comment}
                                </div>
                            )) : <p>No reviews yet.</p>} */}
                            {/* <Outlet / */}
                        </div>
                    )}

                    {activeTab === 'Photos' && (
                        <div>
                            <h4>Photos Section</h4>
                            {/* Render restaurant photos */}
                            {restaurant.images?.length > 0 ? restaurant.images.map((photo, idx) => (
                                <img key={idx} src={photo.url} alt={`photo-${idx}`} className={Styles['restaurant-photo']} />
                            )) : <p>No photos available.</p>}
                        </div>
                    )}

                    {activeTab === 'Menu' && (
                        <div>
                            <h4>Menu Section</h4>
                            {/* You can reuse the cusines list or show full menu */}
                            {restaurant.cusines.map((item, indx) => (
                                <div key={indx} className={Styles['menu-category']}>
                                    <h5>{item.category}</h5>
                                    {item.food.map((f, idx) => (
                                        <FoodItem
                                            key={idx}
                                            food={f}
                                            category={item.category}
                                            restaurantName={restaurant.name}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RestaurantPageItem

{/* <div className='cusines-container'>
                <h4 className={Styles['cusines-heading']}>Select Your Delicious Cusine</h4>
                <div className={Styles['cusines']}>
                    <div className={Styles['cusines-category']}>
                        {
                            restaurant.cusines.map((item, indx) =>
                                <div
                                    className={(item.category === cusineCategory) ? `${Styles['active-category']} ${Styles['cusines-category-item']}` : `${Styles['cusines-category-item']}`}
                                    onClick={(ev) => { cusineCategoryHandler(item.category) }}
                                    key={indx}

                                >
                                    {item.category}
                                </div>
                            )}
                    </div>
                    <div className={Styles['cusines-food']}>
                        {cusineFood.length > 0 && cusineFood.map((item, indx) => <div className={Styles['cusines']}
                            key={indx}>
                            <FoodItem
                                food={item}
                                category={cusineCategory}
                                restaurantName={restaurant.name}
                            />
                        </div>)}
                        {cusineFood.length === 0 && <div className={Styles['cusines']}>No Food under this category</div>}
                    </div>
                </div>
            </div> */}