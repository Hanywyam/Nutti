import { useState } from "react";
import { Link } from "react-router-dom";
import MonthList from "../components/months/MonthList";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import monthly from "../db/Months";
import Header from "../components/Header";

const MonthDiary = () => {
  const [monthlyDiary, setMonthlyDiary] = useState(monthly);

  const [newMonth, setNewMonth] = useState("");
  const [selectData, setSelectData] = useState(null);

  const handleAddMonth = () => {
    if (newMonth.trim() !== "") {
      setMonthlyDiary([...monthlyDiary, { 월: newMonth }]);
      setNewMonth("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddMonth();
    }
  };

  const handleSelectMonth = (selectedMonth) => {
    const data = monthlyDiary.find((diary) => diary.월 === selectedMonth);
    setSelectData(data);
  };

  // 월별 일기 페이지
  return (
    <div className={monthlyStyle.monthlyWrap}>
      <Header />
      <form>
        <input
          type="text"
          value={newMonth}
          onChange={(e) => setNewMonth(e.target.value)}
          onKeyDown={handleEnter}
          placeholder="일기장 추가"
        />
        <button
          className={monthlyStyle.monthlyInputBtn}
          onClick={handleAddMonth}>
          월 추가
        </button>
      </form>

      <MonthItem monthlyDiary={monthlyDiary} onSelect={handleSelectMonth} />
    </div>
  );
};

export default MonthDiary;
