const Storage = {
  setItem: (key, data) => {
    localStorage.setItem(
      key,
      JSON.stringify(data)
    )
  },
  getItem: (key) => {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
  },
  itemInStorage:(keyItem ,data) => {
    const itemInLocal = localStorage.getItem(keyItem)

    const parsedItem = JSON.parse(itemInLocal)

    const noItemInLocal = parsedItem ? Object.keys(parsedItem).length === 0 : true ;
    console.log("No item in Local: ",noItemInLocal)
    const noItemInState = data ? Object.keys(data).length === 0 :true;
    console.log("No item in state: ",noItemInState)
    const hasItemLocalAndState = !noItemInLocal || !noItemInState;
    console.log("Has item local and state: ",hasItemLocalAndState)
    return hasItemLocalAndState;
  },
};

export { Storage };
