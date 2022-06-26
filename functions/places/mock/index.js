const antwerp = require("./antwerp.js");
const chicago = require("./chicago.js");
const toronto = require("./toronto.js");
const san_francisco = require("./san_francisco.js");

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

const mockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2022/06/feasting-on-vietnamese-traditional-food-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/06/mini-plum-pomogranate-galette-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/08/friends-having-pizza-in-a-restaurant-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/05/how-to-make-ramen-soup-at-home-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/pumpkin-soup-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/09/tacos-with-pulled-pork-fresh-vegetables-and-cream-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/avocado-tree-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2015/08/celebration-savory-deli-food-2-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2015/08/celebration-savory-deli-food-3-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/10/carrot-cake-with-fresh-fruits-777x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/11/fresh-beef-burger-takeaway-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/06/small-donut-with-raspberry-on-top-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/01/pizza-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-sub-sandwiches-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2018/12/green-salad-with-hemp-seeds-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2017/07/simple-american-style-burger-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/pizza-684x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/02/small-salad-as-a-side-dish-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2018/05/grilling-meat-skewers-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2018/08/vibrant-shot-of-feasting-on-chinese-steamed-and-fried-dim-sum-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/01/pretty-strawberry-smoothie-bowl-800x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-white-toast-fried-egg-1024x819.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2015/05/raw-beef-steaks-3-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2017/07/fresh-lime-margarita-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/03/korean-fried-chicken-burgers-krispy-chook-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/06/tambaqui-grelhado-com-cuscuz-marroquino-1024x768.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2015/07/colorful-sushi-in-a-black-box-3-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2017/11/falafel-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/10/pistachio-croissant-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2015/07/double-beef-burger-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/11/cheese-burger-with-fried-onion-on-a-tray-1-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/07/veggie-tacos-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/07/english-breakfast-1024x691.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2018/12/green-salad-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2018/08/eating-high-protein-brunch-with-poached-eggs-beans-and-bacon-1-1024x683.jpg",  
  "https://www.foodiesfeed.com/wp-content/uploads/2017/07/orange-and-yellow-macarons-with-flowers-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/12/meatball-noodle-769x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/11/homemade-french-fries-with-burger-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2017/07/fancy-dinner-with-seafood-pasta-and-crayfish-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/05/lamen-com-tomates-uva-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/05/pasta-tomatoes-and-other-italian-ingredients-1-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/08/pizza-salami-close-up-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/07/grilling-vegetables-at-street-food-market-1-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/01/strawberry-mango-peach-smoothies-719x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/09/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables-1-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/04/octopus-at-a-fish-market-1024x683.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/07/herb-roasted-chicken-701x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2018/06/beef-1024x683.jpg",
];


module.exports.addMockImage = (restaurant) => {
	const randomImage = mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    restaurant.photos = [randomImage];

	return restaurant;
}