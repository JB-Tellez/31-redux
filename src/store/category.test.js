import reducer, { addCategory, CATEGORY_CREATE } from '../store/category';

describe('category state', () => {

  describe('actions', () => {

    it('should create add action', () => {

      const category = {name:'food', budget:100};

      const action = addCategory(category);

      expect(action.type).toBe(CATEGORY_CREATE);

      expect(action.payload).toEqual(category);
    });

    // rinse/repeat for other actions

  });

  describe('reducer', () => {

    it('should add to empty list', () => {

      const category = {name:'food', budget:100};

      const action = addCategory(category);

      const state = reducer({categories:[]}, action);

      expect(state.categories.length).toBe(1);

      expect(state.categories[0].name).toBe(category.name);

    });
  });
});