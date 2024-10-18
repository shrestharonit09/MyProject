import React from "react";
import Cardnews from "./Cardnews";

// const minlength=(any)=>{
//   return Math.min(...any.map((value)=>value.length))
// }

const Datanews = (props) => {
  const data = props.data || []; // data undefine xa vane empty array assign garxa ...// title removed raixa xyaaa testo case lai handle garna empty array use gareko....
  //  const titlelength=minlength(data.map((value)=>value.title));
  //  const desclength=minlength(data.map((value)=>value.description))

  return (
    <div className="flex justify-center ml-12">
      <div className="grid grid-cols-3 gap-8 w-3/4">
        {data
          // .filter((value) => value.urlToImage && value.description)
          .map((value) => (
            <Cardnews
              source={value?.source?.name ? value.source.name : "No Source"}
              author={value?.author ? value.author : "Ronit Shrestha"}
              title={
                value?.title
                  ? value.title
                  : "Working on title and will be published soon"
              }
              description={value?.description?value.description:"Due to some technical fault , we are updating description soon"}
              url={value.url}
              image={value?.urlToImage?value.urlToImage:"https://images.businessnewsdaily.com/app/uploads/2022/04/04081912/Mobile-UX-website-design_scyther5_Getty-Images_BDC.png"}
              publishdate={
                value?.publishedAt ? value.publishedAt : "2024-12-32"
              }
              // titlelength={titlelength}
              // desclength={desclength}
            />
          ))}
      </div>
    </div>
  );
};

export default Datanews;
