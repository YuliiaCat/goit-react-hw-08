import notebookSvg from "../assets/notebook.svg";

const HomePage = () => {

  return (
    <>
      <h1 className="greet">Welcome!</h1>
      <img className="notebook" src={notebookSvg} alt="Notebook" />
    </>
  );
}

export default HomePage;