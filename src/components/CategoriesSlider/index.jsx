import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

import { Grid, Pagination } from 'swiper/modules';
import CategoryCard from '../CategoryCard';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

export default function CategoriesSlider() {
    const { categoriesData, status } = useSelector((state) => state.categories);
    return (
        <>
        <Swiper
            slidesPerView={4}
            grid={{
            rows: 1,
            }}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
        >
            {status !== 'loading' ? (
                categoriesData.map((category) => (
                    <SwiperSlide key={category.id}>
                        <CategoryCard  {...category} />
                    </SwiperSlide>
                ))
            ) : (
                
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={index}>
                        <Skeleton variant="rectangular" width={320} height={350} />
                        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                    </div>
                ))   
            )}
        </Swiper>
        </>
    );
}
