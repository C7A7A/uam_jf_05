const getLightColor = (bgColor) => {
  if (bgColor === "bg-success") return "green"
  if (bgColor === "bg-warning") return "yellow"
  if (bgColor === "bg-danger") return "red"
}

export default getLightColor