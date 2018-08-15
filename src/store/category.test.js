import reducer, { addCategory, updateCategory, CATEGORY_CREATE } from '../store/category';

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

      expect(state.categories[0].budget).toBe(category.budget);

      expect(state.categories[0].timestamp).toBeDefined();

      expect(state.categories[0].id).toBeDefined();

    });

    it('should update category', () => {

      const category = {name:'booze', budget:15};

      const addAction = addCategory(category);

      let state = reducer({categories:[]}, addAction);

      const catToUpdate = {...state.categories[0]};


      catToUpdate.budget = 10;

      const updateAction = updateCategory(catToUpdate);

      const updatedState = reducer(state, updateAction);


      expect(updatedState.categories[0].budget).toBe(10);






    });
  });
});