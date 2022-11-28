import Carousel from 'react-bootstrap/Carousel';

function CarouselNoticias() {
    return (
        <Carousel>
            <Carousel.Item  interval={5000}>
                <h2 class="blog-post-title mb-1">Sample blog post</h2>
                <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                <p>
                    This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.
                </p>
               
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <h2 class="blog-post-title mb-1">Sample blog post</h2>
                <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                <p>
                    This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.
                </p>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <h2 class="blog-post-title mb-1">Sample blog post</h2>
                <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                <p>
                    This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.
                </p>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselNoticias;