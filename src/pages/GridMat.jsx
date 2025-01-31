import React from 'react';

const GridMat = () => {
    return (
        <div className="gridmat-container container mx-auto p-4">
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white py-16 mb-8">
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="text-4xl font-bold text-center relative z-10">GridMat for Roads</h1>
                <p className="text-lg text-center relative z-10 mt-4">
                    Discover the innovative material that is transforming road construction.
                </p>
            </div>

            <img 
                src="https://static.wixstatic.com/media/59c0e8_ec68d75c5a034e54a8ac84aaaefdbb63~mv2.jpg/v1/fill/w_980,h_811,al_c,q_90,enc_avif,quality_auto/59c0e8_ec68d75c5a034e54a8ac84aaaefdbb63~mv2.jpg" 
                alt="GridMat Overview" 
                className="gridmat-image mb-4 w-full h-auto rounded-lg shadow-md"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                    <img 
                        src="https://static.wixstatic.com/media/2a6e23_c34d8f63c6bf42e78a07a4966d512722~mv2.png/v1/crop/x_448,y_416,w_490,h_802,q_95,enc_avif,quality_auto/2a6e23_c34d8f63c6bf42e78a07a4966d512722~mv2.png" 
                        alt="GridMat Material" 
                        className="gridmat-image w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="mt-2 text-center">GridMat Material - Durable and Strong</p>
                </div>
                <div className="flex flex-col items-center">
                    <img 
                        src="https://static.wixstatic.com/media/2a6e23_8b2ae6aeca8942bdbf60d2e52c908283~mv2.jpg/v1/fill/w_490,h_802,al_c,q_90,enc_avif,quality_auto/2a6e23_8b2ae6aeca8942bdbf60d2e52c908283~mv2.jpg" 
                        alt="GridMat Application" 
                        width="490" 
                        height="802" 
                        className="gridmat-image w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="mt-2 text-center">GridMat Application - Effective Road Construction</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex flex-col items-center">
                    <img 
                        src="https://static.wixstatic.com/media/2a6e23_f5a9db99cda540d7bbe963b35cbd3e67~mv2.jpeg/v1/crop/x_0,y_0,w_2706,h_1507/fill/w_722,h_402,al_c,q_90,enc_avif,quality_auto/97B295F5-A2B2-4918-AE18-1E09E92AC01A.jpeg" 
                        alt="GridMat Image 1" 
                        width="722" 
                        height="402" 
                        loading="lazy" 
                        className="gridmat-image w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="mt-2 text-center">GridMat Overview - Visual Representation</p>
                </div>
                <div className="flex flex-col items-center">
                    <img 
                        src="https://static.wixstatic.com/media/2a6e23_4b55b5b0e09145fcbfe1f2b1fc60154a~mv2.png/v1/fill/w_932,h_262,al_c,q_95,enc_avif,quality_auto/GridMats%20Value%20prop_PNG.png" 
                        alt="GridMats Value Proposition" 
                        width="932" 
                        height="262" 
                        loading="lazy" 
                        className="gridmat-image w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="mt-2 text-center">GridMats Value Proposition</p>
                </div>
                <div className="flex flex-col items-center">
                    <img 
                        src="https://static.wixstatic.com/media/2a6e23_13e762d0fe5a4b28b3002ee41b5be560~mv2.png/v1/fill/w_600,h_242,al_c,q_95,enc_avif,quality_auto/Comparisions%20GridMats_PNG.png" 
                        alt="Comparisons of GridMats" 
                        width="600" 
                        height="242" 
                        loading="lazy" 
                        className="gridmat-image w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="mt-2 text-center">Comparisons of GridMats</p>
                </div>
            </div>

            <div className="flex flex-col items-center mt-6">
                <img 
                    src="https://static.wixstatic.com/media/2a6e23_f2cd9e70a2734672b1297a808cb03312~mv2.jpeg/v1/crop/x_0,y_12,w_1882,h_926/fill/w_624,h_307,al_c,q_90,enc_avif,quality_auto/90A01048-3E61-4203-9CAC-6C840A29283E.jpeg" 
                    alt="Environmental Impact & SDG GridMats" 
                    width="624" 
                    height="307" 
                    loading="lazy" 
                    className="gridmat-image w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-2 text-center">Environmental Impact & SDG GridMats</p>
            </div>

            <p className="mt-4 text-center">
                GridMat is a high-performance material designed for road construction. 
                It is made from durable polymers that provide excellent strength and stability. 
                The use of GridMat helps in reducing the amount of asphalt needed, 
                thereby lowering costs and environmental impact. 
                Its unique design allows for better drainage and reduces the risk of potholes.
            </p>
        </div>
    );
};

export default GridMat; 