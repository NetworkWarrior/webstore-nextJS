'use client'
export default function Products(){
    const stickerDescription = {
        CSS_HTML_Javascript: "Core web technologies for structure, styling, interactivity.",
        Docker: "Platform for containerzing, deploying, and scaling applications.",
        Firebase: "Cloud platform for databases, authentication, and app backend.",
        NextJS: "Cloud platform for databases, authentication, and app backend.",
        NodeJS: "Cloud platform for databases, authentication, and app backend.",
        PostgreSQL: "Cloud platform for databases, authentication, and app backend.",
        ReactJS: "Cloud platform for databases, authentication, and app backend."

    }
    const stickers = Object.keys(stickerDescription)


    return (
        <>
            <div className="section-container">
                <div className="section-header">
                    <h2>Shop Our Selections</h2>
                    <p>From organization or accesorization</p>
                </div>
                <div className="planner-content">
                    <div>
                        <button className="img-button">
                        <img src="low_res/planner.jpeg" alt="high-res-planner" />
                        </button>
                    </div>
                    <div className="planner-info">
                        <p className="text-large planner-header">Medieval Dragon Month Planner</p>
                        <h3><span>$</span>4.99</h3>
                        <p>Step into a realm of fantasy and organization with our 
                        <strong>Medieval Dragon Month Planner</strong>! 
                        This high-resolution PNG asset combines the fierce 
                        elegance of dragons with intricate medieval designs to create a 
                        planner that's not only functional but also a work of art. Whether you&apos;re 
                        jotting down quests, planning battles, or just scheduling your weekly grocery run, 
                        this planner is your ultimate companion.</p>
                        <ul>
                            <li><strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon motifs and medieval-inspired borders make every month feel legendary.
                            </li>
                            <li>
                                <strong>Fully Printable:</strong> Designed at ultra-high resolution, it&apos;s perfect for printing on any size paper, from A4 to poster-sized displays.
                            </li>
                        </ul>
                        <div className="purchase-btns">
                            <button onClick={() => {
                                const plannerPriceId = planner.default_price
                                handleIncrementProduct(plannerPriceId, 1, planner)
                            }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2>Or Collect Your Favourite Tech</h2> {/* or Favorite, depending on spelling */}
                    <p>Choose from our custom designed tech logos</p>
                </div>
                <div className="sticker-container">
                    {stickers.map((sticker, stickerIndex) => {
                    return (
                        <div key={stickerIndex} className="sticker-card">
                        <button className="img-button">
                            <img src={`low_res/${sticker}.jpeg`} alt="..." /> 
                        </button>
                        <div className="sticker-info">
                            <p className="text-medium">
                                {sticker.replaceAll("_", '')} Sticker.png
                            </p>
                            <p>{stickerDescription[sticker]}</p>
                            <h4><span>$</span>5.99</h4>
                            <button>Add to cart</button>
                        </div>
                        </div>
                    );
                    })}
                </div>
            </div>

        </>
    )
}