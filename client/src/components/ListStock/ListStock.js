import React from "react";

import "./ListStock.css";
import StockCard from "../StockCard/StockCard";

const ListStock = () => {
  const stockList = [
    {
      name: "Tesla",
      symbol: "TSLA",
      img: "data:image/png;base64,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",
    },
    {
      name: "Apple",
      symbol: "AAPL",
      img: "data:image/png;base64,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",
    },
    {
      name: "Amazon",
      symbol: "AMZN",
      img: "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzA4XFxcLzA2MTUzOTM0XFxcL2FtYXpvbi5qcGdcIixcIndpZHRoXCI6NzAwLFwiaGVpZ2h0XCI6MzcwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz9pZD0wZDJkNjI3YzA1OWI5ZWRjYWIwZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIwZGZjNWM4M2QwYTdkMmQ3OTc3MjY1NjQzMjFkNjRjYzk5OGYyYzMxIn0=/amazon.jpg",
    },
    {
      name: "Netflix",
      symbol: "NFLX",
      img: "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png",
    },
    {
      name: "Alphabet",
      symbol: "GOOG",
      img: "https://media.wired.com/photos/59548f5f5578bd7594c46595/191:100/w_1280,c_limit/Ok5proj7dcVBHsWB4lAcKA7FoThQHIoDxaE4UByKQ3GgOBQHikNxoDgUh-JAcSgOFIfiQHEoDsWB4lAc4PsD-35JiLwLXcEAAAAASUVORK5CYII.jpg",
    },
    {
      name: "Facebook",
      symbol: "FB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png",
    },
  ];
  return (
    <div className="ListStock">
      <div className="Stock-cards row">
  
        {stockList.map((stock) => (
          <div className="col-lg-4 col-12">
          <StockCard name={stock.name} symbol={stock.symbol} iurl={stock.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListStock;