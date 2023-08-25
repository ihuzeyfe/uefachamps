


function ClubsItem({image, name, content, birth}) {
  return (
    <div className="clubsItem">
      <div className="cardImage" > <img src={image} alt=""/></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p>{birth}</p>
    </div>
  );
}

export default ClubsItem;
