import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Filters = () => {
  const { setFilter } = useContext(UserContext);

  console.log();

  const columnNames = [
    { name: "author" },
    { name: "title" },
    { name: "article_id" },
    { name: "created_at" },
    { name: "votes" },
    { name: "comment_count" },
  ];

  const columns = [
    { name: "Author" },
    { name: "Title" },
    { name: "Article Id" },
    { name: "Date" },
    { name: "Votes" },
    { name: "Comment Count" },
  ];

  function handleFilter(value) {
    setFilter((prevData) => ({
      ...prevData,
      ["sort_by"]: value,
    }));
  }

  function handleOrder(value) {
    setFilter((prevData) => ({
      ...prevData,
      ["order"]: value,
    }));
  }

  return (
    <section className="mt-5 text-[#0540F2] text-base px-1 pt-3 mr-[9vw] w-[11%] flex justify-between">
      <div className="dropdown-sort">
        <button className="dropbtn-sort">Sort By</button>
        <div className="dropdown-content-sort">
          {columnNames.map((column, i) => (
            <Link
              key={column.name}
              className="link-sort"
              to={"/"}
              onClick={() => handleFilter(column.name)}
            >
              {columns[i].name}
            </Link>
          ))}
        </div>
      </div>
      <div className="dropdown-sort">
        <button className="dropbtn-sort ">Order</button>
        <div className="dropdown-content-sort">
          <Link
            className="link-sort"
            to={`/`}
            onClick={() => handleOrder("desc")}
          >
            Descending
          </Link>
          <Link
            className="link-sort"
            to={`/`}
            onClick={() => handleOrder("asc")}
          >
            Ascending
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Filters;
