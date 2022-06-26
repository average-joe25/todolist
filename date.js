module.exports={getDate:getDate};
function getDate(){
  const d = new Date();
  let options={
    weekday: "long",
    day: "numeric",
    month:"long",
    year:"numeric"
  };
  return d.toLocaleDateString("en-IN",options);
}
