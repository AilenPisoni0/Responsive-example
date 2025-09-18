import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapExample() {
  return (
    <section className="p-0">
      <h2>Bootstrap</h2>
      <div className="row mx-0">
        <div className="col-sm-6 col-lg-3 bg-primary text-white p-2">Col 1</div>
        <div className="col-sm-6 col-lg-3 bg-secondary text-white p-2">Col 2</div>
        <div className="col-sm-6 col-lg-3 bg-success text-white p-2">Col 3</div>
        <div className="col-sm-6 col-lg-3 bg-danger text-white p-2">Col 4</div>
      </div>
    </section>
  );
}
