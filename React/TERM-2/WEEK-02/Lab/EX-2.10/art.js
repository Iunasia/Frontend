import figlet from "figlet";

figlet("Darren", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
