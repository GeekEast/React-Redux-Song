### Start Project
```sh
yarn start
```

### Summary
Name | What | Where | Analogy | Example
---------|----------|---------|-------| ----
 **Action** | Payloads send from view to store. | View | HTTP Post Body | `{ type: 'SONG_SELECTED', payload: "Hello world" }`
 **Action Creator** | Function to generate actions | View | Wrapper / **Decorator** | `(song) => {type:'SONG_SELECTED', payload: song}`
 `dispatch()` | Function that sends actions to store | View | gmail() | `dispatch(action)`
 **State** | Data needs to be centralized | Store | Static Variable in Java | 
 **Reducer** | Function to update state according to action | Store | Setter method in Java | `(selectSong = null, action) => {if (action.type === 'SONG_SELECTED') return action.payload;} return selectedSong`
 **Store** | The place to store state and reducer | Global | Bank | `createStore(combinedReducers)`


### What is Redux?
- **state** management library
- make **creating** complex app **easier**
- not only for React

### React without Redux
- Difficult to communicate between components
- No obvious code structure

> Therefore, it's difficult to write large and complex applications.

### When to use Redux
- Different users have different ways to use.
- Colloboration between users.
- Intense commnunication wtih servers or with websocket.
- View need to get data from multiple sources.

> Summaruy: Interaction Intense, Multiple Data Sources.

### Main Structure
1. **"What happened in the view?"**
2. **"How to send actions to store?"**
3. **"How to update the store in response to actions?"**

- **Actions**: payloads send from view to store. 
- `dispatch()`: function to send action from view to store 
- **Reducers**: specify how state changes in response to actions sent to the store. Reducer review `current state` and `action` as parameters.
- **Store**: hold state; return state `getState()`; update state `dispatch(action)`, register listener `subscribe(listener)`

### Question
- **How the redux match between reducer and action?**
  - It happens internal within the store.
  - `All the reducers will check the action type` (**Iteration**)
- **Can we deal with same type of actions in different reducers?**
  - Sure!
  - **All** these reducers will be triggerred when the action come.
- **Why we need use action creator?**
  - The reason is like whey you use decorator or wrapper function.
  - **Reason one**: trigger in the future.
  - **Reason two**: pass external parameters

### References
[阮一峰：Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

[Video: Redux Basics](https://egghead.io/courses/getting-started-with-redux)

[Video: Redux Advanced](https://egghead.io/courses/start-learning-react)

[Github Demo](https://github.com/GeekEast/React-Redux-Song)
