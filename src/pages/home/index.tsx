import MyCalendar from "../../conponents/calendar";
import UserState from "../../conponents/userState";

const HomePage = () => {
  return (
    <div>
      <UserState />
      <MyCalendar />
    </div>
  );
}

export default HomePage