import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  const addNewGoalHandler = (NewGoal) => {
    // setCourseGoals(courseGoals.concat(NewGoal));

    /**  The below mention approach does provide a foolproof result and must be used while **/
    /** Our previous state and the cureent state is inter-dependent. **/

    // setCourseGoals((prevCourseGoals) => {
    //   return prevCourseGoals.concat(NewGoal);
    // });

    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(NewGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal toAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
