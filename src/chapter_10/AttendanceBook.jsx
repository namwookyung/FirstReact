import React from "react";

const students = [
    {
        id:1,
        name: "Wookyung",
    },
    {
        id:2,
        name:"Eunbin",
    },
    {
        id:3,
        name:"Chorong",
    },
    {
        id:4,
        name:"Arin",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {/* id를 키값으로 사용 */}
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}

            {/* 포맷팅 된 문자열을 키값으로 사용 */}
            {students.map((student, index) => {
                <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}

            {/* 배열의 인덱스를 키값으로 사용 */}
            {students.map((student, index) => {
                <li key={index}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;