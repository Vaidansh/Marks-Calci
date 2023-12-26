const calculateFormEl = document.getElementById('calculateForm');
const resultEl = document.getElementById("result");

const calculateMarks = (event)=>{
    const maxMarks = 400;
    const formatData = new FormData(calculateFormEl);

    const data = {};
    formatData.forEach((value,key)=>{
        data[key] = +value;
    });

    const totalMarks = data.maths + data.english + data.physics + data.chemistry;
    const percentage = Math.round((totalMarks / maxMarks) * 100);
    // console.log({data});
    // console.log(totalMarks);
    // console.log(percentage);
    // const resultEl = document.getElementById("p");
    resultEl.innerText = `You have got ${totalMarks} out of ${maxMarks} and your percentage is ${percentage}%.`
    // calculateFormEl.after(resultEl);
    event.preventDefault();
}