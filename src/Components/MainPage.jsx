
function MainPage() {
    return (
        <main className="hero"  >
            <div className="her-content">
                <h1> YOUR FEET DESERVE THE BEST </h1>
                <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>

                <div className="hero-btn">
                    <button id="shop-btn">ShopNow</button>
                    <button id="category-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="shop-icons">
                        <img src="/public/amazon.png" />
                        <img src="/public/flipkart.png" />
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img src="/public/shoe_image.png" alt="" />
            </div>
        </main>
    )
}

export default MainPage