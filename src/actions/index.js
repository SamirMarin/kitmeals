export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALANDER = 'REMOVE_FROM_CALANDER'

export function addRecipe ({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}

export function removeFromCalander ({ day, meal }) {
  return {
    type: REMOVE_FROM_CALANDER,
    day,
    meal,
  }
}
