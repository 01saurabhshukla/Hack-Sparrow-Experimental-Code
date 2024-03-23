import styles from '../styles/Pollpage.module.css';
import { countVotes } from '../util/pollHandling';
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

function generateColors(num) {
  let output = [];
  for (let i = 0; i < num; i++) {
    output.push(`hsla(${(i * 30) % 360}, 100%, 65%, 0.6)`);
  }
  return output;
}

let barThickness = 50;

export default function PollDisplay(props) {
  const sortedOptions = props.data.questions.filter((question) => question.type === "mcq").map(question => question.options.sort((a, b) => b.votes - a.votes));
  // console.log(questions.)
const questions = props.data.questions.filter((question)=> question.type === "mcq").map(question => {return question.question})
console.log(questions)
  const data = sortedOptions.map(ques => ({
    labels: ques.map(option => `    ${option.option}`),
    datasets: [{
      data: ques.map(option => option.votes),
      backgroundColor: generateColors(ques.length),
      color: 'white',
      barThickness: barThickness,
    }]
  }));

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      y: {
        ticks: {
          mirror: true,
          display: true,
          color: 'black',
          font: {
            size: 18,
            family: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
          },
          lineWidth: 30,
        },
        grid: {
          display: false
        }
      },
      x: {
        display: false
      }
    },
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 6
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
function countVotes1(data){
  let v=0;
  for(let i=0;i<data.length;i++) v+=data[i];
  return v;
}
  return (
    <>
      {data.map((data, index) => (
        <div>
          <div className={styles.titleContainer} >
        <div className={styles.title} >
          {questions[index]}
        </div>
      </div>
        <div key={index} className={styles.flexContainer}>
          
          <div className={styles.barMain}>
            <div className={styles.barContainer} style={{ height: (data.length * (barThickness + 5) + 32) + "px" }}>
              <Bar data={data} options={options} />
            </div>
            <div className={styles.votes}>
              {sortedOptions[index].map((option, index) => {
                const votes = option.votes;
                const votesText = (votes === 1) ? 'vote' : 'votes';
                const percentage = Math.round((votes / countVotes1(data.datasets[0].data) * 100 + Number.EPSILON) * 100) / 100;
                const output = `${percentage}% (${votes} ${votesText})`;
                return (
                  <div key={index} className={styles.voteBox}>
                    <p style={{ overflowWrap: 'none' }}>{output}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.donutContainer}>
            <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
          </div>
        </div>
        </div>
      ))}
    </>
  );
}
