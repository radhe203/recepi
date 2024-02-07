import React, { Suspense, useContext, useState } from "react";
import "./RecipeView.css";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
  defer,
  Await,
} from "react-router-dom";
import { GetRecipe, getData } from "../../Context";

export function loader() {
  return defer({ data: getData() });
}

function RecipeView() {
  const dataPromise = useLoaderData();
  const id = useParams().id;

  const location = useLocation();
  const { AddBag } = useContext(GetRecipe);
  const search = location.state?.search || "";

  const [Nav, SetNav] = useState("steps");
  return (
    <>
      <Link to={`..${search}`} relative="path" className="goback">
        <h3>
          <span>&larr;</span>Go back to recipe
        </h3>
      </Link>

      <Suspense fallback={<h2
      style={{
        margin:'100px 0',
        textAlign:"center",
        color:"red"
      }}
      >Loading...</h2>}>
        <Await resolve={dataPromise.data}>
          {({ recipes }) => {
            const item = recipes.filter((e) => e.id === Number(id));
            return (
              <>
                <div className="recipe-view">
                  <img src={item[0].image} />
                  <div className="detail">
                    <div className="name">{item[0].name}</div>
                    <div className="cuisine">
                      Cuisine : <span>{item[0].cuisine}</span>
                    </div>
                    <div className="difficulty">
                      Diifficulty : <span>{item[0].difficulty}</span>
                    </div>
                    <div className="servings">
                      Serveings : <span>{item[0].servings}</span>
                    </div>
                    <div className="ingredients">
                      <div> Ingredients :</div>
                      {item[0].ingredients.map((e, i) => {
                        return <span key={i}>#{e}</span>;
                      })}
                    </div>
                    <div
                      className="hero-btn"
                      onClick={() => {
                        AddBag(item[0].id);
                      }}
                    >
                      Add to bag
                    </div>
                  </div>
                </div>
                <div className="detail">
                  <div className="links">
                    <span>
                      <Link
                        end
                        onClick={() => {
                          SetNav("steps");
                        }}
                      >
                        Steps
                      </Link>
                      {Nav === "steps" ? <hr /> : null}
                    </span>
                    <span>
                      {" "}
                      <Link
                        to={`health`}
                        onClick={() => {
                          SetNav("Health");
                        }}
                      >
                        Health
                      </Link>
                      {Nav === "Health" ? <hr /> : null}
                    </span>
                    <span>
                      <Link
                        to={`review`}
                        onClick={() => {
                          SetNav("Reviews");
                        }}
                      >
                        Reviews
                      </Link>
                      {Nav === "Reviews" ? <hr /> : null}
                    </span>
                  </div>
                  <Outlet context={{ item }} />
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default RecipeView;

{
  <hr />;
  /* <div className="steps">
        <h1>Please Follow These Steps</h1>
        <hr />

        <div className="real-steps">
          <ol type="1">
            {item[0].instructions.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ol>
        </div>
        <p>
          || Now you are done.you can serve it to{" "}
          <span>{item[0].servings}</span> pepoles. ||
        </p>
      </div> */
}
