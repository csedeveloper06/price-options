import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
      {
        "id": "1",
        "name": "Basic Membership",
        "features": [
          "Unlimited access to gym equipment",
          "Locker room access",
          "24/7 gym access",
          "Basic fitness classes",
          "Dedicated cardio area",
          "Free Wi-Fi",
          "Discounted personal training sessions"
        ],
        "price": 29.99
      },
      {
        "id": "2",
        "name": "Silver Membership",
        "features": [
          "All Basic Membership benefits",
          "Access to sauna and steam room",
          "Personalized workout plans",
          "Nutritional counseling",
          "Access to group fitness classes",
          "Towel service",
          "Complimentary smoothie bar"
        ],
        "price": 49.99
      },
      {
        "id": "3",
        "name": "Gold Membership",
        "features": [
          "All Silver Membership benefits",
          "Access to swimming pool",
          "Unlimited premium fitness classes",
          "Priority booking for trainers",
          "Access to spa facilities",
          "Complimentary personal training session per month",
          "VIP parking"
        ],
        "price": 79.99
      }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption
                     key={option.id} 
                     option={option}
                     ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;