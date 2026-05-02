//reduce function

const Utils = FoodList => {
  return (FoodList || []).reduce(
    //callback
    (total, item) =>
      //obj
      ({
        fat: total.fat + parseFloat(item.kcal || 0),
        carbs: total.carbs + parseFloat(item.gram || 0),
        protein: total.protein + parseFloat(item.number || 0),
      }),
    //initial value
    { fat: 0, carbs: 0, protein: 0 },
  );
};
export default Utils;
