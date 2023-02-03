import  TaskInterface from "../interfaces/task_interface";
import StreakArray from "./streak_array";


class StreakItem implements TaskInterface {
  id = this.getID();
  streak = this.getStreak();

  constructor(
      public description: string,
      public image: URL,
      public startDate: string,
      public createdAt: Date,
    ) {}

    getID() {
      return Math.floor(Math.random() * 1000)
  }

  //method to get streak 
  getStreak() {
    let now = new Date()
    let diffInMs = now.getTime() - this.createdAt.getTime();
    return diffInMs
  }

  }

export default StreakItem