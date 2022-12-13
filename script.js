let data = [
  {
    brand: "Plenty Of Time",
    category: "dress",
    price: 1200,
    img: "./Watch/img1.webp",
  },
  {
    brand: "Erubert men’s Time",
    category: "sport",
    price: 7990,
    img: "./Watch/img2.webp",
  },
  {
    brand: "King of Time",
    category: "luxury",
    price: 13400,
    img: "./Watch/img3.webp",
  },
  {
    brand: "Vintage Timepieces",
    category: "casual",
    price: 9999,
    img: "./Watch/img18.webp",
  },
  {
    brand: "Waterdam",
    category: "dress",
    price: 6500,
    img: "./Watch/img5.webp",
  },
  {
    brand: "Goldec",
    category: "sport",
    price: 3990,
    img: "./Watch/img6.webp",
  },
  {
    brand: "NODA ",
    category: "luxury",
    price: 1999,
    img: "./Watch/img7.webp",
  },
  {
    brand: "Xmen",
    category: "casual",
    price: 6363,
    img: "./Watch/img8.webp",
  },
  {
    brand: "Burgalobe",
    category: "dress",
    price: 999,
    img: "./Watch/img9.webp",
  },
  {
    brand: "TimeO",
    category: "sport",
    price: 19999,
    img: "./Watch/img10.webp",
  },
  {
    brand: "Zerjir ",
    category: "luxury",
    price: 5432,
    img: "./Watch/img11.webp",
  },
  {
    brand: "Crest",
    category: "casual",
    price: 5432,
    img: "./Watch/img12.webp",
  },
  {
    brand: "Linus ",
    category: "dress",
    price: 17777,
    img: "./Watch/img13.jpg",
  },
  {
    brand: "Lexxiv",
    category: "sport",
    price: 20000,
    img: "./Watch/img17.jpg",
  },
  {
    brand: "MyTime",
    category: "luxury",
    price: 2999,
    img: "./Watch/img15.jpg",
  },
  {
    brand: "Venus",
    category: "casual",
    price: 3333,
    img: "./Watch/img16.jpg",
  },
];

//FilterData will change as per category selection and price range
let filterData = [];

const input = document.querySelector("input[type='text']");

let productContainer = document.querySelector(".productContainer");

const FilterList = document.querySelectorAll("li");

const range = document.querySelector("input[type='range']");

const label = document.querySelector("label");

// Search the product as per input value
input.addEventListener("keyup", (e) => {
  let filterData = SearchProduct(e.target.value);

  RenderProduct(filterData);
});

// SearchFunction for input
const SearchProduct = (name) => {
  filterData = data.filter((ele) =>
    ele.brand.toLowerCase().includes(name.toLowerCase())
  );

  return filterData;
};

//Filter function as per category
const FilterCategory = (category) => {
  filterData =
    category !== "all"
      ? data.filter((item) => item.category === category)
      : data;

  return filterData;
};

// FilterFunction as per price
const FilterPrice = (range) => {
  filterData = data.filter((item) => item.price < range);

  return filterData;
};

//This will render the product
const RenderProduct = (filterData) => {
  let NodeItem = filterData.map((item) => {
    return `
  <div class="product">
  <img src=${item.img} alt="" />
  <h3>${item.brand}</h3>
  <p>₹${item.price}</p>
</div>
  
  `;
  });

  return (productContainer.innerHTML = NodeItem.join(" "));
};

// Below code will work as we click on category
FilterList.forEach((item) => {
  item.addEventListener("click", (e) => {
    FilterList.forEach((item) => {
      item.style.fontWeight = "300";
    });

    let Menu = e.target.innerText.toLowerCase();

    e.target.style.fontWeight = "700";

    let NewData = FilterCategory(Menu);

    RenderProduct(NewData);
  });
});

// Below code will work as we change category
range.addEventListener("change", (e) => {
  console.log(range.value);

  let NewData = FilterPrice(range.value);

  label.innerText = `₹${range.value}`;

  RenderProduct(NewData);
});

RenderProduct(data);
