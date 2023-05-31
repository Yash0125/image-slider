import "./App.css";
import Carousel from "./components/Carousel";


function App() {
  const images = [
    {
      id: 1,
      src: "https://www.isu.edu/media/top-level/terminal-four/tutorial/Davis-Field-Renovation-2020.jpg",
      alt: "Image 1",
      title: "Artist rendering",
      description: "Artist rendering of completed Davis Field renovations",
    },
    {
      id: 2,
      src: "https://www.isu.edu/media/top-level/terminal-four/tutorial/200220-welcome-center-grand-opn-21.jpg",
      alt: "Center grand opening",
      title: "Center grand opening",
      description:
        "Ribbon cutting at the Student Welcome Center grand opening. President Satterlee and Tori Parks cut the ribbon at the Student Welcome Center opening",
    },
    {
      id: 3,
      src: "https://www.isu.edu/media/top-level/terminal-four/140828_GlowBowling_06.jpg",
      alt: "Glow Bowling",
      title: "Glow Bowling",
      description:
        "Glow Bowling at the Student Union Students participate in Glow Bowling during New Student Orientation",
    },
    {
      id: 4,
      src: "https://www.isu.edu/media/top-level/terminal-four/tutorial/100-Years-Web.png",
      alt: "100 Years of Pharmacy",
      title: "100 Years of Pharmacy",
      description:
        "Reflections: 100 Years of Pharmacy. Reflections: 100 Years of Pharmacy, a pharmacy student receives her white coat",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4px",
        }}
      >
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default App;
