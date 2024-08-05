import "./App.css";

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];

  const reversedArray = () => {
    return originalArray.slice().reverse();
  };

  return (
    <div>
      <h1>Reverse Array</h1>
      <p>Reversed Array: {reversedArray().join(", ")}</p>
    </div>
  );
};

const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{randomQuote()}</p>
    </div>
  );
};

const CalculateBMI = () => {
  const weight = 70;
  const height = 1.75;

  const bmi = (w, h) => {
    return w / (h * h);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>BMI: {bmi(weight, height).toFixed(2)}</p>
    </div>
  );
};

const GradeAnalyzer = ({ score }) => {
  const analyzeGrade = (score) => {
    if (score >= 90 && score <= 100) {
      return { grade: "A", message: "Excellent work!" };
    } else if (score >= 80 && score <= 89) {
      return { grade: "B", message: "Good job!" };
    } else if (score >= 70 && score <= 79) {
      return { grade: "C", message: "Not bad, keep it up!" };
    } else if (score >= 60 && score <= 69) {
      return { grade: "D", message: "You passed, but aim higher next time." };
    } else {
      return {
        grade: "F",
        message: "Sorry, you didn't pass. Keep working hard!",
      };
    }
  };

  const { grade, message } = analyzeGrade(score);

  return (
    <div>
      <h1>Grade Analyzer</h1>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
      <p>{message}</p>
    </div>
  );
};

const TemperatureFeedback = ({ temperature }) => {
  const provideFeedback = (temperature) => {
    if (temperature < 0) {
      return "Brr, it's freezing!";
    } else if (temperature >= 0 && temperature <= 10) {
      return "It's quite cold, bundle up!";
    } else if (temperature > 10 && temperature <= 20) {
      return "The weather is cool and comfortable.";
    } else if (temperature > 20 && temperature <= 30) {
      return "It's a warm day!";
    } else {
      return "It's hot outside, stay cool!";
    }
  };
  const feedback = provideFeedback(temperature);

  return (
    <div>
      <h1>Temperature Feedback</h1>
      <p>Current Temperature: {temperature} degree celsius</p>
      <p>{feedback}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ReverseArray />
      <GenerateQuote />
      <CalculateBMI />
      <GradeAnalyzer score={85} />
      <TemperatureFeedback temperature={25} />
    </main>
  );
}
