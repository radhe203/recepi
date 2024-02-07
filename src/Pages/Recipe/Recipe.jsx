import React, { useEffect, useRef, useState, Suspense } from "react";
import "./Recipe.css";
import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import { getData } from "../../Context";
import { FaAngleDown } from "react-icons/fa";
export function loader() {
  return defer({ data: getData() });
}
function Recipe() {
  const recipePromise = useLoaderData();
  const [searchParams, setsearchparams] = useSearchParams();
  const [value, setvalue] = useState("Apply Filter");

  function setQuery(e) {
    let opt = e;
    setsearchparams((prevParams) => {
      if (opt === null || opt === "Clear") {
        prevParams.delete("level");
        setvalue("Apply Filter");
      } else {
        prevParams.set("level", opt);
        setvalue(opt);
      }

      return `?${prevParams}`;
    });
  }

  const type = searchParams.get("level");

  return (
    <>
      <div className="recipe-wraper">
        <div className="filter">
          <span>Filter</span>
          <span className="filter-list">
            <input type="text" value={value} disabled />
            <div className="opt">
              <span
                onClick={() => {
                  setQuery("Easy");
                }}
              >
                Easy
              </span>
              <span
                onClick={() => {
                  setQuery("Medium");
                }}
              >
                Medium
              </span>
              <span
                onClick={() => {
                  setQuery("Hard");
                }}
              >
                Hard
              </span>
              <span
                onClick={() => {
                  setQuery("Clear");
                }}
              >
                Clear
              </span>
            </div>
          </span>
        </div>
        <h1>Our Top Recipes</h1>
        <hr />
        <Suspense
          fallback={
            <h2 style={{ color: "red", margin: "100px 0" }}>Please Wait...</h2>
          }
        >
          <Await resolve={recipePromise.data}>
            {({ recipes }) => {
              console.log(recipes);
              const filtered = type
                ? recipes.filter((e) => e.difficulty === type)
                : recipes;
              let items;

              filtered.length > 0
                ? (items = filtered.map((item, index) => {
                    return (
                      <Link
                        to={`${item.id}`}
                        key={index}
                        state={{
                          search: `?${searchParams.toString()}`,
                        }}
                      >
                        <div className="item">
                          <div className="item-image">
                            <img src={item.image} />
                          </div>
                          <h3>{item.name}</h3>

                          <div className="timing">
                            {item.cookTimeMinutes}
                            <small>/Min</small>
                          </div>

                          <div className="level">{item.difficulty}</div>
                          <div className="rating">Ratings: {item.rating}</div>
                          <div className="tags">
                            {item.tags.map((e, i) => {
                              return <span key={i}>{e}</span>;
                            })}
                          </div>
                        </div>
                      </Link>
                    );
                  }))
                : (items = <h2>No Recipe Found</h2>);
              return <div className="recipe">{items}</div>;
            }}
          </Await>
        </Suspense>
      </div>
    </>
  );
}

export default Recipe;

// Apply Filter <FaAngleDown />
