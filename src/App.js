import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddWord from "./pages/AddWord";
import { useEffect, useReducer, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

const mockData = [
  {
    id: 1,
    english: "apple",
    korean: "사과",
    isMemorized: false,
  },
  {
    id: 2,
    english: "person",
    korean: "사람",
    isMemorized: false,
  },
  {
    id: 3,
    english: "culture",
    korean: "문화",
    isMemorized: true,
  },
  {
    id: 4,
    english: "balance",
    korean: "균형",
    isMemorized: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "ADD": {
      console.log(action.data);
      return [action.data, ...state];
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [id, setId] = useState(5);
  const [data, dispatch] = useReducer(reducer, []);
  const [eng, setEng] = useState();
  const [kor, setKor] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
  }, []);

  const addWordFn = () => {
    dispatch({
      type: "ADD",
      data: {
        id: id,
        english: eng,
        korean: kor,
        isMemorized: false,
      },
    });
    setId(id + 1);
    navigate("/");
  };

  const onUpdate = (targetId, eng, kor, isMemorized) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        english: eng,
        korean: kor,
        isMemorized,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home data={data} onDelete={onDelete} onUpdate={onUpdate} />} />
        <Route
          path="/addword"
          element={<AddWord addWordFn={addWordFn} setKor={setKor} setEng={setEng} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
