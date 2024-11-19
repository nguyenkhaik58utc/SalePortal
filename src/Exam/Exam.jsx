import React from 'react';
import IconEnable from '../Icon/IconEnable.jsx';
import image from '../Icon/Images/No_Image_Available.jpg';
import imageUpdate from '../Icon/Images/icon-update.png';
import '../Exam/Exam.css'
import { useNavigate } from "react-router-dom";

const exams = [
  { id: 1, name: 'Mathematics', date: '2023-10-01', status: true },
  { id: 2, name: 'Physics', date: '2023-10-05', status: true },
  { id: 3, name: 'Chemistry', date: '2023-10-10', status: true },
  { id: 4, name: 'Biology', date: '2023-10-15', status: true },
];

const ExamList = () => {
    const navigate = useNavigate();

  return (
    <div>
      <ul>
        {exams.map((exam, index) => (
          <div className="card" key={exam.id}>
            <img style={{width:100}} src={image} alt="Thumbnail"/>
            
            <div className="card-content">
                <h2 className="card-title">
                {exam.name}
                </h2>
                <div className="card-meta">
                <span><i className="fas fa-clock"></i> {exam.date}</span>
                </div>
                <p className="card-description">
                {exam.name}
                </p>
            </div>
            <div style={{display: 'flex', padding: "20px"}}>
                <IconEnable id={index}/>            
                <img style={{width:25, height: 25, marginLeft: '10px'}} src={imageUpdate} alt="icon update"
                 onClick={() => {navigate("question")} }/>
            </div>
        </div>      
        ))}
      </ul>
    </div>
  );
};

export default ExamList;