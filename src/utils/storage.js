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
  itemInStorage:(keyItem, dataOfState) => {
    const itemInLocal = localStorage.getItem(keyItem)
    console.log("Item in local: ",itemInLocal)

    const parsedItem = JSON.parse(itemInLocal)
    
    console.log("Item in state: ",dataOfState)

    const noItemInLocal = parsedItem ? Object.keys(parsedItem).length === 0 : true ;
    const noItemInState = dataOfState ? Object.keys(dataOfState).length === 0 :true;
    const hasItemLocalAndState = !noItemInLocal || !noItemInState;

    return hasItemLocalAndState;
  },
};

export { Storage };
