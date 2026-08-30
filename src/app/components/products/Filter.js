"use client";
import { PRODUCTS_ROUTE } from "@/app/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
const DEFAULT_SORT = JSON.stringify({ createdAt: -1 }); //-1:Desc,1:Asc
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000000;
const ProductsFilter = () => {
  const router = useRouter();
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([]);
  function filterProducts() {
    const params = new URLSearchParams();
    params.set("sort", sort);
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("category", category);
    params.set("brands", brands.join(","));
    params.set("name", name);
    router.push(`?${params.toString()}`);
  }

  function handleBrandsFilterChange(brand) {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand],
    );
  }

  function resetFilter() {
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setCategory("");
    setName("");
    setBrands([]);
    router.push(PRODUCTS_ROUTE);
  }

  return (
    <aside className="shadow-md py-8 px-6 rounded-xl">
      <h3 className="font-semibold text-xl">Products Filter</h3>
      <div className="py-3">
        <h4 className="mb-1 font-semibold">Search</h4>
        <input
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md w-full px-2 py-1"
        />
      </div>

      <div className="py-3">
        <h4 className="mb-2 font-semibold">Sort By:</h4>
        <select
          name="sort"
          id="sort"
          className="border border-gray-300 rounded w-full px-2 py-1"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>
            Latest Products
          </option>
          <option value={JSON.stringify({ createdAt: 1 })}>
            Oldest Products
          </option>
          <option value={JSON.stringify({ price: 1 })}>
            Price:Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price:High to Low
          </option>
          <option value={JSON.stringify({ name: 1 })}>Name:A-Z</option>
          <option value={JSON.stringify({ name: -1 })}>Price:Z-A</option>
        </select>
      </div>

      <div className="py-3 flex flex-col">
        <h4 className="mb-2">Price Range</h4>
        <label htmlFor="min" className="text-xs text-gray-800">
          Minimum Price:
        </label>
        <input
          name="min"
          id="min"
          type="number"
          min={DEFAULT_MIN_PRICE}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-300 rounded-md  px-2 py-1 mt-1"
        />
        <label htmlFor="max" className="text-xs text-gray-800">
          Maximum Price:
        </label>
        <input
          name="max"
          id="max"
          type="number"
          min={DEFAULT_MIN_PRICE}
          max={DEFAULT_MAX_PRICE}
          className="border border-gray-300 rounded-md  px-2 py-1 mt-1"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="py-3">
        <h4 className="mb-2">Category</h4>
        <select
          name="category"
          id="category"
          className="border border-gray-300 rounded w-full px-2 py-1"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">select Category</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptops">Laptops</option>
          <option value="Speakers">Speakers</option>
          <option value="Keyboards">Keyboards</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <div className="py-3">
        <h4 className="mb-2">Brands</h4>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Apple"
            id="Apple"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Apple")}
          />
          <label htmlFor="Apple" className="text-sm text-gray-600">
            Apple
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Ultima"
            id="Ultima"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Ultima")}
          />
          <label htmlFor="Ultima" className="text-sm text-gray-600">
            Ultima
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Fantech"
            id="Fantech"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Fatech")}
          />
          <label htmlFor="Fantech" className="text-sm text-gray-600">
            Fantech
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Logitech"
            id="Logitech"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Logitech")}
          />
          <label htmlFor="Logitech" className="text-sm text-gray-600">
            Logitech
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Beats by Dr.Dre"
            id="Beats by Dr.Dre"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Beats by Dr.Dre")}
          />
          <label htmlFor="Beats by Dr.Dre" className="text-sm text-gray-600">
            Beats by Dr.Dre
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Lenovo"
            id="Lenovo"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Lenovo")}
          />
          <label htmlFor="Lenovo" className="text-sm text-gray-600">
            Lenovo
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Acer"
            id="Acer"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Acer")}
          />
          <label htmlFor="Acer" className="text-sm text-gray-600">
            Acer
          </label>
        </div>
        <div className="flex items-center flex-start gap-2">
          <input
            name="Google"
            id="Google"
            type="checkbox"
            onChange={() => handleBrandsFilterChange("Google")}
          />
          <label htmlFor="Google" className="text-sm text-gray-600">
            Google
          </label>
        </div>
      </div>

      <div className="py-3 space-y-2 flex flex-col">
        <button
          onClick={filterProducts}
          className="bg-primary text-white px-5 py-1 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
        >
          Filter Products
        </button>
        <button
          onClick={resetFilter}
          className="bg-red-500 text-white px-5 py-1 rounded-md cursor-pointer hover:bg-red-600 transition duration-300"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilter;
