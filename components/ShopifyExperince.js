export default function ShopifyExperince() {
    const customApps = [
        {
            title: "Collection Sorting Optimizer",
            description: "Advanced sorting and filtering system that optimizes product collections based on multiple criteria including sales velocity, inventory levels, and custom business rules. Improves product discovery and conversion rates.",
            tech: "Remix.js, React, Shopify Admin API, TypeScript",
            borderColor: "border-blue-500",
            textColor: "text-blue-600"
        },
        {
            title: "Product Favorites System",
            description: "Comprehensive wishlist functionality allowing customers to save products across sessions with Shopify customer account integration. Includes email notifications and analytics dashboard for merchants.",
            tech: "Remix.js, React, Shopify GraphQL, Polaris, TypeScript, Shopify Theme App Extension",
            borderColor: "border-green-500",
            textColor: "text-green-600"
        },
        {
            title: "Stock Alert & Notification Platform",
            description: "Automated notification system that alerts customers when out-of-stock products become available or when products go on sale. Includes merchant dashboard for managing notification campaigns.",
            tech: "Remix.js, React, Shopify GraphQL, Polaris, TypeScript, Shopify Theme App Extension",
            borderColor: "border-purple-500",
            textColor: "text-purple-600"
        },
        {
            title: "Cargo Shipping Integration",
            description: "Shipping add-on that integrates with major cargo providers for  label generation, and tracking. Includes carrier selection.",
            tech: "Remix.js, React, Shopify Admin Action, TypeScript",
            borderColor: "border-orange-500",
            textColor: "text-orange-600"
        }
    ];

    const extensionsAndFunctions = [
        {
            title: "Checkout UI Extensions",
            description: "Custom checkout modifications including Turkey-specific address fields, corporate invoice fields, upsell components, and shipping customization.",
            tech: "Shopify Checkout Extensions API, React, TypeScript, Shopify CLI",
            textColor: "text-blue-600"
        },
        {
            title: "Discount Functions",
            description: "Complex discount logic using Shopify Functions API. Created volume discounts, bundle pricing and promotional combinations.",
            tech: "Shopify Functions API, JavaScript",
            textColor: "text-green-600"
        },
        {
            title: "Cart Transform Functions",
            description: "Dynamic cart manipulation for product bundling, automatic gift additions, and cart-level promotions.",
            tech: "Shopify Functions API, JavaScript",
            textColor: "text-purple-600"
        },
        {
            title: "Admin UI Extensions",
            description: "Custom merchant-facing interfaces embedded in Shopify Admin for managing app settings, viewing analytics, and configuring automation.",
            tech: "Shopify App Bridge, React, Polaris",
            textColor: "text-orange-600"
        }
    ];

    return (
        <section
            className=" py-24 sm:py-32 relative isolate overflow-hidden"
            id="experience"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl mb-6 text-center font-bold tracking-tight  md:text-4xl max-w-[500px] mx-auto ">
                        Shopify Apps & Extensions
                    </h2>


                    <div className="mx-auto  max-w-5xl  border  py-16 px-8 rounded-xl w-full">
                        <h3 className="text-lg mb-6 text-center font-semibold md:text-xl max-w-[500px] mx-auto">Custom Shopify Applications</h3>

                        <div className="space-y-8">
                            {customApps.map((app, index) => (
                                <div key={index} className={`border-l-4 ${app.borderColor} pl-6 text-center md:text-left`}>
                                    <h4 className="text-base md:text-lg   font-semibold mb-2">{app.title}</h4>
                                    <p className="text-sm md:text-base text-gray-600 mb-2">{app.description}</p>
                                    <p className={`text-xs md:text-sm ${app.textColor} font-medium`}>Technologies: {app.tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                        <div className="mx-auto  max-w-5xl  border  py-16 px-8 rounded-xl w-full mt-6 ">
                        <h3 className="text-lg mb-6 text-center font-semibold  md:text-xl max-w-[500px] mx-auto ">Shopify Functions & Extensions</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {extensionsAndFunctions.map((item, index) => (
                                <div key={index} className="bg-gray-100 p-6 rounded-lg text-center md:text-left">
                                    <h4 className="text-base md:text-lg font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm md:text-base text-gray-600 mb-2">{item.description}</p>
                                    <p className={`text-xs md:text-sm ${item.textColor} font-medium`}>Technologies: {item.tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}


